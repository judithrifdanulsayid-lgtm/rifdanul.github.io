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
  },
  {
    id: 12,
    name: "iPhone 13 Basic",
    category: "Inter No Simlock",
    price: "Rp 4 Jutaan",
    badge: "⭐ Inter Best Value",
    isSpecial: true,
    specs: ["All Operator", "Bebas Reset", "BH 90-100%", "Sensor Shift OIS", "Garansi Toko"],
    description: "iPhone 13 Inter all operator Indonesia siap pakai Telkomsel/XL/Indosat/Tri/Smartfren. Baterai awet seharian, kamera tajam cinematic mode, fisik mulus like new 98-99%.",
    links: [
      {
        title: "Beli di Shopee ↗",
        url: "https://s.shopee.co.id/gRC4XLant"
      }
    ],
    images: [
      "https://down-id.img.susercontent.com/file/id-11134207-7ra0s-mcu7sz1ra4bnf5.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-822wl-mq08fao0mvbf3d.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-822wr-mq07k2h0fh1rad.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-822wi-mq07k2h0b9cf46.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-822wl-mq07k2h0cnwvb9.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-822wq-mq07k2h08g7j26.webp"
    ]
  },
  {
    id: 13,
    name: "iPhone 14 Basic",
    category: "Inter No Simlock",
    price: "Rp 5 Jutaan",
    badge: "⭐ Favorite Inter",
    isSpecial: true,
    specs: ["All Operator", "Photonic Engine", "Action Mode", "Bebas Update", "Garansi Toko"],
    description: "iPhone 14 Inter all operator sinyal on stabil permanen. Performa chip A15 Bionic kencang, kamera selfie autofocus jernih, kondisi fisik super mulus like new 99%.",
    links: [
      {
        title: "Beli di Shopee ↗",
        url: "https://s.shopee.co.id/80DmoB3FOe"
      }
    ],
    images: [
      "https://down-id.img.susercontent.com/file/id-11134207-7ra0i-mcu7sz1rec0z6f.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-822wi-mq1uoanliwwebe.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-822wg-mpz5953g3g1td3.webp"
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

  // Update Category Hub button counts
  if (document.getElementById('count-hub-bypass')) document.getElementById('count-hub-bypass').innerText = `${countBypass} Unit Ready`;
  if (document.getElementById('count-hub-inter')) document.getElementById('count-hub-inter').innerText = `${countInter} Unit Ready`;
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
        <a href="${product.links[0].url}" target="_blank" rel="noopener noreferrer" class="btn-action btn-shopee" title="Checkout Aman via Shopee (Bisa COD & Rekber)">
          <div class="btn-action-main">
            <svg class="btn-icon-svg icon-shopee" viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
              <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z"/>
            </svg>
            <span class="btn-text-bold">Beli di Shopee</span>
          </div>
          <span class="btn-sub-pill">COD Aman ↗</span>
        </a>
      `;
    } else if (product.links.length > 1) {
      const storeBtns = product.links
        .map((l, sIdx) => `
          <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="btn-store-mini" title="Kunjungi ${l.title} (Shopee Star+)">
            <span class="store-badge">Star+</span>
            <span class="store-name">${l.title}</span>
            <span class="store-arrow">↗</span>
          </a>
        `)
        .join('');
      actionButtonsHTML = `
        <div class="multi-store-wrapper">
          <div class="multi-store-header">
            <span class="store-header-icon">🏪</span>
            <span>Pilihan Toko Shopee Star+:</span>
          </div>
          <div class="multi-store-group">
            ${storeBtns}
          </div>
        </div>
      `;
    }

    // Direct WhatsApp Consult Link with Clean Professional Text (No raw %0A% artifacts)
    const categoryDetail = product.category === 'Bypass'
      ? 'Bypass (Khusus WiFi - Bebas iCloud)'
      : (product.category === 'Inter No Simlock' ? 'Inter (All Operator 4G/5G)' : product.category);

    const waLines = [
      `Halo Admin iVenth Official 👋`,
      ``,
      `Saya tertarik dan ingin tanya unit ini:`,
      `📱 *${product.name}*`,
      `💰 *Harga:* ${product.price}`,
      `🏷️ *Kategori:* ${categoryDetail}`,
      ``,
      `Apakah stok unit ini masih ready?`,
      `Boleh minta foto fisik unit aslinya dan info Battery Health (BH)?`,
      ``,
      `Terima kasih banyak! 🙏`
    ];
    const waUrl = `https://wa.me/6281217373971?text=${encodeURIComponent(waLines.join('\n'))}`;

    // Clean user-friendly category label
    const categoryTagText = product.category === 'Bypass' 
      ? 'Bypass (WiFi Only)' 
      : (product.category === 'Inter No Simlock' ? 'Inter (All Operator)' : product.category);

    const isBypass = product.category === 'Bypass';

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

        <div class="slider-zoom-tag" onclick="event.stopPropagation()">
          <span>🔍 Tap untuk zoom</span>
        </div>
      </div>

      <div class="card-details">
        <div class="card-title-group">
          <h3 class="card-title">${product.name}</h3>
          <div class="card-category-pill ${isBypass ? 'pill-bypass' : 'pill-inter'}">
            <span class="cat-pill-icon">${isBypass ? '📶' : '🌐'}</span>
            <span>${categoryTagText}</span>
          </div>
        </div>

        <div class="card-specs-row">
          ${specsHTML}
        </div>

        <div class="card-price-box">
          <div class="price-header-row">
            <span class="price-sub">Harga Mulai</span>
            <span class="price-verified-pill">✓ Siap Pakai</span>
          </div>
          <div class="price-main-row">
            <div class="price-main">${product.price}</div>
            <span class="price-grade">Like New 99%</span>
          </div>
        </div>

        <div class="card-desc">
          ${product.description}
        </div>

        <div class="card-actions">
          ${actionButtonsHTML}
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-wa" title="Tanya ketersediaan stok & foto unit ke Admin WhatsApp">
            <div class="btn-action-main">
              <svg class="btn-icon-svg icon-wa" viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z"/>
              </svg>
              <span class="btn-text-bold">Tanya Stok & Foto Real</span>
            </div>
            <span class="btn-wa-live">
              <span class="wa-dot"></span>
              <span class="wa-live-text">Fast WA</span>
            </span>
          </a>
        </div>

        <div class="card-trust-row">
          <span class="trust-shield-mini">🛡️</span>
          <span>Garansi Toko • Bebas iCloud • Rekber Shopee</span>
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

// Quick Category Hub Action (Big Button Click Handler)
function selectCategoryAndScroll(category) {
  activeCategory = category;

  // Sync toolbar pills
  document.querySelectorAll('.cat-pill').forEach(b => {
    b.classList.remove('active');
    const onclickAttr = b.getAttribute('onclick') || '';
    if (category === 'all' && onclickAttr.includes("'all'")) {
      b.classList.add('active');
    } else if (category !== 'all' && onclickAttr.includes(`'${category}'`)) {
      b.classList.add('active');
    }
  });

  applyFilters();

  // Smooth scroll directly to catalog products
  const catalogEl = document.getElementById('katalog');
  if (catalogEl) {
    const navHeight = 75;
    const targetY = catalogEl.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  }
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
