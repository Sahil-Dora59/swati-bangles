```javascript
/* ==========================================
SWATI BANGLES V5.0
Premium script.js
========================================== */

/* ===========================
SMART HEADER
=========================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 120){

        header.classList.add("fixed");

    }

    else{

        header.classList.remove("fixed");

    }

});

/* ===========================
SMOOTH ACTIVE NAVIGATION
=========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-180;

        if(window.pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});

/* ===========================
ANIMATED COUNTERS
=========================== */

function animateCounter(id,target){

    const element=document.getElementById(id);

    if(!element) return;

    let count=0;

    const speed=Math.ceil(target/80);

    const timer=setInterval(()=>{

        count+=speed;

        if(count>=target){

            count=target;

            clearInterval(timer);

        }

        element.innerHTML=count+"+";

    },20);

}

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

animateCounter("years",18);

animateCounter("customers",1000);

animateCounter("designs",500);

counterObserver.disconnect();

}

});

});

const stats=document.querySelector(".stats");

if(stats){

counterObserver.observe(stats);

}

/* ===========================
SEARCH
=========================== */

const searchInput=document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

document.querySelectorAll(".gallery-img").forEach(img=>{

img.style.display=

img.alt.toLowerCase().includes(value)

?

"block"

:

"none";

});

});

}

/* ===========================
FILTER
=========================== */

function filterGallery(category){

const images=document.querySelectorAll(".gallery-img");

images.forEach(img=>{

if(category==="all"){

img.style.display="block";

}

else if(img.classList.contains(category)){

img.style.display="block";

}

else{

img.style.display="none";

}

});

}

/* ===========================
LIGHTBOX
=========================== */

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightbox-img");

const closeBtn=document.querySelector(".close-lightbox");

document.querySelectorAll(".gallery-img").forEach(image=>{

image.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=image.src;

lightboxImg.alt=image.alt;

document.body.style.overflow="hidden";

});

});

if(closeBtn){

closeBtn.onclick=()=>{

lightbox.style.display="none";

document.body.style.overflow="auto";

};

}

if(lightbox){

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

document.body.style.overflow="auto";

}

};

}

/* ===========================
SCROLL REVEAL
=========================== */

const revealElements=document.querySelectorAll(

".featured-card,.card,.why-card,.testimonial-card,.faq-item,.gallery-img,.review-card"

);

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{

threshold:0.15

});

revealElements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition="all .8s ease";

revealObserver.observe(el);

});

/* ===========================
BUTTON RIPPLE
=========================== */

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transition=".3s";

});

});

/* ===========================
BACK TO TOP BUTTON
=========================== */

const backBtn=document.createElement("button");

backBtn.innerHTML="↑";

backBtn.className="back-top";

document.body.appendChild(backBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backBtn.style.opacity="1";

backBtn.style.visibility="visible";

}

else{

backBtn.style.opacity="0";

backBtn.style.visibility="hidden";

}

});

backBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* ===========================
PRELOAD HERO IMAGE
=========================== */

const heroImage=new Image();

heroImage.src="images/LuxuryBridalBannerV5.png";

/* ===========================
WHATSAPP CTA PULSE
=========================== */

setInterval(()=>{

const btn=document.querySelector(".hero-btn");

if(btn){

btn.classList.add("pulse");

setTimeout(()=>{

btn.classList.remove("pulse");

},1000);

}

},5000);

/* ===========================
CONSOLE MESSAGE
=========================== */

console.log(

"%cSWATI BANGLES V5.0",

"color:#d4af37;font-size:18px;font-weight:bold;"

);

console.log(

"Premium Bridal Jewellery Website Loaded Successfully."

);

/* ===========================
END OF SCRIPT
=========================== */
```
