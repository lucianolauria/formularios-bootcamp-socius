function alertaRegistro(nombre) {
    alert(`Te has registrado con éxito. Bienvenido ${nombre}!`);
}

function registrarUsuario() {
    let nombre = document.getElementById('nombre').value.trim();
    let apellido = document.getElementById('apellido').value.trim();
    let usuario = document.getElementById('usuario').value.trim();
    let password = document.getElementById('password').value.trim();
    let repeatPassword = document.getElementById('repeatPassword').value.trim();
    let telefono = document.getElementById('telefono').value.trim();
    let fechaNac = document.getElementById('fechaNac').value;
    let nacionalidad = document.getElementById('nacionalidad').value;
    let genero = document.querySelector('input[name="genero"]:checked');
    let check = document.getElementById('check');

    if (nombre !== '' && apellido !== '' && usuario !== '' && password !== '' && repeatPassword !== '' && telefono !== '' && fechaNac !== '' && nacionalidad !== '' && genero !== null && check.checked) {
        if (password === repeatPassword) {
            alertaRegistro(nombre);
        } else {
            alert('Las contraseñas no coinciden. Por favor, verifique.');
        }
    } else {
        alert('Por favor, complete todos los campos del formulario.');
    }
}

function alertaInicioSesion(usuario) {
    alert(`Has iniciado sesión correctamente. Bienvenido ${usuario}!`);
}

function inicioDeSesion() {
    let usuario = document.getElementById('usuario').value.trim();
    let password = document.getElementById('password').value.trim();

    if (usuario !== '' && password !== '') {
            alertaInicioSesion(usuario);
    } else {
        alert('Por favor, complete todos los campos.');
    }
}
