/* ==========================================
SWATI BANGLES V5.0
script.js

Author : Clean Rebuild
Version : 5.0

========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       STICKY HEADER EFFECT
    ========================== */

    const header = document.querySelector(".main-header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 80) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

    /* ==========================
       ACTIVE NAVIGATION
    ========================== */

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll(".navbar a");

    function activeMenu() {

        let scrollY = window.pageYOffset;

        sections.forEach(section => {

            const sectionHeight = section.offsetHeight;

            const sectionTop = section.offsetTop - 150;

            const sectionId = section.getAttribute("id");

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {

                navLinks.forEach(link => {

                    link.classList.remove("active");

                });

                const activeLink = document.querySelector(

                    '.navbar a[href="#' + sectionId + '"]'

                );

                if (activeLink) {

                    activeLink.classList.add("active");

                }

            }

        });

    }

    window.addEventListener("scroll", activeMenu);

    /* ==========================
       ANIMATED COUNTERS
    ========================== */

    function counter(id, target) {

        const element = document.getElementById(id);

        if (!element) return;

        let value = 0;

        const speed = Math.ceil(target / 80);

        const timer = setInterval(() => {

            value += speed;

            if (value >= target) {

                value = target;

                clearInterval(timer);

            }

            element.innerHTML = value + "+";

        }, 20);

    }

    const stats = document.querySelector(".stats-section");

    if (stats) {

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    counter("years", 18);

                    counter("customers", 1000);

                    counter("designs", 500);

                    observer.disconnect();

                }

            });

        });

        observer.observe(stats);

    }

    /* ==========================
       SEARCH
    ========================== */

    const search = document.getElementById("searchInput");

    if (search) {

        search.addEventListener("keyup", function () {

            const value = this.value.toLowerCase();

            document.querySelectorAll(".gallery-img").forEach(img => {

                const text = img.alt.toLowerCase();

                img.style.display = text.includes(value)

                    ? "block"

                    : "none";

            });

        });

    }

    /* ==========================
       LIGHTBOX
    ========================== */

    const lightbox = document.getElementById("lightbox");

    const lightboxImg = document.getElementById("lightbox-img");

    const closeBtn = document.querySelector(".close-lightbox");

    document.querySelectorAll(".gallery-img").forEach(img => {

        img.addEventListener("click", function () {

            lightbox.style.display = "flex";

            lightboxImg.src = this.src;

            lightboxImg.alt = this.alt;

            document.body.style.overflow = "hidden";

        });

    });

    if (closeBtn) {

        closeBtn.addEventListener("click", function () {

            lightbox.style.display = "none";

            document.body.style.overflow = "auto";

        });

    }

    if (lightbox) {

        lightbox.addEventListener("click", function (e) {

            if (e.target === lightbox) {

                lightbox.style.display = "none";

                document.body.style.overflow = "auto";

            }

        });

    }

    /* ==========================
       SCROLL REVEAL
    ========================== */

    const revealItems = document.querySelectorAll(

        ".featured-card,.category-card,.trust-card,.testimonial-card,.contact-card,.faq-item,.gallery-img,.stat-card"

    );

    const revealObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("fade-up");

                }

            });

        },

        {

            threshold: 0.15

        }

    );

    revealItems.forEach(item => {

        revealObserver.observe(item);

    });

});

/* ==========================
GALLERY FILTER
========================== */

function filterGallery(category) {

    const images = document.querySelectorAll(".gallery-img");

    images.forEach(image => {

        if (category === "all") {

            image.style.display = "block";

        }

        else if (image.classList.contains(category)) {

            image.style.display = "block";

        }

        else {

            image.style.display = "none";

        }

    });

}

/* ==========================
BACK TO TOP BUTTON
========================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.className = "back-to-top";

document.body.appendChild(topButton);

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        topButton.style.opacity = "1";

        topButton.style.visibility = "visible";

    }

    else {

        topButton.style.opacity = "0";

        topButton.style.visibility = "hidden";

    }

});

topButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================
PRELOAD HERO IMAGE
========================== */

const preload = new Image();

preload.src = "images/LuxuryBridalBannerV5.png";

/* ==========================
CONSOLE
========================== */

console.log(

"%cSWATI BANGLES V5",

"color:#d4af37;font-size:18px;font-weight:bold;"

);

console.log("Premium Jewellery Website Loaded Successfully");
```
