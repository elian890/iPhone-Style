const WHATSAPP_NUMBER = "5493476658161";

const fallbackCatalog = [
  { category: "Usado premium", name: "iPhone 13", storage: "128 GB", color: "Midnight", battery: "84%", transfer: "$553.316", installment: "$250.837", image: "https://iphone-style-ar.github.io/iPhone-Style/img/IMG_5174.jpeg" },
  { category: "Usado premium", name: "iPhone 13", storage: "128 GB", color: "Midnight", battery: "88%", transfer: "$569.590", installment: "$258.214", image: "https://iphone-style-ar.github.io/iPhone-Style/img/IMG_5174.jpeg" },
  { category: "Usado premium", name: "iPhone 13", storage: "256 GB", color: "Red", battery: "100%", transfer: "$602.138", installment: "$272.969", image: "https://iphone-style-ar.github.io/iPhone-Style/img/IMG_5174.jpeg" },
  { category: "Usado premium", name: "iPhone 15", storage: "128 GB", color: "Blue", battery: "84%", transfer: "$813.700", installment: "$368.877", image: "https://iphone-style-ar.github.io/iPhone-Style/img/IMG_5178.jpeg" },
  { category: "Usado premium", name: "iPhone 15", storage: "128 GB", color: "Black", battery: "90%", transfer: "$846.248", installment: "$383.632", image: "https://iphone-style-ar.github.io/iPhone-Style/img/IMG_5178.jpeg" },
  { category: "Usado premium", name: "iPhone 15 Pro", storage: "128 GB", color: "Black", battery: "86%", transfer: "$1.025.262", installment: "$464.785", image: "https://iphone-style-ar.github.io/iPhone-Style/img/IMG_5183.jpeg" },
  { category: "Usado premium", name: "iPhone 15 Pro", storage: "128 GB", color: "White", battery: "87%", transfer: "$1.025.262", installment: "$464.785", image: "https://iphone-style-ar.github.io/iPhone-Style/img/IMG_5183.jpeg" },
  { category: "Usado premium", name: "iPhone 15 Pro", storage: "128 GB", color: "Black", battery: "88%", transfer: "$1.025.262", installment: "$464.785", image: "https://iphone-style-ar.github.io/iPhone-Style/img/IMG_5183.jpeg" },
  { category: "Usado premium", name: "iPhone 15 Pro", storage: "128 GB", color: "Black", battery: "91%", transfer: "$1.041.536", installment: "$472.163", image: "https://iphone-style-ar.github.io/iPhone-Style/img/IMG_5183.jpeg" },
  { category: "Usado premium", name: "iPhone 15 Pro", storage: "128 GB", color: "Black", battery: "100%", transfer: "$1.074.084", installment: "$486.918", image: "https://iphone-style-ar.github.io/iPhone-Style/img/IMG_5183.jpeg" },
  { category: "Usado premium", name: "iPhone 15 Pro Max", storage: "256 GB", color: "Black", battery: "100%", transfer: "$1.269.372", installment: "$575.449", image: "https://iphone-style-ar.github.io/iPhone-Style/img/IMG_5184.jpeg" },
  { category: "Usado premium", name: "iPhone 16", storage: "128 GB", color: "Black", battery: "90%", transfer: "$1.074.084", installment: "$486.918", image: "https://iphone-style-ar.github.io/iPhone-Style/img/IMG_5185.jpeg" },
  { category: "Usado premium", name: "iPhone 16", storage: "128 GB", color: "Black", battery: "93%", transfer: "$1.074.084", installment: "$486.918", image: "https://iphone-style-ar.github.io/iPhone-Style/img/IMG_5185.jpeg" },
  { category: "Usado premium", name: "iPhone 16", storage: "128 GB", color: "Pink", battery: "93%", transfer: "$1.074.084", installment: "$486.918", image: "https://iphone-style-ar.github.io/iPhone-Style/img/IMG_5185.jpeg" },
  { category: "Usado premium", name: "iPhone 16 Pro", storage: "128 GB", color: "White", battery: "91%", transfer: "$1.301.920", installment: "$590.204", image: "https://iphone-style-ar.github.io/iPhone-Style/img/IMG_5187.jpeg" },
  { category: "Usado premium", name: "iPhone 16 Pro Max", storage: "256 GB", color: "Black", battery: "92%", transfer: "$1.497.208", installment: "$678.734", image: "https://iphone-style-ar.github.io/iPhone-Style/img/IMG_5189.jpeg" },
  { category: "Outlet", name: "iPhone 13 Pro Max", storage: "128 GB", color: "Sierra Blue", battery: "68%", detail: "Sin Face ID", transfer: "$699.782", installment: "$317.235", image: "https://iphone-style-ar.github.io/iPhone-Style/img/IMG_5177.jpeg" },
  { category: "Outlet", name: "iPhone 13 Pro Max", storage: "128 GB", color: "Alpine Green", battery: "76%", detail: "Cámara x0,5 no funciona", transfer: "$699.782", installment: "$317.235", image: "https://iphone-style-ar.github.io/iPhone-Style/img/IMG_5177.jpeg" },
  { category: "Outlet", name: "iPhone 16 Pro", storage: "128 GB", color: "Natural", battery: "91%", detail: "Pantalla cambiada", transfer: "$1.139.180", installment: "$516.428", image: "https://iphone-style-ar.github.io/iPhone-Style/img/IMG_5187.jpeg" },
];

// Valores sincronizados desde la planilla de inventario.
const paymentDetails = [
  { usd: "US$ 340", cash: "$537.200", installment6: "$134.640", installment9: "$97.138", installment12: "$82.536", installment18: "$59.943" },
  { usd: "US$ 350", cash: "$553.000", installment6: "$138.600", installment9: "$99.995", installment12: "$84.964", installment18: "$61.706" },
  { usd: "US$ 370", cash: "$584.600", installment6: "$146.520", installment9: "$105.709", installment12: "$89.819", installment18: "$65.232" },
  { usd: "US$ 500", cash: "$790.000", installment6: "$198.000", installment9: "$142.850", installment12: "$121.377", installment18: "$88.151" },
  { usd: "US$ 520", cash: "$821.600", installment6: "$205.920", installment9: "$148.564", installment12: "$126.232", installment18: "$91.677" },
  { usd: "US$ 630", cash: "$995.400", installment6: "$249.480", installment9: "$179.990", installment12: "$152.935", installment18: "$111.070" },
  { usd: "US$ 630", cash: "$995.400", installment6: "$249.480", installment9: "$179.990", installment12: "$152.935", installment18: "$111.070" },
  { usd: "US$ 630", cash: "$995.400", installment6: "$249.480", installment9: "$179.990", installment12: "$152.935", installment18: "$111.070" },
  { usd: "US$ 640", cash: "$1.011.200", installment6: "$253.440", installment9: "$182.847", installment12: "$155.362", installment18: "$112.833" },
  { usd: "US$ 660", cash: "$1.042.800", installment6: "$261.360", installment9: "$188.561", installment12: "$160.218", installment18: "$116.359" },
  { usd: "US$ 780", cash: "$1.232.400", installment6: "$308.881", installment9: "$222.845", installment12: "$189.348", installment18: "$137.515" },
  { usd: "US$ 660", cash: "$1.042.800", installment6: "$261.360", installment9: "$188.561", installment12: "$160.218", installment18: "$116.359" },
  { usd: "US$ 660", cash: "$1.042.800", installment6: "$261.360", installment9: "$188.561", installment12: "$160.218", installment18: "$116.359" },
  { usd: "US$ 660", cash: "$1.042.800", installment6: "$261.360", installment9: "$188.561", installment12: "$160.218", installment18: "$116.359" },
  { usd: "US$ 800", cash: "$1.264.000", installment6: "$316.801", installment9: "$228.559", installment12: "$194.203", installment18: "$141.041" },
  { usd: "US$ 920", cash: "$1.453.600", installment6: "$364.321", installment9: "$262.843", installment12: "$223.334", installment18: "$162.198" },
  { usd: "US$ 430", cash: "$679.400", installment6: "$170.280", installment9: "$122.851", installment12: "$104.384", installment18: "$75.810" },
  { usd: "US$ 430", cash: "$679.400", installment6: "$170.280", installment9: "$122.851", installment12: "$104.384", installment18: "$75.810" },
  { usd: "US$ 700", cash: "$1.106.000", installment6: "$277.200", installment9: "$199.989", installment12: "$169.928", installment18: "$123.411" },
];

fallbackCatalog.forEach((product, index) => Object.assign(product, paymentDetails[index]));

// Fuente de verdad del catálogo. Google Sheets publica este CSV al actualizar la planilla.
const CATALOG_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQomt3Xo_DZR7eqN9v1u6dshs5se0jl1BDyUwb0LFCBahX9DHDda2FqDj5t2sESNWDvwtQksAepJAuu/pub?gid=0&single=true&output=csv";
const DEFAULT_PRODUCT_IMAGE = "logo-iph-style.png.PNG";
const CATALOG_REFRESH_INTERVAL = 60_000;
const CATALOG_REQUEST_TIMEOUT = 12_000;
let catalog = fallbackCatalog.map((product) => ({ ...product }));

const catalogCategories = [
  {
    id: "nuevos-sellados",
    category: "Nuevo sellado",
    eyebrow: "Estreno garantizado",
    title: "Nuevos en caja sellada.",
    description: "Equipos nuevos con un año de garantía oficial Apple.",
    guarantee: "1 año de garantía oficial Apple",
  },
  {
    id: "usados-premium",
    category: "Usado premium",
    eyebrow: "Selección verificada",
    title: "Usados premium.",
    description: "Equipos revisados, con batería informada y 90 días de garantía.",
    guarantee: "90 días de garantía",
  },
  {
    id: "outlet",
    category: "Outlet",
    eyebrow: "Oportunidades seleccionadas",
    title: "Outlet.",
    description: "Equipos con detalles específicos informados de forma clara y 30 días de garantía.",
    guarantee: "30 días de garantía",
  },
];

const installmentOptions = [
  { label: "3 cuotas", key: "installment" },
  { label: "6 cuotas", key: "installment6" },
  { label: "9 cuotas", key: "installment9" },
  { label: "12 cuotas", key: "installment12" },
  { label: "18 cuotas", key: "installment18" },
];

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const catalogGroups = document.querySelector("#catalog-groups");
const catalogStatus = document.querySelector("#catalog-status");
let selectedTradeInProduct = null;
let catalogFingerprint = "";
let catalogRefreshInFlight = false;

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeHeader(value = "") {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .toUpperCase();
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && quoted && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(cell.trim());
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell.trim());
      if (row.some(Boolean)) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  row.push(cell.trim());
  if (row.some(Boolean)) rows.push(row);
  return rows;
}

function sheetCategory(row) {
  const text = normalizeHeader(row.join(" "));
  if (text.includes("NUEVOS EN CAJA")) return "Nuevo sellado";
  if (text.includes("USADOS PREMIUM")) return "Usado premium";
  if (text.includes("OUTLET")) return "Outlet";
  return null;
}

function sheetValue(row, headers, name) {
  const index = headers.indexOf(name);
  return index >= 0 ? row[index]?.trim() || "" : "";
}

function displayPrice(value) {
  const cleanValue = String(value || "").trim();
  if (!cleanValue) return "A consultar";
  return cleanValue.startsWith("$") ? cleanValue : `$${cleanValue}`;
}

function safeImageUrl(value) {
  const image = String(value || "").trim();
  if (!image) return DEFAULT_PRODUCT_IMAGE;

  try {
    const url = new URL(image);
    return ["https:", "http:"].includes(url.protocol) ? url.href : DEFAULT_PRODUCT_IMAGE;
  } catch {
    return DEFAULT_PRODUCT_IMAGE;
  }
}

function parseCatalogSheet(csv) {
  const rows = parseCsv(csv);
  let category = null;
  let headers = [];
  const products = [];

  rows.forEach((row) => {
    const categoryFromRow = sheetCategory(row);
    if (categoryFromRow) {
      category = categoryFromRow;
      headers = [];
      return;
    }

    const normalizedRow = row.map(normalizeHeader);
    if (normalizedRow.includes("IMAGEN") && normalizedRow.includes("MODELO")) {
      headers = normalizedRow;
      return;
    }

    if (!category || !headers.length) return;
    const name = sheetValue(row, headers, "MODELO");
    if (!name) return;

    const storage = sheetValue(row, headers, "GB");
    products.push({
      category,
      name,
      storage: storage ? `${storage} GB` : "Capacidad a confirmar",
      color: sheetValue(row, headers, "COLOR") || "Color a confirmar",
      battery: sheetValue(row, headers, "BATERIA"),
      detail: sheetValue(row, headers, "DETALLES"),
      image: safeImageUrl(sheetValue(row, headers, "IMAGEN")),
      usd: displayPrice(sheetValue(row, headers, "USD")),
      cash: displayPrice(sheetValue(row, headers, "PESOS")),
      transfer: displayPrice(sheetValue(row, headers, "TRANSFERENCIA")),
      installment: displayPrice(sheetValue(row, headers, "3 CUOTAS FIJAS")),
      installment6: displayPrice(sheetValue(row, headers, "6 CUOTAS FIJAS")),
      installment9: displayPrice(sheetValue(row, headers, "9 CUOTAS FIJAS")),
      installment12: displayPrice(sheetValue(row, headers, "12 CUOTAS FIJAS")),
      installment18: displayPrice(sheetValue(row, headers, "18 CUOTAS FIJAS")),
    });
  });

  return products;
}

function productMeta(product) {
  const items = [product.color];
  if (product.battery) items.push(`Batería: ${product.battery}`);
  if (product.detail) items.push(product.detail);
  return items.filter(Boolean).join(" · ");
}

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function productDescription(product) {
  return `${product.name} · ${product.storage} · ${productMeta(product)}`;
}

function buyMessage(product) {
  const pricing = product.usd === "A consultar" || product.cash === "A consultar"
    ? "Quisiera confirmar el precio y la disponibilidad."
    : `Lo vi en la web a ${formatUsdPrice(product.usd)} USD (efectivo ${product.cash}).`;
  return `Hola iPhone Style!\nMe interesa comprar el ${product.name} · ${product.storage}.\n${pricing}\n¡Quiero coordinar una cita en alguna de sus sucursales! ✨`;
}

function formatUsdPrice(value) {
  return String(value || "A consultar").replace("US$", "$").replace(/\s+/g, " ").trim();
}

function priceTile(label, value, variant = "") {
  return `<div class="price-tile ${variant}"><span>${label}</span><strong>${value}</strong></div>`;
}

function installmentTile(label, value) {
  return `<div class="installment-tile"><span>${label}</span><strong>${value}</strong><small>por cuota</small></div>`;
}

function productMarkup(product, index) {
  const installments = installmentOptions
    .map(({ label, key }) => `<div class="installment-row"><span>${label} de</span><strong>${escapeHtml(product[key])}</strong></div>`)
    .join("");

  return `
    <article class="product-card" data-reveal data-product-index="${index}" style="--reveal-delay: ${(index % 3) * 55}ms">
      <button class="product-detail-trigger" type="button" data-select-product="${index}" aria-label="Ver ficha de ${escapeHtml(product.name)} ${escapeHtml(product.storage)}"></button>
      <div class="product-card-top">
        <div><h3>${escapeHtml(product.name)} · ${escapeHtml(product.storage)}</h3><p>${escapeHtml(productMeta(product))}</p></div>
      </div>
      <div class="product-visual">
        <img class="product-image product-image-main" src="${escapeHtml(product.image)}" alt="${escapeHtml(`${product.name} ${product.color} de ${product.storage}`)}" loading="lazy" decoding="async" />
      </div>
      <div class="product-pricing" aria-label="Precios de ${escapeHtml(product.name)}">
        <p class="product-usd-price">Precio en USD: <strong>${escapeHtml(formatUsdPrice(product.usd))}</strong></p>
        <p class="product-payment-copy">Efectivo: ${escapeHtml(product.cash)} · Transferencia: ${escapeHtml(product.transfer)}</p>
        <div class="product-gift" aria-label="Regalo incluido con la compra">
          <span aria-hidden="true">🎁</span>
          <p><strong>Con tu compra te regalamos</strong>Cargador rápido + cable + funda + vidrio templado + garantía.</p>
        </div>
        <div class="installment-panel">
          <p class="installment-heading">Cuotas fijas en pesos</p>
          <div class="installment-rows">${installments}</div>
        </div>
      </div>
      <div class="product-footer">
        <a class="product-buy" href="${whatsappUrl(buyMessage(product))}" target="_blank" rel="noreferrer" aria-label="Comprar ${escapeHtml(product.name)} ${escapeHtml(product.storage)}">Comprar</a>
        <button class="product-trade-in" type="button" data-trade-in-product="${index}">Plan Canje</button>
      </div>
    </article>`;
}

function catalogGroupMarkup(group) {
  const products = catalog
    .map((product, index) => ({ product, index }))
    .filter(({ product }) => product.category === group.category);

  if (!products.length) return "";

  return `
    <section class="catalog-group" id="${group.id}" aria-labelledby="${group.id}-title">
      <div class="catalog-group-heading" data-reveal>
        <div>
          <p class="eyebrow">${group.eyebrow}</p>
          <h3 id="${group.id}-title">${group.title}</h3>
        </div>
        <p>${group.description}</p>
      </div>
      <div class="catalog-grid">
        ${products.map(({ product, index }) => productMarkup(product, index)).join("")}
      </div>
    </section>`;
}

async function fetchLiveCatalog() {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), CATALOG_REQUEST_TIMEOUT);
  const requestUrl = new URL(CATALOG_CSV_URL);

  // Evita que el navegador reutilice una respuesta antigua entre actualizaciones.
  requestUrl.searchParams.set("_", String(Date.now()));

  try {
    const response = await fetch(requestUrl, { cache: "no-store", signal: controller.signal });
    if (!response.ok) throw new Error(`Google Sheets respondió ${response.status}`);

    const liveCatalog = parseCatalogSheet(await response.text());
    if (!liveCatalog.length) throw new Error("La planilla no devolvió equipos");
    return liveCatalog;
  } finally {
    window.clearTimeout(timeoutId);
  }
}

async function loadCatalog() {
  if (catalogRefreshInFlight) return;
  catalogRefreshInFlight = true;
  let source = "la planilla en vivo";
  let nextCatalog;

  try {
    nextCatalog = await fetchLiveCatalog();
  } catch (error) {
    // Si la página ya mostró datos válidos, nunca los reemplazamos por una copia
    // antigua durante un error temporal de red.
    if (catalogFingerprint) {
      console.warn("No se pudo actualizar el catálogo desde Google Sheets.", error);
      return;
    }
    nextCatalog = fallbackCatalog.map((product) => ({ ...product }));
    source = "la última copia disponible";
    console.warn("No se pudo actualizar el catálogo desde Google Sheets.", error);
  } finally {
    catalogRefreshInFlight = false;
  }

  const nextFingerprint = JSON.stringify(nextCatalog);
  if (nextFingerprint === catalogFingerprint) return;
  catalogFingerprint = nextFingerprint;
  catalog = nextCatalog;

  catalogGroups.innerHTML = catalogCategories.map(catalogGroupMarkup).join("");
  catalogGroups.setAttribute("aria-busy", "false");
  catalogStatus.classList.add("is-ready");
  const counts = catalogCategories
    .map(({ category, title }) => {
      const total = catalog.filter((product) => product.category === category).length;
      return total ? `${total} ${title.replace(".", "").toLowerCase()}` : "";
    })
    .filter(Boolean)
    .join(" · ");
  catalogStatus.textContent = `${counts}. Datos cargados desde ${source}. Actualización automática activa.`;
  observeReveals(catalogGroups.querySelectorAll("[data-reveal]"));
}

function observeReveals(elements = document.querySelectorAll("[data-reveal]")) {
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, activeObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        activeObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -48px" },
  );
  elements.forEach((element) => observer.observe(element));
}

function openModal(dialog) {
  if (!dialog || dialog.open) return;
  dialog.showModal();
  requestAnimationFrame(() => dialog.classList.add("is-open"));
  dialog.querySelector("[data-close-modal]")?.focus();
}

function closeModal(dialog) {
  if (!dialog?.open) return;
  dialog.classList.remove("is-open");
  dialog.classList.add("is-closing");

  const finish = () => {
    dialog.classList.remove("is-closing");
    dialog.close();
  };

  if (prefersReducedMotion) {
    finish();
  } else {
    window.setTimeout(finish, 250);
  }
}

function prepareTradeIn(product = null) {
  selectedTradeInProduct = product;
  const form = document.querySelector("#trade-in-form");
  const target = document.querySelector("#trade-in-target");
  form.reset();
  form.elements.storage.value = "128 GB";

  if (product) {
    target.textContent = `Querés llevarte un ${product.name} · ${product.storage}. Contanos sobre el tuyo y cotizamos la diferencia.`;
  } else {
    target.textContent = "Contanos sobre el equipo que entregás y te cotizamos la diferencia.";
  }
}

function openTradeIn(product = null) {
  const dialog = document.querySelector("#trade-in-dialog");
  prepareTradeIn(product);

  const revealForm = () => {
    openModal(dialog);
    window.requestAnimationFrame(() => document.querySelector("#trade-in-model")?.focus());
  };
  const activeDialog = document.querySelector("dialog.modal[open]");

  if (activeDialog && activeDialog !== dialog) {
    closeModal(activeDialog);
    window.setTimeout(revealForm, prefersReducedMotion ? 0 : 260);
    return;
  }

  revealForm();
}

function setupTradeInForm() {
  const form = document.querySelector("#trade-in-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const values = new FormData(form);
    const details = values.get("details").trim() || "Sin detalles adicionales informados";
    const desiredProduct = selectedTradeInProduct
      ? `Me interesa el ${selectedTradeInProduct.name} · ${selectedTradeInProduct.storage}.`
      : "Me interesa hacer un Plan Canje.";
    const message = `Hola iPhone Style!\n${desiredProduct}\n\nPLAN CANJE — equipo a entregar\n📱 Modelo: ${values.get("model")}\n💾 Capacidad: ${values.get("storage")}\n🔋 Batería: ${values.get("battery")}%\n✨ Estado: ${values.get("condition")}\n📝 Detalles: ${details}\n\n¿Me pasarían la diferencia a abonar?`;
    window.open(whatsappUrl(message), "_blank", "noopener");
  });
}

function setupModals() {
  document.querySelectorAll("[data-open-modal]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      if (trigger.dataset.openModal === "trade-in-dialog") {
        openTradeIn();
        return;
      }
      openModal(document.querySelector(`#${trigger.dataset.openModal}`));
    });
  });

  document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) closeModal(dialog);
    });
    dialog.addEventListener("cancel", (event) => {
      event.preventDefault();
      closeModal(dialog);
    });
  });

  document.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", () => closeModal(button.closest("dialog")));
  });

  document.querySelector("#product-trade-in")?.addEventListener("click", () => {
    if (selectedTradeInProduct) openTradeIn(selectedTradeInProduct);
  });
}

function showProduct(product) {
  const dialog = document.querySelector("#product-dialog");
  selectedTradeInProduct = product;
  dialog.querySelector("#product-dialog-title").textContent = `${product.name} · ${product.storage}`;
  dialog.querySelector("#product-dialog-copy").textContent = "Con la compra de cualquier equipo te llevás un cargador de carga rápida + cable + funda + vidrio templado + una garantía de regalo. 🎁 Compra seguro y tranquilo en iPhone Style.";
  dialog.querySelector("#product-modal-visual").innerHTML = `<img class="product-image product-image-main" src="${escapeHtml(product.image)}" alt="${escapeHtml(`${product.name} ${product.color} de ${product.storage}`)}" />`;
  openModal(dialog);
}

function setupCatalogEvents() {
  catalogGroups.addEventListener("click", (event) => {
    const tradeInButton = event.target.closest("[data-trade-in-product]");
    if (tradeInButton) {
      openTradeIn(catalog[Number(tradeInButton.dataset.tradeInProduct)]);
      return;
    }

    const button = event.target.closest("[data-select-product]");
    if (!button) return;
    showProduct(catalog[Number(button.dataset.selectProduct)]);
  });
}

function setupMagneticButtons() {
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!canHover || prefersReducedMotion) return;

  document.querySelectorAll("[data-magnetic]").forEach((button) => {
    button.addEventListener("pointermove", (event) => {
      const bounds = button.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 8;
      button.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
    button.addEventListener("pointerleave", () => {
      button.style.transform = "translate3d(0, 0, 0)";
    });
  });
}

function setupNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
    links.classList.toggle("is-open", !isOpen);
  });

  links.querySelectorAll("a, button").forEach((item) => item.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menú");
    links.classList.remove("is-open");
  }));
}

function dismissLoader() {
  const loader = document.querySelector("#site-loader");
  if (!loader) return;
  window.setTimeout(() => loader.classList.add("is-leaving"), prefersReducedMotion ? 0 : 380);
}

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#current-year").textContent = new Date().getFullYear();
  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    link.href = whatsappUrl(link.dataset.whatsapp);
  });
  observeReveals();
  setupModals();
  setupTradeInForm();
  setupCatalogEvents();
  setupMagneticButtons();
  setupNavigation();
  loadCatalog();
  window.setInterval(() => {
    if (!document.hidden) loadCatalog();
  }, CATALOG_REFRESH_INTERVAL);
});

window.addEventListener("load", dismissLoader, { once: true });
