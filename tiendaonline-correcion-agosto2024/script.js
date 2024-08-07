/*
CAMBIAR MODOS DE VISTA PARA EL USUARIO:
*/

const toggleButton = document.getElementById('toggleMode');

toggleButton.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme');
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }
});

/*
RESALTAR CAMPOS DEL FORM AL HACER FOCO:
*/

document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.form-control');

    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.classList.add('active');
        });

        input.addEventListener('blur', function() {
            this.classList.remove('active');
        });
    });
});


/*
VALIDACIÓN DEL FORM:
*/

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById('contactForm');
    const mensajeError = document.getElementById('mensajeError');

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault(); 

        let name = document.getElementById('name').value;
        let phone = document.getElementById('phone').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        // Validación de los campos
        if (name.trim() === '') {
            mensajeError.innerText = 'El campo nombre no puede estar vacío.';
            return;
        }

        if (phone.trim() === '') {
            mensajeError.innerText = 'El campo teléfono no puede estar vacío.';
            return;
        }

        if (email.trim() === '') {
            mensajeError.innerText = 'El campo email no puede estar vacío.';
            return;
        }

        if (!validarEmail(email)) {
            mensajeError.innerText = 'El formato del email no es válido.';
            return;
        }

        if (message.trim() === '') {
            mensajeError.innerText = 'El campo de mensaje no puede estar vacío.';
            return;
        }

        mensajeError.innerText = '';
        alert('Formulario enviado con éxito!');
        formulario.submit(); 
    });

    function validarEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});



