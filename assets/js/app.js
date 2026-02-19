const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");
const grid = document.getElementById("productGrid");

hamburger.addEventListener("click", () => {
hamburger.classList.toggle("active");
mobileMenu.classList.toggle("active");
overlay.classList.toggle("active");
document.body.classList.toggle("menu-open");
});

overlay.addEventListener("click", closeMenu);

function closeMenu(){
hamburger.classList.remove("active");
mobileMenu.classList.remove("active");
overlay.classList.remove("active");
document.body.classList.remove("menu-open");
}
/* HEADER SHRINK */
window.addEventListener("scroll", () => {
const header = document.querySelector(".header");
if(window.scrollY > 50){
header.classList.add("shrink");
}else{
header.classList.remove("shrink");
}
});

/* PRODUCT DATA */
const products = [
{id:"iphone15",name:"iPhone 15",img:"https://cdnpro.eraspace.com/media/catalog/product/a/p/apple_iphone_15_blue_1.jpg",category:"bypass",prices:[3500000,3900000,4200000],best:true},
{id:"iphone13",name:"iPhone 13",img:"https://cdnpro.eraspace.com/media/catalog/product/i/p/iphone_13_midnight_1.jpg",category:"bypass",prices:[2600000,3000000,4200000],best:true},
{id:"iphone14pro",name:"iPhone 14 Pro",img:"https://hybrid.co.id/wp-content/uploads/2022/09/cec6f6731d5c6418412237424b17bf42_Apple-iPhone-14-Pro-iPhone-14-Pro-Max-space-black-220907.jpg",category:"bypass",prices:[3800000,4100000,4300000],best:true},
{id:"iphone11",name:"iPhone 11",img:"https://appstudio.su/wp-content/uploads/2023/02/6f6a4b2850a1b310efc58f05aed1dfc8.jpg",category:"bypass",prices:[1800000,2120000]},
{id:"iphone14",name:"iPhone 14",img:"https://appstudio.su/wp-content/uploads/2023/02/ea5a4a01ce845b3639f86cfde840ec40.jpg",category:"bypass",prices:[3200000,3450000,3850000]},
{id:"iphone13pro",name:"iPhone 13 Pro / Pro Max",img:"https://appstudio.su/wp-content/uploads/2023/02/29ae6c4ae67fb1c7ab88001da9ae90d7.jpg",category:"bypass",prices:[3500000,3900000,3800000,4000000]},
{id:"iphone14plus",name:"iPhone 14 Plus",img:"https://appstudio.su/wp-content/uploads/2023/02/c1fa569c1849eb4506ead400cba409a3.jpg",category:"bypass",prices:[3400000]},


/* ================= RESMI ================= */
{id:"iphone11r",name:"iPhone 11 Resmi",img:"https://api.bstore.co.id/storage/products/1721466331_iphone-11-256gb-second-ex-resmi_1.png",category:"resmi",prices:[4500000,5150000,3900000],best:true},

{id:"iphone13r",name:"iPhone 13 ex iBox BeaCukai",img:"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone_13_midnight_1.jpg&w=1920&q=45",category:"resmi",prices:[6500000,7000000,7900000]},

{id:"iphone13promaxr",name:"iPhone 13 Pro Max ex iBox BeaCukai",img:"https://appstudio.su/wp-content/uploads/2023/02/29ae6c4ae67fb1c7ab88001da9ae90d7.jpg",category:"resmi",prices:[9700000,10550000,11950000,13500000,8700000,9900000]},

{id:"iphone14promaxr",name:"iPhone 14 Pro Max ex iBox BeaCukai",img:"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fi%2Fp%2Fiphone_14_pro_max_gold_1.jpg&w=1920&q=45",category:"resmi",prices:[12200000,13200000,14900000,11600000,12700000,14200000,14700000]},

{id:"iphone12r",name:"iPhone 12 ex iBox BeaCukai",img:"https://www.digimap.co.id/cdn/shop/files/0788-APPMGJ93ID-A-1.jpg?v=1721637128&width=823",category:"resmi",prices:[5300000,5700000,6600000,5200000,6100000]},

{id:"iphone15promaxr",name:"iPhone 15 Pro Max iBox",img:"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_pro_max_natural_titanium_1_1_2.jpg&w=1920&q=45",category:"resmi",prices:[15200000,14900000],best:true},

{id:"iphone15r",name:"iPhone 15 iBox BeaCukai",img:"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_blue_1.jpg&w=1920&q=100",category:"resmi",prices:[9300000,10500000]},

{id:"iphone14pror",name:"iPhone 14 Pro iBox BeaCukai",img:"https://www.hellostore.id/cdn/shop/products/iPhone14Pro-Purple.jpg?v=1756580156&width=1100",category:"resmi",prices:[11500000,12500000,11200000,12000000]},

{id:"iphone13pror",name:"iPhone 13 Pro iBox BeaCukai",img:"https://appstudio.su/wp-content/uploads/2023/02/29ae6c4ae67fb1c7ab88001da9ae90d7.jpg",category:"resmi",prices:[9000000,9800000,10500000,9300000]},

{id:"iphone15pror",name:"iPhone 15 Pro iBox BeaCukai",img:"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_pro_blue_titanium_1_6_1.jpg&w=1920&q=45",category:"resmi",prices:[14000000,14900000,13700000,14400000]},

{id:"iphone12promaxr",name:"iPhone 12 Pro Max iBox BeaCukai",img:"https://cdn.jagofon.com/otf/BQLVfZh_weNc-vKEyMINFaVeK8BMQrujvO8EcEazwoc/t:10/w:600/f:avif/q:60/aHR0cHM6Ly9jZG4uamFnb2Zvbi5jb20vbW9kZWwvczE0ZzB0ZVFhekFyZG1peHNTT21VSUU1NTk2SGlSV3huaGpPWmhqZS5wbmc",category:"resmi",prices:[8200000,8800000,10000000,8300000,9000000]},

{id:"iphone11promaxr",name:"iPhone 11 Pro Max iBox BeaCukai",img:"https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-11-pro-max/iphone-11-pro-max-gold.jpg",category:"resmi",prices:[6000000,6700000,7600000]},

{id:"iphone14r",name:"iPhone 14 iBox",img:"https://appstudio.su/wp-content/uploads/2023/02/ea5a4a01ce845b3639f86cfde840ec40.jpg",category:"resmi",prices:[7800000,9700000]},

{id:"iphonexrr",name:"iPhone XR iBox BeaCukai",img:"https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-xr/iphone-xr-white.jpg",category:"resmi",prices:[3500000,4000000]},

{id:"iphone15plusr",name:"iPhone 15 Plus iBox BeaCukai",img:"https://ibox.co.id/_next/image?url=https%3A%2F%2Fcdnpro.eraspace.com%2Fmedia%2Fcatalog%2Fproduct%2Fa%2Fp%2Fapple_iphone_15_plus_green_1_1.jpg&w=1920&q=45",category:"resmi",prices:[11000000]},

/* ================= INTER FU ================= */


/* ================= SIMLOCK ================= */

];

function renderProducts(category){
grid.innerHTML="";
products.filter(p=>p.category===category)
.forEach(p=>{
const minPrice=Math.min(...p.prices);
const card=document.createElement("a");
card.href="product.html?id="+p.id;
card.className="card";
card.innerHTML=`
${p.best?`<div class="badge">Best Seller</div>`:""}
<img src="${p.img}">
<h3>${p.name}</h3>
<p class="price">Mulai Rp ${minPrice.toLocaleString("id-ID")}</p>
`;
grid.appendChild(card);
});
}

function filterCategory(cat, btn){
    
    document.querySelectorAll(".categories button")
    .forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");

    const resmiSection = document.getElementById("resmiHighlight");

    if(cat === "resmi"){
        resmiSection.style.display = "block";

        // auto scroll ke section
        setTimeout(()=>{
            resmiSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 100);

    } else {
        resmiSection.style.display = "none";
    }

    renderProducts(cat);
    closeMenu();
}

renderProducts("bypass");
