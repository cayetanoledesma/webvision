
function generarContenidoHTML(claseCard) {
    switch (claseCard) {
        case 'one-page-card':
            return `
                <h1 data-aos="fade-left">One Page</h1>
                <ul data-aos="fade-left">
                    <li data-aos="fade-left">Descubre la eficiencia de una One Page: navegación fluida, diseño visual impactante, optimización para dispositivos móviles y velocidad de carga mejorada. Convierte visitantes en clientes con una página web única y memorable, diseñada para captar y mantener la atención.</li>
                    
                </ul>`;
        case 'sitio-web-card':
            return `
                <h1 data-aos="fade-left">Sitio Web</h1>
                <ul data-aos="fade-left">
                    <li>Diseño responsivo</li>
                    <li>Hasta 6 secciones</li>
                    <li>2 sliders animados</li>
                    <li>Dominio en .com o .es</li>
                    <li>Hosting Gratuito</li>
                    <li>Correo Profesional</li>
                    <li>Vinculación a Redes Sociales</li>
                </ul>`;
        case 'tienda-en-linea-card':
            return `
                <h1 data-aos="fade-left">Tienda en Línea</h1>
                <ul data-aos="fade-left">
                    <li>Creación y diseño de la tienda</li>
                    <li>Capacitación para administrar la tienda</li>
                    <li>Agregar productos, cambio de precios, fotos</li>
                    <li>Dominio en .com o .es</li>
                    <li>Capacidad de más de 1000 productos</li>
                    <li>Correos electrónicos</li>
                    <li>Vinculación a Redes Sociales</li>
                </ul>`;
        case 'diseno-grafico-card':
            return `
                <h1 data-aos="fade-left">Diseño Gráfico</h1>
                <ul data-aos="fade-left">
                    <li>Banners publicitarios</li>
                    <li>Cartas de presentación para empresa</li>
                    <li>Mejoramos tu logotipo</li>
                    <li>Imágenes para Facebook e Instagram</li>
                    <li>Tarjetas de presentación</li>
                    <li>Tarjetas de presentación digitales con QR</li>
                </ul>`;
        case 'marketing-digital-card':
            return `
                <h1 data-aos="fade-left">Marketing Digital</h1>
                <ul data-aos="fade-left">
                    <li>Optimización de motores de búsqueda (SEO)</li>
                    <li>Cartas de presentación para empresa</li>
                    <li>Marketing de contenido</li>
                    <li>Redes sociales</li>
                    <li>Email marketing</li>
                    <li>Publicidad en línea</li>
                    <li>Optimización de la tasa de conversión (CRO)</li>
                    <li>Análisis y seguimiento de datos</li>
                </ul>`;
        default:
            return 'Contenido por defecto...';
    }
}

function mostrarTexto(id, claseCard, rutaImagen) {
    // Oculta todos los textos
    $('.text-content').hide();

    // Remueve la clase activa de todos los botones
    $('.btn').removeClass('btn-active');

    // Agrega la clase activa al botón presionado
    $(event.target).addClass('btn-active');

    // Crea un nuevo contenido dinámico con Bootstrap clases
    var contenido = $('<div class="row ' + claseCard + '">');

    var texto = $('<div class="col-lg-6 col-md-12  card-text " data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">');
    texto.append(generarContenidoHTML(claseCard));

    var imagenContainer = $('<div class="col-lg-6 col-md-12  card-image-container" data-aos="zoom-in-left">');
    var imagen = $('<img class="card-image img-fluid" src="' + rutaImagen + '.svg" alt="Imagen">');
    imagenContainer.append(imagen);

    contenido.append(texto);
    contenido.append(imagenContainer);

    // Muestra el contenido dinámico en el contenedor correspondiente
    $('#' + id).html(contenido).show();
}


window.onload = function() {
        // Puedes cambiar los valores según el botón que desees activar por defecto
        mostrarTexto('onePageText', 'one-page-card', 'img/content-structure-animate');
    };

   
    function showCustomTooltip() {
        document.getElementById('custom-tooltip').style.visibility = 'visible';
    }

    function hideCustomTooltip() {
        document.getElementById('custom-tooltip').style.visibility = 'hidden';
    }

    let submenuTimer;

function mostrarSubMenu() {
    clearTimeout(submenuTimer); // Cancela el temporizador si ya está en funcionamiento
    document.getElementById("submenu").style.display = "block";
}

function ocultarSubMenu() {
    // Configura un temporizador para ocultar el submenu después de un breve retraso
    submenuTimer = setTimeout(() => {
        document.getElementById("submenu").style.display = "none";
    }, 500); // Ajusta el tiempo de espera aquí (en milisegundos)
}

function cancelarOcultarSubMenu() {
    clearTimeout(submenuTimer); // Cancela el temporizador para que no se oculte el submenu
}




let submenuTimer1;

function mostrarSubMenu1() {
    clearTimeout(submenuTimer1); // Cancela el temporizador si ya está en funcionamiento
    document.getElementById("submenu1").style.display = "block";
}

function ocultarSubMenu1() {
    // Configura un temporizador para ocultar el submenu después de un breve retraso
    submenuTimer1 = setTimeout(() => {
        document.getElementById("submenu1").style.display = "none";
    }, 500); // Ajusta el tiempo de espera aquí (en milisegundos)
}

function cancelarOcultarSubMenu1() {
    clearTimeout(submenuTimer1); // Cancela el temporizador para que no se oculte el submenu
}










window.addEventListener('scroll', function() {
    var header = document.querySelector('.contenedor-total');
    var scrollPosition = window.scrollY;
    var halfPage = document.documentElement.scrollHeight / 8; // Calcula la mitad de la página

    // Cambia la clase solo cuando nos desplazamos más allá de la mitad de la página
    header.classList.toggle('cambiar-fondo', scrollPosition > halfPage);
});

$(document).ready(function() {
    $(window).on('scroll', function() {
        var windowHeight = $(window).height();
        var scrollPos = $(window).scrollTop();

        $('.subrayado').each(function() {
            var offsetTop = $(this).offset().top;
            if (scrollPos > offsetTop - windowHeight + 100) {
                $(this).addClass('show');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const questions = document.querySelectorAll(".question");
  questions.forEach(function(question) {
    question.addEventListener("click", function() {
      this.classList.toggle("active");
      const answer = this.nextElementSibling;
      answer.classList.toggle("active");
    });
  });
});















window.addEventListener('scroll', function() {
    var header = document.querySelector('.contenedor-total');
    var scrollPosition = window.scrollY;
    var halfPage = document.documentElement.scrollHeight / 8; // Calcula la mitad de la página

    // Cambia la clase solo cuando nos desplazamos más allá de la mitad de la página
    header.classList.toggle('cambiar-fondo', scrollPosition > halfPage);
});

$(document).ready(function() {
    $(window).on('scroll', function() {
        var windowHeight = $(window).height();
        var scrollPos = $(window).scrollTop();

        $('.subrayado').each(function() {
            var offsetTop = $(this).offset().top;
            if (scrollPos > offsetTop - windowHeight + 100) {
                $(this).addClass('show');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const questions = document.querySelectorAll(".question");
  questions.forEach(function(question) {
    question.addEventListener("click", function() {
      this.classList.toggle("active");
      const answer = this.nextElementSibling;
      answer.classList.toggle("active");
    });
  });
});

window.addEventListener('scroll', function() {
    var tarjetas = document.querySelectorAll('.tarjetaMantenimiento');
    tarjetas.forEach(function(tarjeta) {
        if (isElementInViewport(tarjeta)) {
            tarjeta.classList.add('mostrar');
        }
    });
});

// Función para verificar si un elemento está en el área visible
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


 // Obtenemos las referencias a las imágenes
 var imagen1 = document.getElementById('imagen1');
 var imagen2 = document.getElementById('imagen2');
 var imagen3 = document.getElementById('imagen3');
 var imagen4 = document.getElementById('imagen4');
 var imagen5 = document.getElementById('imagen5');

 // Mostramos la primera imagen
 imagen1.style.display = 'block';

 // Función para alternar las imágenes cada 3 segundos
 setInterval(function() {
    if (imagen1.style.display === 'block') {
        imagen1.style.display = 'none';
        imagen2.style.display = 'block';
    } else if (imagen2.style.display === 'block') {
        imagen2.style.display = 'none';
        imagen3.style.display = 'block';
    } else if (imagen3.style.display === 'block') {
        imagen3.style.display = 'none';
        imagen4.style.display = 'block';
    } else if (imagen4.style.display === 'block') {
        imagen4.style.display = 'none';
        imagen5.style.display = 'block';
    } else {
        imagen5.style.display = 'none';
        imagen1.style.display = 'block';
    }
}, 3000); // Cambiar cada 3 segundos (3000 milisegundos)


// Inicializar AOS con configuración para animaciones al aparecer y desaparecer
AOS.init({
    duration: 1000, // Duración del efecto en milisegundos
    once: false, // Permitir que las animaciones ocurran más de una vez
});
