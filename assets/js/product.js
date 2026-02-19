/* ===== HEADER EFFECT ===== */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click",()=>{
hamburger.classList.toggle("active");
mobileMenu.classList.toggle("active");
overlay.classList.toggle("active");
});

overlay.addEventListener("click",()=>{
hamburger.classList.remove("active");
mobileMenu.classList.remove("active");
overlay.classList.remove("active");
});

window.addEventListener("scroll",()=>{
const header=document.querySelector(".header");
if(window.scrollY>50){
header.classList.add("shrink");
}else{
header.classList.remove("shrink");
}
});

/* ===== PRODUCT DATA (PASTE DATA KAMU DI SINI — TETAP SAMA) ===== */
const products = {/* ================= IPHONE 15 ================= */


/* ================= RESMI ================= */

/* ================= 1 ================= */
iphone11r:{
category:"resmi",
title:"iPhone 11",
description:`- Unit Resmi ex ibox/beacukai
- Garansi toko 1 tahun 
- Tidak ada riwayat servis
- 3utoools hijau 
- BH di atas 90
- Free Tws/Adaptor Charger , TG , Case , Asuransi pengiriman 
`,
images:[
"https://api.bstore.co.id/storage/products/1721466331_iphone-11-256gb-second-ex-resmi_1.png",
"https://appstudio.su/wp-content/uploads/2023/02/6f6a4b2850a1b310efc58f05aed1dfc8.jpg",
"https://appstudio.su/wp-content/uploads/2023/02/4051891d46b90056d17c20b5774b4ed3.jpg",
"https://down-id.img.susercontent.com/file/id-11134207-7ra0t-mbql0wa8zxavb3.webp",
"https://appstudio.su/wp-content/uploads/2023/02/b87656f63752025f53a0310955f7bad1-700x738.jpg",
"assets/css/free.png"
],
variants:{
"64GB iBox":4500000,
"128GB iBox":5150000,
"64GB BeaCukai":3900000
},
link:"https://s.shopee.co.id/AABp2qlyVC"
},

/* ================= 2 ================= */
iphone13r:{
category:"resmi",
title:"iPhone 13 ex iBox BeaCukai",
description:`- Unit Resmi ex ibox/beacukai
- Garansi toko 1 tahun 
- Tidak ada riwayat servis
- 3utoools hijau 
- BH di atas 90
- Free Tws/Adaptor Charger , TG , Case , Asuransi pengiriman 
`,
images:[
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone_13_midnight_1.jpg&w=1920&q=45",
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone_13_midnight_3.jpg&w=1920&q=45",
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone_13_midnight_8.jpg&w=1920&q=45",
"https://down-id.img.susercontent.com/file/id-11134207-7ra0g-mbql0wa9i6one2.webp",
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone_13_midnight_6.1_3.jpg&w=1920&q=45",
"assets/css/free.png"
],
variants:{
"128GB BeaCukai":6500000,
"128GB iBox":7000000,
"256GB iBox":7900000
},
link:"https://s.shopee.co.id/6VIWgE436B"
},

/* ================= 3 ================= */
iphone13promaxr:{
category:"resmi",
title:"iPhone 13 Pro Max ex iBox BeaCukai",
description:`- Unit Resmi ex ibox/beacukai
- Garansi toko 1 tahun 
- Tidak ada riwayat servis
- 3utoools hijau 
- BH di atas 90
- Free Tws/Adaptor Charger , TG , Case , Asuransi pengiriman 
`,
images:[
"https://appstudio.su/wp-content/uploads/2023/02/29ae6c4ae67fb1c7ab88001da9ae90d7.jpg",
"https://appstudio.su/wp-content/uploads/2023/02/82e246951de95e4147221c0ffb9bbd28.jpg",
"https://appstudio.su/wp-content/uploads/2023/02/db36c3f82fd19630bdb51ea93b13cd72.jpg",
"https://down-id.img.susercontent.com/file/id-11134207-7ra0n-mc06nbs1coqb8d.webp",
"https://appstudio.su/wp-content/uploads/2023/02/f28d901753d0efc44bd3f8c63955f037-700x700.jpg",
"https://appstudio.su/wp-content/uploads/2023/02/f28d901753d0efc44bd3f8c63955f037-700x700.jpg",
"assets/css/free.png"

],
variants:{
"128GB iBox":9700000,
"256GB iBox":10550000,
"512GB iBox":11950000,
"1TB iBox":13500000,
"128GB BeaCukai":8700000,
"256GB BeaCukai":9900000
},
link:"https://s.shopee.co.id/9pYyeMWbfm"
},
/* ================= 4 ================= */
iphone14promaxr:{
category:"resmi",
title:"iPhone 14 Pro Max ex iBox BeaCukai",
description:`- Unit Resmi ex ibox/beacukai
- Garansi toko 1 tahun 
- Tidak ada riwayat servis
- 3utoools hijau 
- BH di atas 90
- Free Tws/Adaptor Charger , TG , Case , Asuransi pengiriman 
`,
images:[
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone_14_pro_max_gold_1.jpg&w=1920&q=45",
"https://www.hellostore.id/cdn/shop/products/iPhone14Pro-Purple.jpg?v=1756580156&width=1100",
"https://down-id.img.susercontent.com/file/id-11134207-7ra0s-mc06nbs1jpkje6.webp",
"https://www.hellostore.id/cdn/shop/products/iPhone14ProMax-18.jpg?v=1756580156&width=1100",
"assets/css/free.png"
],
variants:{
"128GB iBox":12200000,
"256GB iBox":13200000,
"512GB iBox":14900000,
"128GB BeaCukai":11600000,
"256GB BeaCukai":12700000,
"512GB BeaCukai":14200000,
"1TB BeaCukai":14700000
},
link:"https://s.shopee.co.id/7VB3s5IoPb"
},

/* ================= 5 ================= */
iphone12r:{
category:"resmi",
title:"iPhone 12 ex iBox BeaCukai",
description:`- Unit Resmi ex ibox/beacukai
- Garansi toko 1 tahun 
- Tidak ada riwayat servis
- 3utoools hijau 
- BH di atas 90
- Free Tws/Adaptor Charger , TG , Case , Asuransi pengiriman 
`,
images:[
"https://www.digimap.co.id/cdn/shop/files/0788-APPMGJ93ID-A-1.jpg?v=1721637128&width=823",
"https://www.digimap.co.id/cdn/shop/files/0788-APPMGJ93ID-A-4.jpg?v=1721637128&width=823",
 "https://www.digimap.co.id/cdn/shop/files/0788-APPMGJ93ID-A-5.jpg?v=1721637128&width=823",
 "https://www.digimap.co.id/cdn/shop/files/0788-APPMGJ93ID-A-7.jpg?v=1721637128&width=823",
"assets/css/free.png"

],
variants:{
"64GB iBox":5300000,
"128GB iBox":5700000,
"256GB iBox":6600000,
"64GB BeaCukai":5200000,
"256GB BeaCukai":6100000
},
link:"https://s.shopee.co.id/3LLUuQyw1i"
},

/* ================= 6 ================= */
iphone15promaxr:{
category:"resmi",
title:"iPhone 15 Pro Max iBox",
description:`- Unit Resmi ex ibox/beacukai
- Garansi toko 1 tahun 
- Tidak ada riwayat servis
- 3utoools hijau 
- BH di atas 90
- Free Tws/Adaptor Charger , TG , Case , Asuransi pengiriman 
`,
images:[
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_pro_max_natural_titanium_1_1_2.jpg&w=1920&q=45",
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_pro_max_natural_titanium_1a_3.jpg&w=1920&q=45",
 "https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_pro_max_natural_titanium_2_1_2.jpg&w=1920&q=45",
 "https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_pro_max_natural_titanium_5_1_2.jpg&w=1920&q=45",
"https://down-id.img.susercontent.com/file/id-11134207-7ra0g-mc06nbs1qqer6e.webp",
 "assets/css/free.png"

],
variants:{
"256GB iBox":15200000,
"256GB BeaCukai":14900000
},
link:"https://s.shopee.co.id/6fbwsaYJ5M"
},

/* ================= 7 ================= */
iphone15r:{
category:"resmi",
title:"iPhone 15 iBox BeaCukai",
description:`Unit resmi iBox
Garansi aktif`,
images:[
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_blue_1.jpg&w=1920&q=100",
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_blue_1.jpg&w=1920&q=100",
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_blue_2_1.jpg&w=1920&q=100",
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_blue_4_1.jpg&w=1920&q=100",
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_blue_5_1.jpg&w=1920&q=100",
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_blue_9_2.jpg&w=1920&q=100",
],
variants:{
"128GB iBox":9300000,
"256GB iBox":10500000
},
link:"https://s.shopee.co.id/8zzrespkmg"
},

/* ================= 8 ================= */
iphone14pror:{
category:"resmi",
title:"iPhone 14 Pro iBox BeaCukai",
description:`- Unit Resmi ex ibox/beacukai
- Garansi toko 1 tahun 
- Tidak ada riwayat servis
- 3utoools hijau 
- BH di atas 90
- Free Tws/Adaptor Charger , TG , Case , Asuransi pengiriman 
`,
images:[
"https://www.hellostore.id/cdn/shop/products/iPhone14Pro-Purple.jpg?v=1756580156&width=1100",
 "https://www.hellostore.id/cdn/shop/products/iPhone14ProMax-16.jpg?v=1756580156&width=1100",
 "https://www.hellostore.id/cdn/shop/products/iPhone14ProMax-18.jpg?v=1756580156&width=1100", 
 "https://www.hellostore.id/cdn/shop/products/Artboard2_69fe8189-e265-4c55-b2aa-309483652952.jpg?v=1756580156&width=1100",
 "https://www.hellostore.id/cdn/shop/products/iPhone14ProMax-19_395619c2-7f07-4e2e-ab24-3afa8a2d457e.jpg?v=1756580156&width=1100",
 "assets/css/free.png"

],
variants:{
"128GB iBox":11500000,
"256GB iBox":12500000,
"128GB BeaCukai":11200000,
"256GB BeaCukai":12000000
},
link:"https://s.shopee.co.id/60MG5NNW6r"
},

/* ================= 9 ================= */
iphone13pror:{
category:"resmi",
title:"iPhone 13 Pro iBox BeaCukai",
description:`- Unit Resmi ex ibox/beacukai
- Garansi toko 1 tahun 
- Tidak ada riwayat servis
- 3utoools hijau 
- BH di atas 90
- Free Tws/Adaptor Charger , TG , Case , Asuransi pengiriman 
`,
images:[
"https://appstudio.su/wp-content/uploads/2023/02/29ae6c4ae67fb1c7ab88001da9ae90d7.jpg",
"https://appstudio.su/wp-content/uploads/2023/02/82e246951de95e4147221c0ffb9bbd28.jpg",
"https://appstudio.su/wp-content/uploads/2023/02/db36c3f82fd19630bdb51ea93b13cd72.jpg",
"https://appstudio.su/wp-content/uploads/2023/02/f28d901753d0efc44bd3f8c63955f037-700x700.jpg",
"assets/css/free.png"

],
variants:{
"128GB iBox":9000000,
"256GB iBox":9800000,
"512GB iBox":10500000,
"256GB BeaCukai":9300000
},
link:"https://s.shopee.co.id/3qHlVOrpfe"
},

/* ================= 10 ================= */
iphone15pror:{
category:"resmi",
title:"iPhone 15 Pro iBox BeaCukai",
description:`- Unit Resmi ex ibox/beacukai
- Garansi toko 1 tahun 
- Tidak ada riwayat servis
- 3utoools hijau 
- BH di atas 90
- Free Tws/Adaptor Charger , TG , Case , Asuransi pengiriman 
`,
images:[
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_pro_blue_titanium_1_6_1.jpg&w=1920&q=45",
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_pro_blue_titanium_5_8_1.jpg&w=1920&q=45",
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_pro_blue_titanium_2_7_1.jpg&w=1920&q=45",
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_pro_blue_titanium_9_7_1.jpg&w=1920&q=45",
"assets/css/free.png"

],
variants:{
"128GB iBox":14000000,
"256GB iBox":14900000,
"128GB BeaCukai":13700000,
"256GB BeaCukai":14400000
},
link:"https://s.shopee.co.id/2qPEJZLy8G"
},

/* ================= 11 ================= */
iphone12promaxr:{
category:"resmi",
title:"iPhone 12 Pro Max iBox BeaCukai",
description:`- Unit Resmi ex ibox/beacukai
- Garansi toko 1 tahun 
- Tidak ada riwayat servis
- 3utoools hijau 
- BH di atas 90
- Free Tws/Adaptor Charger , TG , Case , Asuransi pengiriman 
`,
images:[
"https://cdn.jagofon.com/otf/BQLVfZh_weNc-vKEyMINFaVeK8BMQrujvO8EcEazwoc/t:10/w:600/f:avif/q:60/aHR0cHM6Ly9jZG4uamFnb2Zvbi5jb20vbW9kZWwvczE0ZzB0ZVFhekFyZG1peHNTT21VSUU1NTk2SGlSV3huaGpPWmhqZS5wbmc",
"https://cdn.jagofon.com/otf/BQLVfZh_weNc-vKEyMINFaVeK8BMQrujvO8EcEazwoc/t:10/w:600/f:avif/q:60/aHR0cHM6Ly9jZG4uamFnb2Zvbi5jb20vbW9kZWwvczE0ZzB0ZVFhekFyZG1peHNTT21VSUU1NTk2SGlSV3huaGpPWmhqZS5wbmc",
"https://cdn.jagofon.com/otf/pKYQ_vsji-cr2L43CxQE1_35gLQC1-pYJAZV-xoxSaI/t:10/w:600/f:avif/q:60/aHR0cHM6Ly9jZG4uamFnb2Zvbi5jb20vbW9kZWwvelpJd2lSdWZmck42WkVUZGdZYzNJZXljaGZWSFIxNU9oN0JGN2dHYS5wbmc",
"assets/css/free.png" 

],
variants:{
"128GB iBox":8200000,
"256GB iBox":8800000,
"512GB iBox":10000000,
"256GB BeaCukai":8300000,
"512GB BeaCukai":9000000
},
link:"https://s.shopee.co.id/60MG5OYjNY"
},

/* ================= 12 ================= */
iphone11promaxr:{
category:"resmi",
title:"iPhone 11 Pro Max iBox BeaCukai",
description:`- Unit Resmi ex ibox/beacukai
- Garansi toko 1 tahun 
- Tidak ada riwayat servis
- 3utoools hijau 
- BH di atas 90
- Free Tws/Adaptor Charger , TG , Case , Asuransi pengiriman 
`,
images:[
"https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-11-pro-max/iphone-11-pro-max-gold.jpg",
 "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-11-pro-max/iphone-11-pro-max-gold-front.jpg",
 "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-11-pro-max/iphone-11-pro-max-gold-back.jpg",
 "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-11-pro-max/iphone-11-pro-max-midnight-green.jpg",
 "assets/css/free.png"

],
variants:{
"64GB iBox":6000000,
"256GB iBox":6700000,
"512GB iBox":7600000,
"64GB BeaCukai":6000000,
"256GB BeaCukai":6700000
},
link:"https://s.shopee.co.id/6Kz6U2YItV"
},

/* ================= 13 ================= */
iphone14r:{
category:"resmi",
title:"iPhone 14 iBox",
description:`Unit resmi iBox
Garansi aktif`,
images:[
"https://appstudio.su/wp-content/uploads/2023/02/ea5a4a01ce845b3639f86cfde840ec40.jpg",
"https://appstudio.su/wp-content/uploads/2023/02/7d071c8616b872627b5ab149b90bfe0a.jpg", 
"https://appstudio.su/wp-content/uploads/2023/02/4a626156dc3063ac4271ac568bac76bf.jpg", 
"https://appstudio.su/wp-content/uploads/2023/02/2aa2e242823a636c703cb7df3c02d47c-700x733.jpg", 
"https://appstudio.su/wp-content/uploads/2023/02/2887dfaae78fc398796c21c3a9e3f7c2.jpg",
"assets/css/free.png" 

],
variants:{
"128GB iBox":7800000,
"512GB iBox":9700000
},
link:"https://s.shopee.co.id/807KT6wTwa"
},

/* ================= 14 ================= */
iphonexrr:{
category:"resmi",
title:"iPhone XR iBox BeaCukai",
description:`Unit resmi iBox
Garansi aktif`,
images:[
"https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-xr/iphone-xr-white.jpg",
"https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-xr/iphone-xr-white-back.jpg",
"https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-xr/iphone-xr-white-front.jpg",
"https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-xr/iphone-xr-black.jpg",
"assets/css/free.png"

],
variants:{
"64GB iBox":3500000,
"128GB iBox":4000000
},
link:"https://s.shopee.co.id/4qAIhLP89P"
},

/* ================= 15 ================= */
iphone15plusr:{
category:"resmi",
title:"iPhone 15 Plus iBox BeaCukai",
description:`Unit resmi iBox
Garansi aktif`,
images:[
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_plus_green_1_1.jpg&w=1920&q=45",
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_plus_green_1_1.jpg&w=1920&q=45",
 "https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_plus_green_1a.jpg&w=1920&q=45",
 "https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_plus_green_4_1.jpg&w=1920&q=45",
 "https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_plus_green_5_1.jpg&w=1920&q=45",

],
variants:{
"128GB iBox":11000000
},
link:"https://s.shopee.co.id/9Uw8Fw0yot"
},

/* ================= INTER FU ================= */

iphone14pro:{
category:"interfu",
title:"iPhone 14 Pro",
description:`Inter FU
Support 120Hz`,
images:[
"https://www.hellostore.id/cdn/shop/products/iPhone14Pro-Purple.jpg"
],
variants:{
"128GB":3800000,
"256GB":4100000
},
link:"https://s.shopee.co.id/5fiXSFd1R5"
},

/* ================= SIMLOCK ================= */

iphone14plus:{
category:"simlock",
title:"iPhone 14 Plus",
description:`Inter Simlock
Like New`,
images:[
"https://appstudio.su/wp-content/uploads/2023/02/c1fa569c1849eb4506ead400cba409a3.jpg"
],
variants:{
"128GB":3400000
},
link:"https://s.shopee.co.id/5L5pIn3cRH"
},



    
iphone15:{
    category:"bypass",
title:"iPhone 15",
description:`face id on Support wifi cocok untuk ngonten , live , gaming. Icloud tinggal login via app store
Garansi 1 bulan, note : ada part histori  servis, namun kualitas seperti original`,
images:[
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_blue_1.jpg&w=1920&q=100",
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_blue_2_1.jpg&w=1920&q=100",
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_blue_4_1.jpg&w=1920&q=100",
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_blue_5_1.jpg&w=1920&q=100",
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_blue_9_2.jpg&w=1920&q=100",

],
variants:{
"128GB":3500000,
"256GB":3900000,
"512GB":4200000
},
link:"https://s.shopee.co.id/9Uv8kLSzoh"
},

/* ================= IPHONE 13 ================= */
iphone13:{
    category:"bypass",
title:"iPhone 13",
description:`face id on Support wifi cocok untuk ngonten , live , gaming. Icloud tinggal login via app store
Garansi 1 bulan, note : ada part histori  servis lcd dan batre, namun kualitas seperti original`,
images:[
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone_13_midnight_1.jpg&w=1920&q=45",
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone_13_midnight_3.jpg&w=1920&q=45",
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone_13_midnight_8.jpg&w=1920&q=45",
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone_13_midnight_6.1_3.jpg&w=1920&q=45",
"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone_13_midnight_10.jpg&w=1920&q=45"
],
variants:{
"128GB":2600000,
"256GB":3000000,
"512GB":4200000
},
link:"https://s.shopee.co.id/6fb9Djo06k"
},

/* ================= IPHONE 14 PRO ================= */
iphone14pro:{
    category:"bypass",
title:"iPhone 14 Pro",
description:`face id on Support wifi cocok untuk ngonten , live , gaming. Icloud tinggal login via app store
Garansi 1 bulan support 120hz, note : ada part histori  servis, namun kualitas seperti original`,
images:[
"https://www.hellostore.id/cdn/shop/products/iPhone14Pro-Purple.jpg?v=1756580156&width=1100",
"https://www.hellostore.id/cdn/shop/products/iPhone14ProMax-16.jpg?v=1756580156&width=1100",
"https://www.hellostore.id/cdn/shop/products/iPhone14ProMax-18.jpg?v=1756580156&width=1100",
"https://www.hellostore.id/cdn/shop/products/Artboard2_69fe8189-e265-4c55-b2aa-309483652952.jpg?v=1756580156&width=1100",
"https://www.hellostore.id/cdn/shop/products/iPhone14ProMax-19_395619c2-7f07-4e2e-ab24-3afa8a2d457e.jpg?v=1756580156&width=1100"
],
variants:{
"128GB":3800000,
"256GB":4100000,
"512GB":4300000
},
link:"https://s.shopee.co.id/5fiXSFd1R5"
},

/* ================= IPHONE 11 ================= */
iphone11:{
    category:"bypass",
title:"iPhone 11",
description:`face id on Support wifi cocok untuk ngonten , live , gaming. Icloud tinggal login via app store
Garansi 1 bulan support 120hz, note : ada part histori  servis, namun kualitas seperti original`,
images:[
"https://www.hellostore.id/cdn/shop/products/iPhone14ProMax-19_395619c2-7f07-4e2e-ab24-3afa8a2d457e.jpg?v=1756580156&width=1100",
"https://appstudio.su/wp-content/uploads/2023/02/6f6a4b2850a1b310efc58f05aed1dfc8.jpg",
"https://appstudio.su/wp-content/uploads/2023/02/4051891d46b90056d17c20b5774b4ed3.jpg",
"https://appstudio.su/wp-content/uploads/2023/02/b87656f63752025f53a0310955f7bad1-700x738.jpg",
"https://appstudio.su/wp-content/uploads/2023/02/4051891d46b90056d17c20b5774b4ed3.jpg"
],
variants:{
"64GB":1800000,
"128GB":2120000
},
link:"https://s.shopee.co.id/6fbCsdQoin"
},

/* ================= IPHONE 14 ================= */
iphone14:{
    category:"bypass",
title:"iPhone 14",
description:`face id on Support wifi cocok untuk ngonten , live , gaming. Icloud tinggal login via app store
Garansi 1 bulan support 120hz, note : ada part histori  servis, namun kualitas seperti original`,
images:[
"https://appstudio.su/wp-content/uploads/2023/02/ea5a4a01ce845b3639f86cfde840ec40.jpg",
"https://appstudio.su/wp-content/uploads/2023/02/7d071c8616b872627b5ab149b90bfe0a.jpg",
"https://appstudio.su/wp-content/uploads/2023/02/4a626156dc3063ac4271ac568bac76bf.jpg",
"https://appstudio.su/wp-content/uploads/2023/02/2aa2e242823a636c703cb7df3c02d47c-700x733.jpg",
"https://appstudio.su/wp-content/uploads/2023/02/2887dfaae78fc398796c21c3a9e3f7c2.jpg"
],
variants:{
"128GB":3200000,
"256GB":3450000,
"512GB":3850000
},
link:"https://s.shopee.co.id/50SjOLd3NA"
},

/* ================= IPHONE 13 PRO & PRO MAX ================= */
iphone13pro:{
    category:"bypass",
title:"iPhone 13 Pro dan Promax",
description:`face id on Support wifi cocok untuk ngonten , live , gaming. Icloud tinggal login via app store
Garansi 1 bulan support 120hz, note : ada part histori  servis, namun kualitas seperti original`,
images:[
"https://appstudio.su/wp-content/uploads/2023/02/29ae6c4ae67fb1c7ab88001da9ae90d7.jpg",
"https://appstudio.su/wp-content/uploads/2023/02/82e246951de95e4147221c0ffb9bbd28.jpg",
"https://appstudio.su/wp-content/uploads/2023/02/db36c3f82fd19630bdb51ea93b13cd72.jpg",
"https://appstudio.su/wp-content/uploads/2023/02/f28d901753d0efc44bd3f8c63955f037-700x700.jpg",
"https://appstudio.su/wp-content/uploads/2023/02/f28d901753d0efc44bd3f8c63955f037-700x700.jpg"
],
variants:{
"13 Pro 128GB":3500000,
"13 Pro 256GB":3900000,
"13 Pro 512GB":"SOLD",
"13 Pro Max 128GB":3800000,
"13 Pro Max 256GB":4000000,
"13 Pro Max 512GB":"SOLD"
},
link:"https://s.shopee.co.id/3LKVPJDzyV"
},

/* ================= IPHONE 14 PLUS ================= */
iphone14plus:{
    category:"bypass",
title:"iPhone 14 Plus",
description:`face id on Support wifi cocok untuk ngonten , live , gaming. Icloud tinggal login via app store
Garansi 1 bulan support 120hz, note : ada part histori  servis, namun kualitas seperti original`,
images:[
"https://appstudio.su/wp-content/uploads/2023/02/c1fa569c1849eb4506ead400cba409a3.jpg",
"https://appstudio.su/wp-content/uploads/2023/02/3ae197d2b509e7a6e5dbe0ebb3f479c3.jpg",
"https://appstudio.su/wp-content/uploads/2023/02/8a7e4199aa33d40dafd25fdf9f979dd0.jpg",
"https://appstudio.su/wp-content/uploads/2023/02/533b27716a9a757e70169982ab743c9a-700x741.jpg",
"https://appstudio.su/wp-content/uploads/2023/02/2a25f3aa989dd21e0eba61afaa4ba021.jpg"
],
variants:{
"128GB":3400000,
"256GB":"SOLD",
"512GB":"SOLD"
},
link:"https://s.shopee.co.id/5L5pIn3cRH"
}

};

/* ===== LOGIC ===== */
const id = new URLSearchParams(window.location.search).get("id");
const product = products[id];

if(!product){
document.body.innerHTML="<h2 style='text-align:center;margin-top:80px'>Produk tidak ditemukan<br><a href='index.html'>Kembali</a></h2>";
}else{

document.getElementById("title").innerText = product.title;
document.getElementById("description").innerHTML = product.description.replace(/\n/g,"<br>");
document.getElementById("shopee").href = product.link;

const mainImage=document.getElementById("mainImage");
mainImage.src=product.images[0];

const thumbs=document.getElementById("thumbs");

product.images.forEach((img,i)=>{
const t=document.createElement("img");
t.src=img;
if(i===0)t.classList.add("active");

t.onclick=()=>{
document.querySelectorAll(".thumbs img").forEach(x=>x.classList.remove("active"));
t.classList.add("active");
mainImage.classList.add("fade");
setTimeout(()=>{
mainImage.src=img;
mainImage.classList.remove("fade");
},200);
};

thumbs.appendChild(t);
});

const variantBox=document.getElementById("variants");

Object.keys(product.variants).forEach(v=>{
const btn=document.createElement("button");

if(product.variants[v]==="SOLD"){
btn.classList.add("sold");
btn.innerText=v+" (Sold)";
}else{
btn.innerText=v;
btn.onclick=()=>{
document.querySelectorAll(".variants button").forEach(b=>b.classList.remove("active"));
btn.classList.add("active");
document.getElementById("price").innerText=
"Rp "+product.variants[v].toLocaleString("id-ID");
};
}

variantBox.appendChild(btn);
});
}
