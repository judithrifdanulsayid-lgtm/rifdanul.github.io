// script.js — iVenth Official Interactive Apple-Style Engine

// 1. DATA PRODUK DENGAN DETAIL LENGKAP & SPECS
const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    category: "Bypass",
    price: "Rp 4,5 Juta",
    badge: "★ Top Seller",
    isSpecial: true,
    specs: ["Natural Titanium", "Face ID ON", "Action Button", "A17 Pro", "iCloud Bebas"],
    description: "iPhone bypass aman, super mulus like new 99%. Cocok untuk ngonten, video ProRes, gaming berat, dan pemakaian harian bergaransi toko.",
    links: [
      {
        title: "Beli di Shopee ↗",
        url: "https://s.shopee.co.id/8KoiM1adXw"
      }
    ],
    images: [
      "https://cdnpro.eraspace.com/media/catalog/product/a/p/apple_iphone_15_pro_natural_titanium_1_4.jpg",
      "https://cdnpro.eraspace.com/media/catalog/product/a/p/apple_iphone_15_pro_natural_titanium_1a_4.jpg",
      "https://cdnpro.eraspace.com/media/catalog/product/a/p/apple_iphone_15_pro_natural_titanium_2_4.jpg",
      "https://cdnpro.eraspace.com/media/catalog/product/a/p/apple_iphone_15_pro_natural_titanium_4_4.jpg"
    ]
  },
  {
    id: 2,
    name: "iPhone 14 Pro & 14 Promax",
    category: "Bypass",
    price: "Rp 4 Juta",
    badge: "Premium Pro",
    isSpecial: true,
    specs: ["Dynamic Island", "Face ID ON", "48MP Kamera", "120Hz ProMotion", "Garansi Toko"],
    description: "Dynamic Island aktif, kamera 48MP jernih parah, support WiFi & Hotspot kencang. Pilihan terfavorit content creator & live streamer.",
    links: [
      {
        title: "Toko 1",
        url: "https://s.shopee.co.id/60Pa8o0Ujg"
      },
      {
        title: "Toko 2",
        url: "https://s.shopee.co.id/4Awvfidg2z"
      },
      {
        title: "Toko 3",
        url: "https://s.shopee.co.id/1LdkaM9b7a"
      }
    ],
    images: [
      "https://www.hellostore.id/cdn/shop/products/iPhone14Pro-Purple.jpg?v=1756580156&width=1100",
      "https://www.hellostore.id/cdn/shop/products/iPhone14ProMax-16.jpg?v=1756580156&width=1100",
      "https://www.hellostore.id/cdn/shop/products/iPhone14ProMax-18.jpg?v=1756580156&width=1100",
      "https://www.hellostore.id/cdn/shop/products/Artboard2_69fe8189-e265-4c55-b2aa-309483652952.jpg?v=1756580156&width=1100",
      "https://www.hellostore.id/cdn/shop/products/iPhone14ProMax-19_395619c2-7f07-4e2e-ab24-3afa8a2d457e.jpg?v=1756580156&width=1100"
    ]
  },
  {
    id: 3,
    name: "iPhone 11",
    category: "Bypass",
    price: "Rp 2 Juta",
    badge: "Best Budget",
    specs: ["Dual Camera", "Face ID ON", "Baterai Awet", "Liquid Retina", "Bebas Reset"],
    description: "iPhone bypass paling terjangkau & terlaris. Cocok untuk daily driver, sekolah, sosmed, gaming kasual, dan dijual kembali.",
    links: [
      {
        title: "Beli di Shopee ↗",
        url: "https://s.shopee.co.id/9Kf1ouIsqe"
      }
    ],
    images: [
      "https://borneostore.co.id/wp-content/uploads/2022/08/11-yellow.webp",
      "https://borneostore.co.id/wp-content/uploads/2022/08/11-putih.jpg",
      "https://borneostore.co.id/wp-content/uploads/2022/08/11-black.jpg",
      "https://borneostore.co.id/wp-content/uploads/2022/08/11-ungu.jpg",
      "https://borneostore.co.id/wp-content/uploads/2022/08/11-merah.jpg"
    ]
  },
  {
    id: 4,
    name: "iPhone 14",
    category: "Bypass",
    price: "Rp 3 Juta",
    badge: "Trusted",
    specs: ["Super Retina XDR", "Face ID ON", "Crash Detection", "Action Mode", "Bypass Aman"],
    description: "Desain modern bodi kotak flat, kamera Cinematic Mode halus, performa kencang A15 Bionic. Kondisi mulus 98-99%.",
    links: [
      {
        title: "Beli di Shopee ↗",
        url: "https://s.shopee.co.id/70HUoYhQLg"
      }
    ],
    images: [
      "https://down-id.img.susercontent.com/file/id-11134207-822wj-mmr9kjvnizns9d.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-822wh-mp0hmn43ewp7f4.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-822wm-mmr9kjvfludg97.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-822wt-mmr9kjveqxvnd5.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-822wi-mmr9kjvq0w0485.webp"
    ]
  },
  {
    id: 5,
    name: "iPhone 13 Pro & 13 Promax",
    category: "Bypass",
    price: "Rp 3,2 Juta",
    badge: "Favorite Pro",
    specs: ["120Hz ProMotion", "Triple Camera", "Macro Photo", "Telephoto 3x", "Face ID ON"],
    description: "Layar super smooth 120Hz ProMotion, kamera telephoto dan macro tajam. Performa gaming rata kanan tanpa lag.",
    links: [
      {
        title: "Beli di Shopee ↗",
        url: "https://s.shopee.co.id/5fmi0FpwRy"
      }
    ],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9nuK_SCqlw6DKwus0ciYntpwfnnWx-fjyqlUv6FeavgEqAqWLo3GY8jo&s=10",
      "https://unboxing.id/wp-content/uploads/2022/04/ip-13-promax-green-600x600.jpg",
      "https://kevajo.com/wp-content/uploads/2021/09/iphone13pro1.webp",
      "https://propreowned.com/cdn/shop/files/Pro_iPhone_13_Pro_Max_Gold.webp?v=1739250320&width=700"
    ]
  },
  {
    id: 6,
    name: "iPhone 15",
    category: "Bypass",
    price: "Rp 4 Juta",
    badge: "Gen Terkini",
    specs: ["USB Type-C", "Dynamic Island", "48MP Main", "Color-Infused Glass", "A16 Bionic"],
    description: "Sudah colokan USB Type-C fleksibel, Dynamic Island interaktif, dan back-glass matte halus anti sidik jari.",
    links: [
      {
        title: "Beli di Shopee ↗",
        url: "https://s.shopee.co.id/AUs7kWXBGB"
      }
    ],
    images: [
      "https://down-id.img.susercontent.com/file/id-11134207-8224w-mkbvvsogbdac2c.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-822wr-mp0hmn43gb9naf.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-8224x-mkbvvsonxa0w20.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-8224x-mkbvvsoqcd8kb4.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-8224p-mkbvvsoi5dzbbb.webp"
    ]
  },
  {
    id: 7,
    name: "iPhone 13",
    category: "Bypass",
    price: "Rp 3,1 Juta",
    badge: "Best Value",
    specs: ["Diagonal Camera", "Cinematic Mode", "Face ID ON", "BH 90%+", "Garansi 1 Bulan"],
    description: "Face ID ON, sensor shift OIS stabil buat bikin video, support WiFi super cepat. Garansi fungsional 1 bulan penuh.",
    links: [
      {
        title: "Beli di Shopee ↗",
        url: "https://s.shopee.co.id/9zuicDnO0X"
      }
    ],
    images: [
      "https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone_13_midnight_1.jpg&w=1920&q=45",
      "https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone_13_midnight_3.jpg&w=1920&q=45",
      "https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone_13_midnight_8.jpg&w=1920&q=45",
      "https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone_13_midnight_6.1_3.jpg&w=1920&q=45",
      "https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone_13_midnight_10.jpg&w=1920&q=45"
    ]
  },
  {
    id: 8,
    name: "iPhone 14 Pro Max",
    category: "Inter No Simlock",
    price: "Rp 7 Jutaan",
    badge: "⭐ Inter All Op",
    isSpecial: true,
    specs: ["All Operator", "Bebas Reset", "BH 90-100%", "LCD & Battery Ori", "Bukan Simlock"],
    description: "Inter all operator Indonesia (Telkomsel/XL/Indosat/Tri/Smartfren). BH 90-100% requestable, LCD & baterai original tanpa notif.",
    links: [
      {
        title: "Beli di Shopee ↗",
        url: "https://s.shopee.co.id/1BJK6iW3MZ"
      }
    ],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNaSFlb8zZaM9KjTI93aerBJjbGGHI8eLiSw&s",
      "https://www.hellostore.id/cdn/shop/products/iPhone14Pro-Purple.jpg?v=1756580156&width=1100",
      "https://down-id.img.susercontent.com/file/id-11134207-7ra0s-mc06nbs1jpkje6.webp",
      "https://www.hellostore.id/cdn/shop/products/iPhone14ProMax-18.jpg?v=1756580156&width=1100",
      "https://maivoli.vodafone.com.vu/wp-content/uploads/2024/05/Apple-iPhone-14-Pro-Max-05.webp"
    ]
  },
  {
    id: 9,
    name: "iPhone 14 Plus",
    category: "Inter No Simlock",
    price: "Rp 5 Juta",
    badge: "Layar Besar",
    specs: ["Layar 6.7 Inch", "All Operator", "Baterai Monster", "Fisik 99%", "Garansi Toko"],
    description: "Ukuran layar besar 6.7 inci dengan daya tahan baterai terpanjang. Sangat puas untuk nonton film, gaming & operasional toko online.",
    links: [
      {
        title: "Beli di Shopee ↗",
        url: "https://s.shopee.co.id/7prMa7Dciz"
      }
    ],
    images: [
      "https://down-id.img.susercontent.com/file/id-11134207-822wj-mmr9kjvnizns9d.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-822wh-mp0hmn43ewp7f4.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-822wm-mmr9kjvfludg97.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-822wt-mmr9kjveqxvnd5.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-822wi-mmr9kjvq0w0485.webp"
    ]
  },
  {
    id: 10,
    name: "iPhone 13 Pro Max",
    category: "Inter No Simlock",
    price: "Rp 6 Jutaan",
    badge: "Recommended",
    specs: ["120Hz ProMotion", "All Operator", "BH 90-100%", "Baterai Badak", "Garansi Toko"],
    description: "Salah satu seri iPhone paling awet baterai sepanjang masa. ProMotion 120Hz mulus, all operator aktif, unit mulus tanpa minus fungsional.",
    links: [
      {
        title: "Beli di Shopee ↗",
        url: "https://s.shopee.co.id/2g87t98VM7"
      }
    ],
    images: [
      "https://cellexportgt.com/cdn/shop/products/GKzs8E4g.jpg?v=1744227682&width=1080",
      "https://mac-center.com/cdn/shop/articles/iphone-13-pro-iphone-13-pro-max-pantalla.png?v=1774982363",
      "https://appstudio.su/wp-content/uploads/2023/02/db36c3f82fd19630bdb51ea93b13cd72.jpg",
      "https://down-id.img.susercontent.com/file/id-11134207-7ra0n-mc06nbs1coqb8d.webp",
      "https://appstudio.su/wp-content/uploads/2023/02/f28d901753d0efc44bd3f8c63955f037-700x700.jpg",
      "https://appleworld.co.za/cdn/shop/files/iphone_13_pro_silver_pure_back_iphone_13_pro_silver_pure_front_2-up_screen__usen_2_4_1_1_1_1_1.jpg?v=1768545594&width=3840"
    ]
  },
  {
    id: 11,
    name: "iPhone 16 Plus",
    category: "Inter No Simlock",
    price: "Rp 8 Jutaan",
    badge: "Terbaru 2026",
    isSpecial: true,
    specs: ["Camera Control", "Apple Intelligence", "A18 Chip", "All Operator", "Baterai Maksimal"],
    description: "Generasi terbaru dengan tombol fisik Camera Control dan chip A18 super efisien. All operator lancar, bodi ultra fresh like new.",
    links: [
      {
        title: "Beli di Shopee ↗",
        url: "https://s.shopee.co.id/50W2fVU2dc"
      }
    ],
    images: [
      "https://www.digimap.co.id/cdn/shop/files/0788-APPMXVX3ID-A-1.jpg?v=1734067695&width=823",
      "https://www.digimap.co.id/cdn/shop/files/0788-APPMXVX3ID-A-3.jpg?v=1734067695&width=1680",
      "https://www.digimap.co.id/cdn/shop/files/0788-APPMXVX3ID-A-4.jpg?v=1734067695&width=1680",
      "https://www.digimap.co.id/cdn/shop/files/0788-APPMXVX3ID-A-5.jpg?v=1734067695&width=1680",
      "https://www.digimap.co.id/cdn/shop/files/0788-APPMXVX3ID-A-6.jpg?v=1734067695&width=1680"
    ]
  }
];

// STATE MANAGEMENT
let activeCategory = 'all';
let searchQuery = '';
let isOneColumnView = false;
const slideIndexes = {};
const touchData = {};

// 2. RENDERING ENGINE
const container = document.getElementById('productContainer');
const noResults = document.getElementById('noResults');

function updateCategoryCounts() {
  const countAll = products.length;
  const countBypass = products.filter(p => p.category === 'Bypass').length;
  const countInter = products.filter(p => p.category === 'Inter No Simlock').length;
  const countResmi = products.filter(p => p.category === 'Resmi').length;

  if (document.getElementById('count-all')) document.getElementById('count-all').innerText = countAll;
  if (document.getElementById('count-bypass')) document.getElementById('count-bypass').innerText = countBypass;
  if (document.getElementById('count-inter')) document.getElementById('count-inter').innerText = countInter;
  if (document.getElementById('count-resmi')) document.getElementById('count-resmi').innerText = countResmi;
}

function renderProducts(items) {
  if (!container) return;
  container.innerHTML = '';

  if (items.length === 0) {
    if (noResults) noResults.style.display = 'block';
    return;
  } else {
    if (noResults) noResults.style.display = 'none';
  }

  items.forEach((product) => {
    const idx = product.id;
    if (slideIndexes[idx] === undefined) slideIndexes[idx] = 0;

    // Specs HTML
    const specsHTML = (product.specs || [])
      .map(sp => `<span class="spec-chip">${sp}</span>`)
      .join('');

    // Images HTML
    const imagesHTML = product.images
      .map(img => `<img src="${img}" alt="${product.name}" loading="lazy" onclick="openImage('${img}')" />`)
      .join('');

    // Pagination Dots HTML
    const dotsHTML = product.images
      .map((_, i) => `<span class="dot-indicator ${i === 0 ? 'active' : ''}" id="dot-${idx}-${i}"></span>`)
      .join('');

    // Buttons HTML
    let actionButtonsHTML = '';
    if (product.links.length === 1) {
      actionButtonsHTML = `
        <a href="${product.links[0].url}" target="_blank" rel="noopener noreferrer" class="btn-shopee">
          <span>${product.links[0].title}</span>
        </a>
      `;
    } else if (product.links.length > 1) {
      const storeBtns = product.links
        .map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="btn-store-mini">${l.title} ↗</a>`)
        .join('');
      actionButtonsHTML = `
        <div class="multi-store-group">
          ${storeBtns}
        </div>
      `;
    }

    // Direct WhatsApp Consult Link
    const waText = encodeURIComponent(`Halo Admin iVenth Official,%0A%0ASaya tertarik dengan *${product.name}* (${product.price}) kategori ${product.category}.%0AApakah unitnya masih ready? Boleh minta info detailnya?`);
    const waUrl = `https://wa.me/6281217373971?text=${waText}`;

    const card = document.createElement('div');
    card.className = `product-card ${product.isSpecial ? 'is-featured' : ''}`;
    card.dataset.category = product.category;
    card.id = `product-card-${idx}`;

    card.innerHTML = `
      <div class="card-badge ${product.isSpecial ? 'badge-special' : ''}">
        ${product.badge}
      </div>

      <div class="card-slider-box" id="slider-box-${idx}" 
           ontouchstart="handleTouchStart(event, ${idx})" 
           ontouchmove="handleTouchMove(event, ${idx})" 
           ontouchend="handleTouchEnd(event, ${idx})">
        <div class="card-slides" id="slide-${idx}">
          ${imagesHTML}
        </div>

        <button class="slider-arrow arrow-prev" onclick="prevSlide(${idx}, event)" aria-label="Foto Sebelumnya">‹</button>
        <button class="slider-arrow arrow-next" onclick="nextSlide(${idx}, event)" aria-label="Foto Selanjutnya">›</button>

        <div class="slider-dots" id="dots-container-${idx}">
          ${dotsHTML}
        </div>
      </div>

      <div class="card-details">
        <div class="card-title-group">
          <h3 class="card-title">${product.name}</h3>
          <div class="card-category-tag">
            <span>●</span> ${product.category}
          </div>
        </div>

        <div class="card-specs-row">
          ${specsHTML}
        </div>

        <div class="card-price-box">
          <div class="price-sub">Mulai dari</div>
          <div class="price-main">${product.price}</div>
        </div>

        <div class="card-desc">
          ${product.description}
        </div>

        <div class="card-actions">
          ${actionButtonsHTML}
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-wa-card">
            <span>💬 Tanya Admin WA</span>
          </a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// 3. TOUCH SWIPE & SLIDER ENGINE
function nextSlide(id, event) {
  if (event) event.stopPropagation();
  const slides = document.querySelectorAll(`#slide-${id} img`);
  if (!slides || slides.length <= 1) return;

  if (slideIndexes[id] === undefined) slideIndexes[id] = 0;
  slideIndexes[id] = (slideIndexes[id] + 1) % slides.length;
  updateSlide(id, slides.length);
}

function prevSlide(id, event) {
  if (event) event.stopPropagation();
  const slides = document.querySelectorAll(`#slide-${id} img`);
  if (!slides || slides.length <= 1) return;

  if (slideIndexes[id] === undefined) slideIndexes[id] = 0;
  slideIndexes[id] = (slideIndexes[id] - 1 + slides.length) % slides.length;
  updateSlide(id, slides.length);
}

function updateSlide(id, totalSlides) {
  const slideContainer = document.getElementById(`slide-${id}`);
  if (!slideContainer) return;

  const current = slideIndexes[id] || 0;
  slideContainer.style.transform = `translateX(-${current * 100}%)`;

  // Update dots
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.getElementById(`dot-${id}-${i}`);
    if (dot) {
      if (i === current) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    }
  }
}

// Touch Event Handlers for Mobile Finger Swiping
function handleTouchStart(e, id) {
  const touch = e.touches[0];
  touchData[id] = {
    startX: touch.clientX,
    startY: touch.clientY,
    dx: 0
  };
}

function handleTouchMove(e, id) {
  if (!touchData[id]) return;
  const touch = e.touches[0];
  touchData[id].dx = touch.clientX - touchData[id].startX;
}

function handleTouchEnd(e, id) {
  if (!touchData[id]) return;
  const diffX = touchData[id].dx;
  const threshold = 40; // minimum 40px swipe

  if (diffX < -threshold) {
    nextSlide(id);
  } else if (diffX > threshold) {
    prevSlide(id);
  }
  touchData[id] = null;
}

// 4. FILTERING & SEARCH
function filterCategory(category, btn) {
  activeCategory = category;

  document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  applyFilters();
}

function handleSearch(val) {
  searchQuery = val.trim().toLowerCase();
  applyFilters();
}

function resetFilters() {
  activeCategory = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';

  const defaultBtn = document.querySelector('.cat-pill');
  if (defaultBtn) {
    document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
    defaultBtn.classList.add('active');
  }

  applyFilters();
}

function applyFilters() {
  const filtered = products.filter(p => {
    const matchCat = (activeCategory === 'all' || p.category.toLowerCase() === activeCategory.toLowerCase());
    const matchSearch = (!searchQuery || 
      p.name.toLowerCase().includes(searchQuery) || 
      p.description.toLowerCase().includes(searchQuery) ||
      p.category.toLowerCase().includes(searchQuery) ||
      (p.specs && p.specs.some(s => s.toLowerCase().includes(searchQuery)))
    );
    return matchCat && matchSearch;
  });

  renderProducts(filtered);
}

// 5. VIEW TOGGLE (2-COL VS 1-COL ON MOBILE)
function toggleGridView() {
  if (!container) return;
  isOneColumnView = !isOneColumnView;

  const btnLabel = document.getElementById('viewToggleLabel');
  const btnIcon = document.getElementById('viewToggleIcon');

  if (isOneColumnView) {
    container.classList.remove('grid-2-col');
    container.classList.add('grid-1-col');
    if (btnLabel) btnLabel.innerText = "1 Kolom";
    if (btnIcon) btnIcon.innerText = "☰";
  } else {
    container.classList.remove('grid-1-col');
    container.classList.add('grid-2-col');
    if (btnLabel) btnLabel.innerText = "2 Kolom";
    if (btnIcon) btnIcon.innerText = "⊞";
  }
}

// 6. MODALS & POPUPS
function openPopup() {
  const modal = document.getElementById('popupModal');
  if (modal) modal.style.display = 'flex';
}

function closePopup() {
  const modal = document.getElementById('popupModal');
  if (modal) modal.style.display = 'none';
  sessionStorage.setItem('iventh_browser_guide_closed', 'true');
}

function closeSmartBanner() {
  const banner = document.getElementById('smartBanner');
  if (banner) banner.style.display = 'none';
  sessionStorage.setItem('iventh_smart_banner_closed', 'true');
}

function openImage(src) {
  const modal = document.getElementById('imageModal');
  const img = document.getElementById('modalImage');
  if (modal && img) {
    img.src = src;
    modal.style.display = 'flex';
  }
}

function closeImage() {
  const modal = document.getElementById('imageModal');
  if (modal) modal.style.display = 'none';
}

// 7. IN-APP BROWSER DETECTION
function checkInAppBrowser() {
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  const isInApp = (/FBAN|FBAV|Instagram|TikTok|Line|MicroMessenger|musical_ly/i).test(ua);

  const smartBannerClosed = sessionStorage.getItem('iventh_smart_banner_closed');
  if (isInApp && !smartBannerClosed) {
    const banner = document.getElementById('smartBanner');
    if (banner) banner.style.display = 'block';
  }
}

// 8. MOBILE BOTTOM NAV & SCROLL HELPER
function setActiveNav(element) {
  document.querySelectorAll('.bottom-nav-item').forEach(el => el.classList.remove('active'));
  if (element) element.classList.add('active');
}

function scrollToGuide(e) {
  if (e) e.preventDefault();
  const guideSec = document.querySelector('.guide-section');
  if (guideSec) {
    guideSec.scrollIntoView({ behavior: 'smooth' });
  }
}

// 9. ESCAPE KEY LISTENER FOR MODALS
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeImage();
    closePopup();
  }
});

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  updateCategoryCounts();
  renderProducts(products);
  checkInAppBrowser();

  // Alert otomatis saat buka web: Harap buka di browser HP dulu
  openPopup();
});
