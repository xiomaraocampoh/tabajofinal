// Seleccionar todos los elementos con la clase 'service'
const services = document.querySelectorAll('.service');

// Recorrer cada elemento 'service'
services.forEach(service => {
    // Agregar evento 'mouseover' al elemento 'service'
    service.addEventListener('mouseover', () => {
        // Mostrar información del servicio
        service.querySelector('.service-info').style.display = 'block';
    });

    // Agregar evento 'mouseout' al elemento 'service'
    service.addEventListener('mouseout', () => {
        // Ocultar información del servicio
        service.querySelector('.service-info').style.display = 'none';
    });
});

// Seleccionar todos los elementos con la clase 'show-info-btn'
const showInfoBtns = document.querySelectorAll('.show-info-btn');

// Recorrer cada elemento 'show-info-btn'
showInfoBtns.forEach((btn) => {
    // Agregar evento 'click' al elemento 'show-info-btn'
    btn.addEventListener('click', (e) => {
        // Mostrar información del servicio relacionado con el botón
        const serviceInfo = e.target.nextElementSibling;
        serviceInfo.style.display = 'block';
    });
});

// Seleccionar todos los elementos con la clase 'service'
document.querySelectorAll('.service').forEach(service => {
    // Agregar evento 'mouseover' al elemento 'service'
    service.addEventListener('mouseover', () => {
        // Aumentar tamaño del servicio
        service.style.transform = 'scale(1.1)';
    });

    // Agregar evento 'mouseout' al elemento 'service'
    service.addEventListener('mouseout', () => {
        // Restablecer tamaño del servicio
        service.style.transform = 'scale(1)';
    });
});

// Seleccionar todos los enlaces dentro de un elemento 'nav'
document.querySelectorAll('nav a').forEach(link => {
    // Agregar evento 'click' al enlace
    link.addEventListener('click', event => {
        // Prevenir comportamiento predeterminado del enlace
        event.preventDefault();

        // Seleccionar elemento relacionado con el enlace
        const target = document.querySelector(link.getAttribute('href'));

        // Desplazarse hasta el elemento relacionado
        target.scrollIntoView({ behavior: 'smooth' });
    });
});