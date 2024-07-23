document.addEventListener('DOMContentLoaded', (event) => {
    var formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var direccionEmail = document.getElementById('direccionEmail').value;

        if (!/^[a-zA-Z ]+$/.test(nombre)) {
            alert('Ingresar solo letras y espacios en el campo de nombre.');
            isValid = false;
        }

        if (!/^[a-zA-Z ]+$/.test(apellido)) {
            alert('Ingresar solo letras y espacios en el campo de apellido.');
            isValid = false;
        }

        if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(direccionEmail)) {
            alert('Formato de correo no válido. Ejemplo de formato válido: juan@mmm.com');
            isValid = false;
        }

        if (isValid) {
            if (formulario.checkValidity() === false) {
                formulario.classList.add('was-validated');
                return;
            }

            formulario.submit();
        } else {
            formulario.classList.add('was-validated');
        }
    });

    document.getElementById('fondoClaro').addEventListener('click', function() {
        document.body.style.backgroundColor = 'white'; 
        document.body.style.color = 'black'; 
    });

    document.getElementById('fondoOscuro').addEventListener('click', function() {
        document.body.style.backgroundColor = 'black'; 
        document.body.style.color = 'white'; 
    });
});
