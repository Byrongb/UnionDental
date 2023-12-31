// Creando el header
const header = document.createElement('header');

const menuBtn = document.createElement('button');
menuBtn.id = 'menu-btn';
menuBtn.innerHTML = '&#9776;';
header.appendChild(menuBtn);

const logoImg = document.createElement('img');
logoImg.id = 'logo';
logoImg.src = 'https://i.postimg.cc/Kv0L0TRC/352008352-1329804570903835-4932891701089628596-n-removebg-preview.png';
logoImg.alt = 'Logo del laboratorio dental';
header.appendChild(logoImg);

document.body.appendChild(header);

// Creando el contenido principal
const main = document.createElement('main');

function createSlider() {
    const slider = document.createElement('div');
  slider.id = 'slider';

  const slide1 = document.createElement('img');
  slide1.className = 'slide';
  slide1.src = 'https://www.maimonides.edu/wp-content/uploads/2019/11/20191101-shutterstock-protesis-dental-2.jpg'; 

  const slide2 = document.createElement('img');
  slide2.className = 'slide';
  slide2.src = 'https://www.escolapejoan.com/wp-content/uploads/2018/04/c7b93e01b468a24f02e258ffe263cd87_XL-768x408.jpg'; 
  
  const slide3 = document.createElement('img');
  slide3.className = 'slide';
  slide3.src = 'https://dentalforum.es/wp-content/uploads/2019/02/Tecnico-Dental-690x435.jpg'; 

  const slide4 = document.createElement('img');
  slide4.className = 'slide';
  slide4.src = 'https://titulae.es/wp-content/uploads/2021/11/estudiar-protesico-dental.jpg'; 

  slider.appendChild(slide1);
  slider.appendChild(slide2);
  slider.appendChild(slide3);
  slider.appendChild(slide4);


  // Agregamos el slider después del menú horizontal y antes del contenido principal.
  document.body.insertBefore(slider, main);
  

  let currentSlide = 0;
  const slides = slider.querySelectorAll('.slide');
  
  slides[0].style.opacity = 1;  // Asegurarnos de que el primer slide se muestre al principio

  setInterval(() => {
      slides[currentSlide].style.opacity = 0; // Ocultar slide actual
      currentSlide = (currentSlide + 1) % slides.length; // Siguiente slide
      slides[currentSlide].style.opacity = 1; // Mostrar siguiente slide
  }, 5000);

    
  return slider;
}

function toggleSlider(visibility) {
    const slider = document.getElementById('slider');
    slider.style.display = visibility ? 'block' : 'none';
}

const h1 = document.createElement('h1');
h1.textContent = 'Arte y Precisión en Cada Creación Dental';
main.appendChild(h1);

const p = document.createElement('p');
p.textContent = 'En Unión Dental, combinamos la artesanía tradicional con tecnologías avanzadas para producir restauraciones dentales de la más alta calidad. Desde coronas y puentes hasta prótesis y aparatos ortopédicos, cada pieza es cuidadosamente diseñada y fabricada para satisfacer las necesidades individuales de cada paciente, garantizando una sonrisa perfecta y funcional.';
main.appendChild(p);

const mainImg = document.createElement('img');
mainImg.src = 'https://scontent.fgua5-1.fna.fbcdn.net/v/t39.30808-6/365166605_109729702217000_1883612272712863980_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=czV7lSWSH5sAX9kIyTf&_nc_ht=scontent.fgua5-1.fna&oh=00_AfAljwBWL7TP2OvJVu_lGyLM91dd6tDakRI8UQFJyLwC2g&oe=64D4D1E2';
mainImg.alt = 'Imagen relacionada con servicios dentales';
main.appendChild(mainImg);

document.body.appendChild(main);

// Creando el menú lateral
const nav = document.createElement('nav');
nav.id = 'side-menu';

const ul = document.createElement('ul');
const items = ['HOME','PORTAFOLIO', 'HERRAMIENTAS', 'POLITICAS', 'CONTACTO'];
items.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${item.toLowerCase()}`;
    a.textContent = item;
    li.appendChild(a);
    ul.appendChild(li);
});

nav.appendChild(ul);
document.body.appendChild(nav);

// Creación del menú horizontal
const horizontalMenu = document.createElement('nav');
horizontalMenu.id = 'horizontal-menu';
const horizontalUl = document.createElement('ul');
items.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${item.toLowerCase()}`;
    a.textContent = item;
    li.appendChild(a);
    horizontalUl.appendChild(li);
});
horizontalMenu.appendChild(horizontalUl);
document.body.insertBefore(horizontalMenu, main); // Insertar justo antes del contenido principal

// Funcionalidad para mostrar y ocultar el menú
menuBtn.addEventListener('click', function() {
    const menu = document.getElementById('side-menu');
    if (menu.style.left !== '0px') {
        menu.style.left = '0px';
    } else {
        menu.style.left = '-100%';
    }
});

// Funcionalidad para ocultar el menú al hacer clic fuera de él
document.addEventListener('click', function(event) {
    const menu = document.getElementById('side-menu');
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnMenuBtn = menuBtn.contains(event.target);

    if (!isClickInsideMenu && !isClickOnMenuBtn && menu.style.left === '0px') {
        menu.style.left = '-100%';
    }
});

function displayHome() {
    // Limpiamos el contenido principal
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    // Restauramos el título, párrafo e imagen principales
    const homeTitle = document.createElement('h1');
    homeTitle.textContent = 'Arte y Precisión en Cada Creación Dental';
    main.appendChild(homeTitle);

    const homeParagraph = document.createElement('p');
    homeParagraph.textContent = 'En Unión Dental, combinamos la artesanía tradicional con tecnologías avanzadas para producir restauraciones dentales de la más alta calidad. Desde coronas y puentes hasta prótesis y aparatos ortopédicos, cada pieza es cuidadosamente diseñada y fabricada para satisfacer las necesidades individuales de cada paciente, garantizando una sonrisa perfecta y funcional.';
    main.appendChild(homeParagraph);

    const homeImage = document.createElement('img');
    homeImage.src = 'https://scontent.fgua5-1.fna.fbcdn.net/v/t39.30808-6/365166605_109729702217000_1883612272712863980_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=730e14&_nc_ohc=czV7lSWSH5sAX9kIyTf&_nc_ht=scontent.fgua5-1.fna&oh=00_AfAljwBWL7TP2OvJVu_lGyLM91dd6tDakRI8UQFJyLwC2g&oe=64D4D1E2';
    homeImage.alt = 'Imagen relacionada con servicios dentales';
    main.appendChild(homeImage);

    // Restaurar los cuadrados
    for (let i = 1; i <= 7; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.classList.add(`square-${i}`); // Clase específica para cada cuadrado
        main.appendChild(square);
    }

    const squares = document.querySelectorAll('.square');

    // Agregar el contenido a los cuadrados basado en squaresData
    squaresData.forEach((squareData, index) => {
        // Eliminar todos los hijos del cuadrado antes de agregar nuevo contenido.
        while (squares[index].firstChild) {
            squares[index].removeChild(squares[index].firstChild);
        }

        const h2 = document.createElement('h2');
        h2.textContent = squareData.title;
        squares[index].appendChild(h2);

        if (index !== 6) { // El índice 6 corresponde a square-7
            const img = document.createElement('img');
            img.src = squareData.image;
            squares[index].appendChild(img);
        }

        const desc = document.createElement('p');
        desc.textContent = squareData.description;
        squares[index].appendChild(desc);


    });
}

// Vinculamos la función displayHome() al botón "HOME" y al logo
document.querySelector('a[href="#home"]').addEventListener('click', function() {
    displayHome();
    toggleSlider(true);
    document.getElementById('side-menu').style.left = '-100%'; // Ocultar el menú lateral
});

logoImg.addEventListener('click', function() {
    displayHome();
});

// 1. Función para generar la nueva interfaz de PORTAFOLIO
// Función general para mostrar el contenido de las secciones
function displaySection(titleText, descriptionText) {
    // Limpiamos el contenido principal
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    // Creamos el título y el párrafo
    const h1 = document.createElement('h1');
    h1.textContent = titleText;
    main.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = descriptionText;
    main.appendChild(p);
}

const sideMenuLinks = document.querySelectorAll('#side-menu a');

sideMenuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        const section = link.getAttribute('href').replace('#', '');

        switch (section) {
            case 'home':
                displayHome();
                document.getElementById('side-menu').style.left = '-100%';
                break;
            case 'portafolio':
                displaySection('Nuestro Portafolio', 'Aquí encontrarás una muestra de los productos que ofrece nuestro laboratorio dental.');
                document.getElementById('side-menu').style.left = '-100%';
                break;
            case 'herramientas':
                displaySection('Nuestras herramientas', 'Descripción o información sobre las herramientas que utilizamos.');
                document.getElementById('side-menu').style.left = '-100%';
                break;
            case 'politicas':
                displaySection('Nuestras políticas', ''); // Aquí se puede agregar el contenido para la sección de políticas
                const policies = [
                    { title: "Políticas de Garantía", description: "Descripción detallada sobre las políticas de garantía." },
                    { title: "Políticas de Facturación", description: "Información sobre cómo manejamos la facturación y los pagos." },
                    { title: "Políticas de Calidad", description: "Nuestro compromiso con la calidad y cómo garantizamos el mejor servicio." },
                    { title: "Políticas de Servicio", description: "Todo lo que necesitas saber sobre cómo trabajamos y qué puedes esperar de nuestro servicio." }
                ];
            
                policies.forEach(policy => {
                    const details = document.createElement('details');
                    const summary = document.createElement('summary');
                    summary.textContent = policy.title;
                    details.appendChild(summary);
            
                    const policyDesc = document.createElement('p');
                    policyDesc.textContent = policy.description;
                    details.appendChild(policyDesc);
            
                    main.appendChild(details);
                });
            
                document.getElementById('side-menu').style.left = '-100%'; // Ocultar el menú lateral
                toggleSlider(false);
                break;
            case 'contacto':
                displaySection('Contáctanos', ''); // Aquí se puede agregar el contenido para la sección de contacto
                const mapFrame = document.createElement('iframe');
    mapFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.3536343273854!2d-90.592542!3d14.6316413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a1e29779d265%3A0x90b922a124a85e6c!2sLaboratorio%20Uni%C3%B3n%20Dental!5e0!3m2!1ses-419!2sgt!4v1691364815173!5m2!1ses-419!2sgt";  // Reemplaza con la URL del iframe que copiaste de Google Maps
    mapFrame.width = "280";
    mapFrame.height = "300";
    mapFrame.frameborder = "0";
    mapFrame.style.border = "0";
    main.appendChild(mapFrame);

    // 4. Formulario de contacto
    // Sección de dirección
const addressTitle = document.createElement('h3');
addressTitle.textContent = 'Dirección:';
main.appendChild(addressTitle);

const addressContent = document.createElement('p');
addressContent.textContent = '4A Calle 51-02, Mixco, Cdad. de Guatemala 01057';
main.appendChild(addressContent);

// Sección de teléfono
const phoneTitle = document.createElement('h3');
phoneTitle.textContent = 'Teléfono:';
main.appendChild(phoneTitle);

const phoneContent = document.createElement('p');
phoneContent.textContent = '(502) 5460-2084';
main.appendChild(phoneContent);

// Sección de correo
const emailTitle = document.createElement('h3');
emailTitle.textContent = 'Correo:';
main.appendChild(emailTitle);

const emailContent = document.createElement('p');
emailContent.textContent = 'correo@laboratoriodental.com';  // Reemplaza con el correo real
main.appendChild(emailContent);

// Sección de motivación para escribir
const motivationTitle = document.createElement('h3');
motivationTitle.textContent = '¡No dudes en escribirnos!';
main.appendChild(motivationTitle);

const motivationContent = document.createElement('p');
motivationContent.textContent = 'En Unión Dental, estamos comprometidos con brindarte la mejor atención y resolver todas tus preguntas. Contáctanos y te asesoraremos con la calidez y profesionalismo que nos caracteriza.';
main.appendChild(motivationContent);

// Botón de WhatsApp
const whatsappButton = document.createElement('a');
whatsappButton.href = 'https://wa.me/50254602084';  // Número de teléfono después de /me/
whatsappButton.textContent = ' Escríbenos por WhatsApp';  // Espacio agregado para separar el ícono del texto
whatsappButton.classList.add('whatsapp-btn');  // Clase para darle estilos CSS
whatsappButton.style.display = 'inline-block'; 
// Ícono de WhatsApp
const whatsappIcon = document.createElement('span');
whatsappIcon.classList.add('whatsapp-icon');
whatsappButton.prepend(whatsappIcon);  // Agregar el ícono antes del texto

main.appendChild(whatsappButton);
document.getElementById('side-menu').style.left = '-100%';
;
                break;
        }
    });
});

// Vinculamos la función a los botones correspondientes
document.querySelector('a[href="#portafolio"]').addEventListener('click', function() {
    displaySection('Nuestro Portafolio', 'Aquí encontrarás una muestra de los productos que ofrece nuestro laboratorio dental.');
    toggleSlider(true);
    document.getElementById('side-menu').style.left = '-100%';
});

document.querySelector('a[href="#herramientas"]').addEventListener('click', function() {
    displaySection('Nuestras herramientas', 'Descripción o información sobre las herramientas que utilizamos.');
    toggleSlider(true);
    document.getElementById('side-menu').style.left = '-100%';
});

document.querySelector('a[href="#politicas"]').addEventListener('click', function() {
    displaySection('Nuestras políticas', '');  // Limpiamos la descripción previa para añadir las políticas detalladas

    const policies = [
        { title: "Políticas de Garantía", description: "Descripción detallada sobre las políticas de garantía." },
        { title: "Políticas de Facturación", description: "Información sobre cómo manejamos la facturación y los pagos." },
        { title: "Políticas de Calidad", description: "Nuestro compromiso con la calidad y cómo garantizamos el mejor servicio." },
        { title: "Políticas de Servicio", description: "Todo lo que necesitas saber sobre cómo trabajamos y qué puedes esperar de nuestro servicio." }
    ];

    policies.forEach(policy => {
        const details = document.createElement('details');
        const summary = document.createElement('summary');
        summary.textContent = policy.title;
        details.appendChild(summary);

        const policyDesc = document.createElement('p');
        policyDesc.textContent = policy.description;
        details.appendChild(policyDesc);

        main.appendChild(details);
    });

    document.getElementById('side-menu').style.left = '-100%'; // Ocultar el menú lateral
    toggleSlider(false);
});

document.querySelector('a[href="#contacto"]').addEventListener('click', function() {
    displaySection('Contáctanos', ''); // Limpiamos la descripción previa para agregar el mapa y el formulario

    const mapFrame = document.createElement('iframe');
    mapFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.3536343273854!2d-90.592542!3d14.6316413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a1e29779d265%3A0x90b922a124a85e6c!2sLaboratorio%20Uni%C3%B3n%20Dental!5e0!3m2!1ses-419!2sgt!4v1691364815173!5m2!1ses-419!2sgt";  // Reemplaza con la URL del iframe que copiaste de Google Maps
    mapFrame.width = "280";
    mapFrame.height = "300";
    mapFrame.frameborder = "0";
    mapFrame.style.border = "0";
    main.appendChild(mapFrame);

    // 4. Formulario de contacto
      // Sección de dirección
const addressTitle = document.createElement('h3');
addressTitle.textContent = 'Dirección:';
main.appendChild(addressTitle);

const addressContent = document.createElement('p');
addressContent.textContent = '4A Calle 51-02, Mixco, Cdad. de Guatemala 01057';
main.appendChild(addressContent);

// Sección de teléfono
const phoneTitle = document.createElement('h3');
phoneTitle.textContent = 'Teléfono:';
main.appendChild(phoneTitle);

const phoneContent = document.createElement('p');
phoneContent.textContent = '(502) 5460-2084';
main.appendChild(phoneContent);

// Sección de correo
const emailTitle = document.createElement('h3');
emailTitle.textContent = 'Correo:';
main.appendChild(emailTitle);

const emailContent = document.createElement('p');
emailContent.textContent = 'correo@laboratoriodental.com';  // Reemplaza con el correo real
main.appendChild(emailContent);

// Sección de motivación para escribir
const motivationTitle = document.createElement('h3');
motivationTitle.textContent = '¡No dudes en escribirnos!';
main.appendChild(motivationTitle);

const motivationContent = document.createElement('p');
motivationContent.textContent = 'En Unión Dental, estamos comprometidos con brindarte la mejor atención y resolver todas tus preguntas. Contáctanos y te asesoraremos con la calidez y profesionalismo que nos caracteriza.';
main.appendChild(motivationContent);

// Botón de WhatsApp
const whatsappButton = document.createElement('a');
whatsappButton.href = 'https://wa.me/50254602084';  // Número de teléfono después de /me/
whatsappButton.textContent = ' Escríbenos por WhatsApp';  // Espacio agregado para separar el ícono del texto
whatsappButton.classList.add('whatsapp-btn');  // Clase para darle estilos CSS
whatsappButton.style.display = 'inline-block'; 
// Ícono de WhatsApp
const whatsappIcon = document.createElement('span');
whatsappIcon.classList.add('whatsapp-icon');
whatsappButton.prepend(whatsappIcon);  // Agregar el ícono antes del texto

main.appendChild(whatsappButton);
document.getElementById('side-menu').style.left = '-100%';
;
toggleSlider(false);
});

displayHome()
createSlider();