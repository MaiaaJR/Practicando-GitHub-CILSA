document.addEventListener('DOMContentLoaded', (event) => {
    var formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (formulario.checkValidity() === false) {
            formulario.classList.add('was-validated');
            return;
        }

        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var direccionEmail = document.getElementById('direccionEmail').value;

        if (!/^[a-zA-Z ]+$/.test(nombre) || !/^[a-zA-Z ]+$/.test(apellido)) {
            alert('Ingresar solo letras y espacios en el caso de agregar más de un nombre');
            return;
        }

        if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(direccionEmail)) {
            alert('Formato no válido. Ejemplo de formato válido: juan@mmm.com');
            return;
        }

        formulario.submit();
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
