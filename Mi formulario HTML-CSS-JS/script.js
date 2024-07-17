document.addEventListener('DOMContentLoaded', (event) => {
    var formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var direccionEmail = document.getElementById('direccionEmail').value;

        // Validaciones: 
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

    document.getElementById('fondoClaro').addEventListener('click', aplicaEstiloUno);
    document.getElementById('fondoOscuro').addEventListener('click', aplicaEstiloAltoContraste);

    function aplicaEstiloUno() {
        var formContainer = document.getElementById('form-container');
        formContainer.classList.remove('alto-contraste');
        formContainer.classList.add('estilo-uno');
    }

    function aplicaEstiloAltoContraste() {
        var formContainer = document.getElementById('form-container');
        formContainer.classList.remove('estilo-uno');
        formContainer.classList.add('alto-contraste');
    }
});
