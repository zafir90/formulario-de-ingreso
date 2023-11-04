document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault() //Prevenir la accion que viene por defecto, si no se le pone esto, cuando le den a "enviar", se borra toda la info

    //Validar Nombre
    let entradaNombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError')

    if (entradaNombre.value.trim() === '') {  //Trim es para borrar los espacios
        errorNombre.textContent = 'Por favor, introduce tu nombre'
        errorNombre.classList.add('error-message')
    } else {
        errorNombre.textContent = ''
        errorNombre.classList.remove('error-message')
    }

    //Validar correo electronico

    let emailEntrada = document.getElementById('email')
    let emailError = document.getElementById('emailError')
    let emailPattern = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; // Patron de validacion

    if (!emailPattern.test(emailEntrada.value)) {
        emailError.textContent = 'Por favor, introduce un mail valido'
        emailError.classList.add('error-message')
    } else {
        emailError.textContent = ''
        emailError.classList.remove('error-message')
    }

    //Validar contraseña

    let contrasenaEntrada = document.getElementById('password')
    let contrasenaError = document.getElementById('passwordError')
    let contrasenaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/; // Patron de validacion

    if (!contrasenaPattern.test(contrasenaEntrada.value)) {
        contrasenaError.textContent = 'La contraseña debe tener al menos 8 caracteres, numeros, mayusculas, minusculas y caracteres especiales'
        contrasenaError.classList.add('error-message')
    } else {
        contrasenaError.textContent = ''
        contrasenaError.classList.remove('error-message')
    }

    //Si todos los campos son validos, enviar el formulario

    if (!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent) {

        alert('El formulario se ha enviado con exito')
        document.getElementById('formulario').reset();
    }
})

// Función para alternar la visibilidad de la contraseña

const passwordInput = document.getElementById("password");
const Icon = document.querySelector(".fas");
Icon.addEventListener('click', Event => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        Icon.classList.remove('fa-eye');
        Icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = "password"
        Icon.classList.add('fa-eye');
        Icon.classList.remove('fa-eye-slash');
    }
})
