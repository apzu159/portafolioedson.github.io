let menuVisible = false;
// Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    // oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function () {
    efectoHabilidades();
};

// ANIMACIÓN DE ESCRITURA Y BORRADO (AGREGADO)
const textElement = document.querySelector("h1"); // Selecciona el h1
const textContent = "EDSON QUISPE"; // El texto que se va a escribir y borrar
let index = 0;
let isDeleting = false;

// Función para simular el efecto de escritura y borrado
function typeWriter() {
    if (isDeleting) {
        // Borra el texto
        textElement.textContent = textContent.substring(0, index--);
    } else {
        // Escribe el texto
        textElement.textContent = textContent.substring(0, index++);
    }

    // Añade o quita el cursor dependiendo de si estamos escribiendo o borrando
    if (isDeleting) {
        textElement.innerHTML = textElement.textContent + '<span class="cursor">|</span>';
    } else {
        textElement.innerHTML = textElement.textContent + '<span class="cursor">|</span>';
    }

    if (!isDeleting && index === textContent.length) {
        // Espera un segundo después de escribir todo el texto, luego empieza a borrar
        setTimeout(() => {
            isDeleting = true;
        }, 1000);
    } else if (isDeleting && index === 0) {
        // Vuelve a escribir el texto después de borrar
        isDeleting = false;
        setTimeout(typeWriter, 500);
        return;
    }

    // Controla la velocidad del efecto de escritura y borrado
    setTimeout(typeWriter, isDeleting ? 100 : 200); // 100ms para borrar, 200ms para escribir
}

// Inicia la animación
typeWriter();
