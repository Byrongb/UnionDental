// Creando el header
const header = document.createElement('header');

const menuBtn = document.createElement('button');
menuBtn.id = 'menu-btn';
menuBtn.innerHTML = '&#9776;';
header.appendChild(menuBtn);

const logoImg = document.createElement('img');
logoImg.id = 'logo';
logoImg.src = 'https://o.remove.bg/downloads/3db5d2f4-4d98-4e49-948b-c9f35354d563/352008352_1329804570903835_4932891701089628596_n-removebg-preview.png';
logoImg.alt = 'Logo del laboratorio dental';
header.appendChild(logoImg);

document.body.appendChild(header);

// Creando el contenido principal
const main = document.createElement('main');

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
const items = ['PORTAFOLIO', 'HERRAMIENTAS', 'POLITICAS', 'CONTACTO'];
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

// Agregando los 8 cuadrados debajo de la imagen
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