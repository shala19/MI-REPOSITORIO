let currentIndex = 0;

// Función para abrir el panel
function abrirPanel() {
    document.getElementById("sidebar").style.left = "0"; // Mueve el panel hacia la vista
}

// Función para cerrar el panel
function cerrarPanel() {
    document.getElementById("sidebar").style.left = "-100%"; // Oculta el panel fuera de la vista
}


function abrir() {
    document.querySelector('.sidebar').style.left = '0';
}

function cerrar() {
    document.querySelector('.sidebar').style.left = '-100%';
}

const modeToggle = document.getElementById('mode-toggle');
const modeIcon = document.getElementById('mode-icon');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Cambia el ícono del botón dependiendo del modo
    if (body.classList.contains('dark-mode')) {
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
        changeSignalImage(true);
        changeImage(true);
        changeIcon(true);
        changeIconImagen(true);
    } else {
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
        changeSignalImage(false);
        changeImage(false);
        changeIcon(false);
        changeIconImagen(false);
    }
});

function changeSignalImage(isDarkMode) {
    const señales = document.querySelectorAll('.señal');
    const señale = document.querySelectorAll('.señal2');
    señales.forEach(señal => {
        señal.src = isDarkMode ? 'img/Vector mode 1.png' : 'img/Vector 1.png';
    });

    // Cambiar imágenes para elementos con clase 'señal2'
    señale.forEach(señal => {
        señal.src = isDarkMode ? 'img/Vector mode 1.png' : 'img/Vector 1.png';
    });
}

function changeImage(isDarkMode) {
    const habilidades = document.querySelectorAll('.skills-image');
    habilidades.forEach(skill => {
        skill.src = isDarkMode ? 'img/Frame 1 mode .png' : 'img/Frame 1.png';
    });
}

function changeIcon(isDarkMode) {
    const habilidadicono = document.querySelectorAll('.skill-icon');
    habilidadicono.forEach(skill => {
        skill.src = isDarkMode ? 'img/rombo 2.png' : 'img/Vector 2.png';
    });
}


function changeIconImagen(isDarkMode) {
    // Objeto con los id de los iconos y las imágenes correspondientes para cada modo
    const iconos = {
        'libro': {
            light: 'img/libro.png',
            dark: 'img/libro 1.png'
        },
        'balon': {
            light: 'img/football.png',
            dark: 'img/football 1.png'
        },
        'audifonos': {
            light: 'img/headphones.png',
            dark: 'img/headphones 1.png'
        },
        'lapiz': {
            light: 'img/lapiz-de-color.png',
            dark: 'img/lapiz-de-color 1.png'
        },
        'cocinero': {
            light: 'img/cocinero.png',
            dark: 'img/cocinero 1.png'
        },
        'camara': {
            light: 'img/camara.png',
            dark: 'img/camara 1.png'
        }
    };

    // Recorrer cada id y cambiar la imagen correspondiente
    for (const id in iconos) {
        const icono = document.getElementById(id); // Seleccionar el icono por id
        if (icono) {
            icono.src = isDarkMode ? iconos[id].dark : iconos[id].light;
        }
    }
}







