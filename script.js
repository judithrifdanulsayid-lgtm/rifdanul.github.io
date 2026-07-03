// script.js

const products = [

  {
  name:"iPhone 14 Pro & 14 Promax",
  category:"Bypass",
  price:"Rp 4 Juta",
  badge:"Premium",
  description:"Face ID ON, support WiFi, cocok gaming & content creator.",
  links:[
    {
      title:"Toko 1",
      url:"https://s.shopee.co.id/60Pa8o0Ujg"
    },
    {
      title:"Toko 2",
      url:"https://s.shopee.co.id/4Awvfidg2z"
    },
    {
      title:"Toko 3",
      url:"https://s.shopee.co.id/1LdkaM9b7a"
    }
  ],
  images:[
    "https://www.hellostore.id/cdn/shop/products/iPhone14Pro-Purple.jpg?v=1756580156&width=1100",
    "https://www.hellostore.id/cdn/shop/products/iPhone14ProMax-16.jpg?v=1756580156&width=1100",
    "https://www.hellostore.id/cdn/shop/products/iPhone14ProMax-18.jpg?v=1756580156&width=1100",
    "https://www.hellostore.id/cdn/shop/products/Artboard2_69fe8189-e265-4c55-b2aa-309483652952.jpg?v=1756580156&width=1100",
    "https://www.hellostore.id/cdn/shop/products/iPhone14ProMax-19_395619c2-7f07-4e2e-ab24-3afa8a2d457e.jpg?v=1756580156&width=1100"
  ]

  
},

{
  name:"iPhone 11",
  category:"Bypass",
  price:"Rp 2 Juta",
  badge:"Trusted",
  description:"iPhone bypass aman & termurah cocok buat harian dan dijual lagi.",
  links:[
    {
      title:"Beli Sekarang",
      url:"https://s.shopee.co.id/9Kf1ouIsqe"
    }
  ],
  images:[
    "https://borneostore.co.id/wp-content/uploads/2022/08/11-yellow.webp",
    "https://borneostore.co.id/wp-content/uploads/2022/08/11-putih.jpg",
    "https://borneostore.co.id/wp-content/uploads/2022/08/11-black.jpg",
    "https://borneostore.co.id/wp-content/uploads/2022/08/11-ungu.jpg",
    "https://borneostore.co.id/wp-content/uploads/2022/08/11-merah.jpg"
  ]
},
  {
  name:"iPhone 14",
  category:"Bypass",
  price:"Rp 3 Juta",
  badge:"Trusted",
  description:"iPhone bypass aman & termurah cocok buat harian dan dijual lagi.",
  links:[
    {
      title:"Beli Sekarang",
      url:"https://s.shopee.co.id/70HUoYhQLg"
    }
  ],
  images:[
    "https://down-id.img.susercontent.com/file/id-11134207-822wj-mmr9kjvnizns9d.webp",
    "https://down-id.img.susercontent.com/file/id-11134207-822wh-mp0hmn43ewp7f4.webp",
    "https://down-id.img.susercontent.com/file/id-11134207-822wm-mmr9kjvfludg97.webp",
    "https://down-id.img.susercontent.com/file/id-11134207-822wt-mmr9kjveqxvnd5.webp",
    "https://down-id.img.susercontent.com/file/id-11134207-822wi-mmr9kjvq0w0485.webp"
  ]
},
   {
  name:"iPhone 13 Pro & 13 Promax",
  category:"Bypass",
  price:"Rp 3,2 Juta",
  badge:"Trusted",
  description:"iPhone bypass aman & termurah cocok buat harian dan dijual lagi.",
  links:[
    {
      title:"Beli Sekarang",
      url:" https://s.shopee.co.id/5fmi0FpwRy"
    }
  ],
  images:[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC9nuK_SCqlw6DKwus0ciYntpwfnnWx-fjyqlUv6FeavgEqAqWLo3GY8jo&s=10",
    "https://unboxing.id/wp-content/uploads/2022/04/ip-13-promax-green-600x600.jpg",
    "https://kevajo.com/wp-content/uploads/2021/09/iphone13pro1.webp",
    "https://propreowned.com/cdn/shop/files/Pro_iPhone_13_Pro_Max_Gold.webp?v=1739250320&width=700",
  ]
},
{
  name:"iPhone 15",
  category:"Bypass",
  price:"Rp 4 Juta",
  badge:"Trusted",
  description:"iPhone bypass aman & termurah cocok buat harian dan dijual lagi.",
  links:[
    {
      title:"Beli Sekarang",
      url:"https://s.shopee.co.id/AUs7kWXBGB"
    }
  ],
  images:[
    "https://down-id.img.susercontent.com/file/id-11134207-8224w-mkbvvsogbdac2c.webp",
    "https://down-id.img.susercontent.com/file/id-11134207-822wr-mp0hmn43gb9naf.webp",
    "https://down-id.img.susercontent.com/file/id-11134207-8224x-mkbvvsonxa0w20.webp",
    "https://down-id.img.susercontent.com/file/id-11134207-8224x-mkbvvsoqcd8kb4.webp",
    "https://down-id.img.susercontent.com/file/id-11134207-8224p-mkbvvsoi5dzbbb.webp"
  ]
},

{
  name:"iPhone 13",
  category:"Bypass",
  price:"Rp 3,1 Juta",
  badge:"Best Seller",
  description:"Face ID ON, support WiFi, cocok ngonten, live & gaming. Garansi 1 bulan.",
  links:[
    {
      title:"Beli Sekarang",
      url:"https://s.shopee.co.id/9zuicDnO0X"
    }
  ],
  images:[
    "https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone_13_midnight_1.jpg&w=1920&q=45",
    "https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone_13_midnight_3.jpg&w=1920&q=45",
    "https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone_13_midnight_8.jpg&w=1920&q=45",
    "https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone_13_midnight_6.1_3.jpg&w=1920&q=45",
    "https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone_13_midnight_10.jpg&w=1920&q=45"
  ]
},


// TAMBAHKAN KE ARRAY const products = [ ... ]
// letakkan di bawah product iPhone 14 Pro

{
  name:"iPhone 14 Pro Max",
  category:"Inter No Simlock",
  price:"Rp 7 Jutaan",
  badge:"Inter",
  description:"Inter all op, BH 90-100 bisa request, LCD & baterai ori tanpa notif dan bukan simlock.",
  links:[
    {
      title:"Beli Sekarang",
      url:"https://s.shopee.co.id/1BJK6iW3MZ"
    }
  ],
  images:[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNaSFlb8zZaM9KjTI93aerBJjbGGHI8eLiSw&s",
    "https://www.hellostore.id/cdn/shop/products/iPhone14Pro-Purple.jpg?v=1756580156&width=1100",
    "https://down-id.img.susercontent.com/file/id-11134207-7ra0s-mc06nbs1jpkje6.webp",
    "https://www.hellostore.id/cdn/shop/products/iPhone14ProMax-18.jpg?v=1756580156&width=1100",
    "https://maivoli.vodafone.com.vu/wp-content/uploads/2024/05/Apple-iPhone-14-Pro-Max-05.webp"
  ]
},

  {
  name:"iPhone 14 Plus",
  category:"Inter No Simlock",
  price:"Rp 5 Juta",
  badge:"Trusted",
  description:"iPhone bypass aman & termurah cocok buat harian dan dijual lagi.",
  links:[
    {
      title:"Beli Sekarang",
      url:"https://s.shopee.co.id/7prMa7Dciz"
    }
  ],
  images:[
    "https://down-id.img.susercontent.com/file/id-11134207-822wj-mmr9kjvnizns9d.webp",
    "https://down-id.img.susercontent.com/file/id-11134207-822wh-mp0hmn43ewp7f4.webp",
    "https://down-id.img.susercontent.com/file/id-11134207-822wm-mmr9kjvfludg97.webp",
    "https://down-id.img.susercontent.com/file/id-11134207-822wt-mmr9kjveqxvnd5.webp",
    "https://down-id.img.susercontent.com/file/id-11134207-822wi-mmr9kjvq0w0485.webp"
  ]
},


  

{
  name:"iPhone 13 Pro Max",
  category:"Inter No Simlock",
  price:"Rp 6 Jutaan",
  badge:"Recommended",
  description:"Inter all op, BH 90-100 bisa request, LCD & baterai ori tanpa notif dan bukan simlock.",
  links:[
    {
      title:"Beli sekarang",
      url:"https://s.shopee.co.id/2g87t98VM7"
    }
  ],
  images:[
    "https://cellexportgt.com/cdn/shop/products/GKzs8E4g.jpg?v=1744227682&width=1080",
    "https://mac-center.com/cdn/shop/articles/iphone-13-pro-iphone-13-pro-max-pantalla.png?v=1774982363",
    "https://appstudio.su/wp-content/uploads/2023/02/db36c3f82fd19630bdb51ea93b13cd72.jpg",
    "https://down-id.img.susercontent.com/file/id-11134207-7ra0n-mc06nbs1coqb8d.webp",
    "https://appstudio.su/wp-content/uploads/2023/02/f28d901753d0efc44bd3f8c63955f037-700x700.jpg",
    "https://appstudio.su/wp-content/uploads/2023/02/f28d901753d0efc44bd3f8c63955f037-700x700.jpg",
    "https://appleworld.co.za/cdn/shop/files/iphone_13_pro_silver_pure_back_iphone_13_pro_silver_pure_front_2-up_screen__usen_2_4_1_1_1_1_1.jpg?v=1768545594&width=3840"
  ]
},

{
  name:"iPhone 16 Plus",
  category:"Inter No Simlock",
  price:"Rp 8 Jutaan",
  badge:"Latest",
  description:"Inter all op, BH 90-100 bisa request, LCD & baterai ori tanpa notif dan bukan simlock.",
  links:[
    {
      title:"Beli Sekarang",
      url:"https://s.shopee.co.id/50W2fVU2dc"
    }
  ],
  images:[
    "https://www.digimap.co.id/cdn/shop/files/0788-APPMXVX3ID-A-1.jpg?v=1734067695&width=823",
    "https://www.digimap.co.id/cdn/shop/files/0788-APPMXVX3ID-A-3.jpg?v=1734067695&width=1680",
    "https://www.digimap.co.id/cdn/shop/files/0788-APPMXVX3ID-A-4.jpg?v=1734067695&width=1680",
    "https://www.digimap.co.id/cdn/shop/files/0788-APPMXVX3ID-A-5.jpg?v=1734067695&width=1680",
    "https://www.digimap.co.id/cdn/shop/files/0788-APPMXVX3ID-A-6.jpg?v=1734067695&width=1680"
  ]
},
];

const container = document.getElementById('productContainer');

function renderProducts(data){

  container.innerHTML='';

  data.forEach((product,index)=>{

    let linksHTML='';

    product.links.forEach((link,i)=>{

      linksHTML += `
      <a href="${link.url}" target="_blank"
      class="${i === 0 ? 'primary':'secondary'}">
      ${link.title}
      </a>
      `;

    });

    let imagesHTML='';

    product.images.forEach((img)=>{

      imagesHTML += `
      <img src="${img}" onclick="openImage('${img}')">
      `;

    });

    container.innerHTML += `

    <div class="card" data-category="${product.category}">

      <div class="badge">
        ${product.badge}
      </div>

      <div class="slider">

        <div class="slides" id="slide-${index}">
          ${imagesHTML}
        </div>

        <div class="slider-buttons">
          <button onclick="prevSlide(${index})">‹</button>
          <button onclick="nextSlide(${index})">›</button>
        </div>

      </div>

      <div class="card-content">

        <h3>${product.name}</h3>

        <div class="category">
          ${product.category}
        </div>

        <div class="price">
          ${product.price}
        </div>

        <div class="desc">
          ${product.description}
        </div>

        <div class="links">
          ${linksHTML}
        </div>

      </div>

    </div>

    `;

  });

}

renderProducts(products);

const slideIndex = {};

function nextSlide(id){

  const slides =
  document.querySelectorAll(`#slide-${id} img`);

  if(!slideIndex[id]) slideIndex[id]=0;

  slideIndex[id]++;

  if(slideIndex[id] >= slides.length){
    slideIndex[id]=0;
  }

  updateSlide(id);

}

function prevSlide(id){

  const slides =
  document.querySelectorAll(`#slide-${id} img`);

  if(!slideIndex[id]) slideIndex[id]=0;

  slideIndex[id]--;

  if(slideIndex[id] < 0){
    slideIndex[id]=slides.length-1;
  }

  updateSlide(id);

}

function updateSlide(id){

  const slide =
  document.getElementById(`slide-${id}`);

  slide.style.transform =
  `translateX(-${slideIndex[id] * 100}%)`;

}

function filterCategory(category,btn){

  document.querySelectorAll('.menu button')
  .forEach(b=>b.classList.remove('active'));

  btn.classList.add('active');

  const cards =
  document.querySelectorAll('.card');

  cards.forEach(card=>{

    if(category === 'all'){
      card.style.display='block';
    }else{

      card.style.display =
      card.dataset.category === category
      ? 'block'
      : 'none';

    }

  });

}

function closePopup(){
  document.getElementById('popup').style.display='none';
}

function openImage(src){

  document.getElementById('imageModal')
  .style.display='flex';

  document.getElementById('modalImage')
  .src = src;

}

function closeImage(){

  document.getElementById('imageModal')
  .style.display='none';

}
