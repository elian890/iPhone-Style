(() => {
  'use strict';

  const CSV_URL = 'https://docs.google.com/spreadsheets/d/1A76HzLtPNQZq3cG-XgsqSTBLYRH7BusSB4MD2wA52OA/export?format=csv&gid=0';
  const WHATSAPP_NUMBER = '5493476658161';
  const INSTALLMENTS = [3, 6, 9, 12, 18];
  const MODEL_IMAGES = {
    'IPHONE 13': 'iphone-13.jpg',
    'IPHONE 13 PRO MAX': 'iphone-13-pro-max.jpg',
    'IPHONE 15': 'iphone-15.jpg',
    'IPHONE 15 PRO': 'iphone-15-pro.jpg',
    'IPHONE 15 PRO MAX': 'iphone-15-pro-max.jpg',
    'IPHONE 16': 'iphone-16.jpg',
    'IPHONE 16 PRO': 'iphone-16-pro.jpg',
    'IPHONE 16 PRO MAX': 'iphone-16-pro-max.jpg'
  };
  const PLACEHOLDER_IMAGE = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='480' height='480' viewBox='0 0 480 480'%3E%3Crect width='480' height='480' fill='%231b1b1d'/%3E%3Crect x='158' y='70' width='164' height='340' rx='30' fill='none' stroke='%2386868b' stroke-width='10'/%3E%3Ccircle cx='240' cy='378' r='8' fill='%2386868b'/%3E%3C/svg%3E";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const elements = {
    catalog: $('#catalog'), preloader: $('#preloader'), modal: $('#canjeModal'), modalClose: $('#closeModal'),
    tradeinForm: $('#tradeinForm'), targetProduct: $('#targetProduct'), currentYear: $('#currentYear'),
    lightbox: $('#productLightbox'), lightboxClose: $('#closeLightbox'), lightboxImage: $('#lightboxImage'),
    lightboxTitle: $('#lightboxTitle'), lightboxDescription: $('#lightboxDescription')
  };
  const state = { selectedProduct: '', lastFocus: null, lastLightboxFocus: null, selectedCard: null, dollarRate: 0 };

  const normalize = (value = '') => String(value).replace(/^\uFEFF/, '').trim();
  const headerKey = (value) => normalize(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
  const textFromRow = (row) => row.map(normalize).filter(Boolean).join(' ');
  const isBlankRow = (row) => !row.some((cell) => normalize(cell));

  const parseNumber = (value) => {
    const raw = normalize(value).replace(/\s/g, '').replace(/[^\d,.-]/g, '');
    if (!raw) return Number.NaN;
    const comma = raw.lastIndexOf(',');
    const dot = raw.lastIndexOf('.');
    let prepared = raw;
    if (comma !== -1 && dot !== -1) prepared = comma > dot ? raw.replace(/\./g, '').replace(',', '.') : raw.replace(/,/g, '');
    else if (comma !== -1) prepared = (raw.match(/,/g) || []).length > 1 || raw.length - comma - 1 === 3 ? raw.replace(/,/g, '') : raw.replace(',', '.');
    else if (dot !== -1) prepared = (raw.match(/\./g) || []).length > 1 || raw.length - dot - 1 === 3 ? raw.replace(/\./g, '') : raw;
    return Number(prepared);
  };

  const formatARS = (value) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(value);
  const formatUSD = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
  const append = (parent, tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    parent.append(node);
    return node;
  };

  const setCatalogStatus = (message) => {
    elements.catalog.replaceChildren();
    elements.catalog.setAttribute('aria-busy', 'false');
    append(elements.catalog, 'p', 'catalog-status', message);
  };

  const findDollarRate = (rows) => rows.reduce((rate, row) => {
    if (rate) return rate;
    const index = row.findIndex((cell) => headerKey(cell).includes('COTIZACION DOLAR'));
    const value = index === -1 ? Number.NaN : parseNumber(row[index + 1]);
    return Number.isFinite(value) && value > 0 ? value : 0;
  }, 0);

  const sectionForHeader = (rows, index) => {
    let title = 'Equipos disponibles';
    let warranty = '';
    for (let cursor = index - 1; cursor >= Math.max(0, index - 5); cursor -= 1) {
      const line = textFromRow(rows[cursor]);
      const key = headerKey(line);
      if (!warranty && (key.includes('GARANTIA') || key.includes('DIAS'))) warranty = line;
      if (key.includes('IPHONES')) { title = line.replace(//g, '').trim(); break; }
    }
    return { title, warranty };
  };

  const parseCatalog = (rows) => {
    state.dollarRate = findDollarRate(rows);
    const products = [];
    rows.forEach((row, headerRow) => {
      const headers = row.map(headerKey);
      const indexOf = (label) => headers.findIndex((header) => header.includes(label));
      const modelIndex = indexOf('MODELO');
      const usdIndex = headers.findIndex((header) => header === 'USD' || header.startsWith('USD '));
      if (modelIndex === -1 || usdIndex === -1) return;

      const indices = { capacity: indexOf('GB'), color: indexOf('COLOR'), battery: indexOf('BATERIA'), details: indexOf('DETALLES'), cash: indexOf('PESOS'), transfer: indexOf('TRANSFERENCIA'), stock: indexOf('STOCK'), image: indexOf('IMAGEN') };
      const section = sectionForHeader(rows, headerRow);
      for (let cursor = headerRow + 1; cursor < rows.length; cursor += 1) {
        const current = rows[cursor];
        if (isBlankRow(current)) break;
        const candidateHeaders = current.map(headerKey);
        if (candidateHeaders.some((cell) => cell.includes('MODELO')) && candidateHeaders.some((cell) => cell === 'USD' || cell.startsWith('USD '))) break;

        const model = normalize(current[modelIndex]);
        const usd = parseNumber(current[usdIndex]);
        const stock = indices.stock === -1 ? null : parseNumber(current[indices.stock]);
        if (!model || !Number.isFinite(usd) || usd <= 0 || (stock !== null && stock <= 0)) continue;

        const installments = INSTALLMENTS.reduce((list, term) => {
          const column = headers.findIndex((header) => header.includes(`${term} CUOTAS`));
          const value = column === -1 ? Number.NaN : parseNumber(current[column]);
          return Number.isFinite(value) && value > 0 ? { ...list, [term]: value } : list;
        }, {});
        const capacityRaw = indices.capacity === -1 ? '' : normalize(current[indices.capacity]);
        const capacity = capacityRaw && !/(GB|TB)$/i.test(capacityRaw) ? `${capacityRaw} GB` : capacityRaw;
        const color = indices.color === -1 ? '' : normalize(current[indices.color]);
        products.push({ section, model, capacity, color, battery: indices.battery === -1 ? '' : normalize(current[indices.battery]), details: indices.details === -1 ? '' : normalize(current[indices.details]), usd, cash: indices.cash === -1 ? Number.NaN : parseNumber(current[indices.cash]), transfer: indices.transfer === -1 ? Number.NaN : parseNumber(current[indices.transfer]), installments, image: indices.image === -1 ? '' : normalize(current[indices.image]) });
      }
    });
    return products;
  };

  const buildImage = ({ image, model }) => {
    const element = document.createElement('img');
    element.src = image || MODEL_IMAGES[headerKey(model)] || PLACEHOLDER_IMAGE;
    element.alt = model;
    element.loading = 'lazy';
    element.addEventListener('error', () => { if (element.src !== PLACEHOLDER_IMAGE) element.src = PLACEHOLDER_IMAGE; }, { once: true });
    return element;
  };

  const createCard = (product) => {
    const { model, capacity, color, battery, details, usd, cash, transfer, installments } = product;
    const name = [model, capacity].filter(Boolean).join(' · ');
    const cashPrice = Number.isFinite(cash) ? cash : usd * state.dollarRate;
    const card = document.createElement('article');
    card.className = 'product-card';
    const imageBox = append(card, 'button', 'product-card__image');
    imageBox.type = 'button';
    imageBox.setAttribute('aria-label', `Ampliar foto de ${name}`);
    imageBox.append(buildImage(product));
    imageBox.addEventListener('click', () => openLightbox(product, imageBox.querySelector('img')));
    const body = append(card, 'div', 'product-card__body');
    append(body, 'h3', 'product-card__title', name);
    const meta = [color && `Color: ${color}`, battery && `Batería: ${battery}`, details && `Detalle: ${details}`].filter(Boolean).join(' · ');
    append(body, 'p', 'product-card__meta', meta);
    append(body, 'div', 'price-usd', `Precio en USD: ${formatUSD(usd)}`);
    const arsLine = [`Efectivo: ${formatARS(cashPrice)}`, Number.isFinite(transfer) && `Transferencia: ${formatARS(transfer)}`].filter(Boolean).join(' · ');
    append(body, 'p', 'price-ars', arsLine);
    const benefit = append(body, 'div', 'benefit-box');
    append(benefit, 'span', '', '🎁');
    const benefitText = append(benefit, 'span');
    append(benefitText, 'strong', '', 'Con tu compra te regalamos');
    benefitText.append(document.createElement('br'), document.createTextNode('Cargador rápido + cable + funda + vidrio templado + garantía.'));
    const plans = append(body, 'section', 'installments');
    append(plans, 'h4', '', 'Cuotas fijas en pesos');
    INSTALLMENTS.forEach((term) => {
      const perInstallment = installments[term] || cashPrice / term;
      const row = append(plans, 'div', 'installment');
      append(row, 'span', '', `${term} cuotas de`);
      append(row, 'strong', '', formatARS(perInstallment));
    });
    const actions = append(body, 'div', 'card-actions');
    const buy = append(actions, 'button', 'button button--primary', 'Comprar');
    buy.type = 'button';
    buy.addEventListener('click', () => openWhatsApp([`Hola iPhone Style!`, `Me interesa comprar el *${name}*.`, `Lo vi en la web a ${formatUSD(usd)} (efectivo ${formatARS(cashPrice)}).`, '¿Podemos coordinar?'].join('\n')));
    const tradein = append(actions, 'button', 'button button--secondary', 'Plan Canje');
    tradein.type = 'button';
    tradein.addEventListener('click', () => openModal(name, card));
    card.addEventListener('click', ({ target }) => {
      if (target.closest('button, a')) return;
      openLightbox(product, imageBox.querySelector('img'));
    });
    return card;
  };

  const renderCatalog = (products) => {
    elements.catalog.replaceChildren();
    elements.catalog.setAttribute('aria-busy', 'false');
    if (!products.length) return setCatalogStatus('Por el momento no hay equipos disponibles.');
    let currentSection = '';
    products.forEach((product) => {
      const { title, warranty } = product.section;
      if (title !== currentSection) {
        currentSection = title;
        append(elements.catalog, 'h3', 'catalog-section-title', title);
        if (warranty) append(elements.catalog, 'p', 'catalog-section-subtitle', warranty);
      }
      elements.catalog.append(createCard(product));
    });
  };

  const openWhatsApp = (message) => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  const openLightbox = (product, image) => {
    const { model, capacity, color, battery, details } = product;
    const productName = [model, capacity].filter(Boolean).join(' · ');
    const attributes = [color && `acabado ${color}`, battery && `batería ${battery}`].filter(Boolean).join(', ');
    state.lastLightboxFocus = document.activeElement;
    elements.lightboxTitle.textContent = productName;
    elements.lightboxDescription.textContent = `${attributes ? `Una selección con ${attributes}. ` : ''}${details ? `${details}. ` : ''}Un equipo elegido para disfrutar una experiencia Apple premium desde el primer día.`;
    elements.lightboxImage.src = image.currentSrc || image.src || PLACEHOLDER_IMAGE;
    elements.lightboxImage.alt = `Vista ampliada de ${productName}`;
    elements.lightbox.classList.add('is-open');
    elements.lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    elements.lightboxClose.focus();
  };
  const closeLightbox = () => {
    elements.lightbox.classList.remove('is-open');
    elements.lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    state.lastLightboxFocus?.focus();
  };
  const openModal = (productName, card) => {
    state.selectedProduct = productName;
    state.lastFocus = document.activeElement;
    state.selectedCard?.classList.remove('is-selected');
    state.selectedCard = card;
    card.classList.add('is-selected');
    window.setTimeout(() => {
      elements.targetProduct.textContent = productName;
      elements.modal.classList.add('is-open');
      elements.modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
      $('#tradeinModel').focus();
    }, 150);
  };
  const closeModal = () => {
    elements.modal.classList.remove('is-open');
    elements.modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    state.selectedCard?.classList.remove('is-selected');
    state.lastFocus?.focus();
  };

  const handleTradeinSubmit = (event) => {
    event.preventDefault();
    if (!elements.tradeinForm.reportValidity() || !state.selectedProduct) return;
    const { model, capacity, battery, condition, details } = Object.fromEntries(new FormData(elements.tradeinForm));
    const message = ['Hola iPhone Style!', `Me interesa el *${state.selectedProduct}*.`, '', '*PLAN CANJE — equipo a entregar*', `📱 *Modelo:* ${normalize(model)}`, `💾 *Capacidad:* ${capacity}`, `🔋 *Batería:* ${battery}%`, `✨ *Estado:* ${condition}`, `📝 *Detalles:* ${normalize(details) || 'Sin detalles adicionales informados'}`, '', '¿Me pasarían la diferencia a abonar?'].join('\n');
    openWhatsApp(message);
    elements.tradeinForm.reset();
    closeModal();
  };

  const trapModalFocus = (event) => {
    const activeLayer = elements.lightbox.classList.contains('is-open') ? elements.lightbox : elements.modal;
    const isOpen = activeLayer.classList.contains('is-open');
    if (event.key === 'Escape' && isOpen) return activeLayer === elements.lightbox ? closeLightbox() : closeModal();
    if (event.key !== 'Tab' || !isOpen) return;
    const focusable = [...activeLayer.querySelectorAll('button, input, select, textarea, [href]')].filter((node) => !node.disabled);
    const [first] = focusable; const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  };

  const loadCatalog = async () => {
    if (!window.Papa) return setCatalogStatus('No se pudo cargar el lector del catálogo. Actualizá la página e intentá nuevamente.');
    try {
      const response = await fetch(CSV_URL, { cache: 'no-store' });
      if (!response.ok) throw new Error(`Google Sheets respondió con estado ${response.status}.`);
      const csv = await response.text();
      const { data, errors } = window.Papa.parse(csv, { header: false, skipEmptyLines: 'greedy' });
      if (errors.length) console.warn('Advertencias al leer el CSV:', errors);
      renderCatalog(parseCatalog(data));
    } catch (error) {
      console.error('No se pudo cargar el catálogo:', error);
      setCatalogStatus('No pudimos actualizar el catálogo. Probá nuevamente en unos instantes.');
    }
  };

  const configureBrandFallbacks = () => document.querySelectorAll('.brand-logo').forEach((logo) => {
    const showFallback = () => { logo.hidden = true; logo.nextElementSibling.hidden = false; };
    logo.addEventListener('error', showFallback, { once: true });
    if (logo.complete && !logo.naturalWidth) showFallback();
  });

  const init = () => {
    elements.currentYear.textContent = new Date().getFullYear();
    configureBrandFallbacks();
    elements.modalClose.addEventListener('click', closeModal);
    elements.modal.addEventListener('click', ({ target }) => { if (target === elements.modal) closeModal(); });
    elements.lightboxClose.addEventListener('click', closeLightbox);
    elements.lightbox.addEventListener('click', ({ target }) => { if (target === elements.lightbox) closeLightbox(); });
    elements.lightboxImage.addEventListener('error', () => { elements.lightboxImage.src = PLACEHOLDER_IMAGE; }, { once: true });
    elements.tradeinForm.addEventListener('submit', handleTradeinSubmit);
    document.addEventListener('keydown', trapModalFocus);
    loadCatalog();
  };

  window.addEventListener('load', () => elements.preloader.classList.add('is-hidden'), { once: true });
  document.addEventListener('DOMContentLoaded', init, { once: true });
})();
