/* ========================================= */
/* HEADER AL HACER SCROLL */
/* ========================================= */

const header = document.getElementById("header");


function actualizarHeader() {

    if (window.scrollY > 60) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener("scroll", actualizarHeader);

actualizarHeader();



/* ========================================= */
/* MENÚ CELULAR */
/* ========================================= */

const menuButton = document.getElementById("menuButton");

const nav = document.getElementById("nav");


menuButton.addEventListener("click", () => {

    menuButton.classList.toggle("active");

    nav.classList.toggle("active");

    header.classList.toggle("menu-active");

    document.body.classList.toggle("menu-open");

});



/* CERRAR MENÚ AL SELECCIONAR ALGO */

const navLinks = document.querySelectorAll("#nav a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuButton.classList.remove("active");

        nav.classList.remove("active");

        header.classList.remove("menu-active");

        document.body.classList.remove("menu-open");

    });

});



/* ========================================= */
/* ANIMACIONES AL HACER SCROLL */
/* ========================================= */

const elementos = document.querySelectorAll(".reveal");


const observador = new IntersectionObserver(

    entradas => {

        entradas.forEach(entrada => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visible");

                observador.unobserve(entrada.target);

            }

        });

    },

    {

        threshold: 0.12

    }

);


elementos.forEach(elemento => {

    observador.observe(elemento);

});



/* ========================================= */
/* ANIMACIÓN ESCALONADA DE HABITACIONES */
/* ========================================= */

const habitaciones = document.querySelectorAll(".room");


habitaciones.forEach((habitacion, index) => {

    habitacion.style.transitionDelay =
        `${index * 100}ms`;

});



/* ========================================= */
/* ANIMACIÓN ESCALONADA DE EXPERIENCIAS */
/* ========================================= */

const experiencias =
    document.querySelectorAll(".experience-item");


experiencias.forEach((experiencia, index) => {

    experiencia.style.transitionDelay =
        `${index * 80}ms`;

});



/* ========================================= */
/* CERRAR MENÚ SI CAMBIA A DESKTOP */
/* ========================================= */

window.addEventListener("resize", () => {

    if (window.innerWidth > 1000) {

        menuButton.classList.remove("active");

        nav.classList.remove("active");

        header.classList.remove("menu-active");

        document.body.classList.remove("menu-open");

    }

});


elementos.forEach((elemento) => {

    observador.observe(elemento);

});
