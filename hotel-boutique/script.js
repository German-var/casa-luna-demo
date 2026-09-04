const header = document.querySelector("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


const elementos = document.querySelectorAll(
    "#habitaciones, #nosotros, #ubicacion, #reservar, #contacto"
);


elementos.forEach((elemento) => {

    elemento.classList.add("animar");

});


const observador = new IntersectionObserver(

    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.1
    }

);


elementos.forEach((elemento) => {

    observador.observe(elemento);

});