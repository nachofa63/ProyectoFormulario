function validarFormulario()
{
    let nombre = document.getElementById("nombre").value;
    let apellido1 = document.getElementById("apellido1").value;
    let apellido2 = document.getElementById("apellido2").value;
    let fecha = document.getElementById("fecha").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;

    let mensaje = document.getElementById("mensaje");

    mensaje.style.color = "red";

    // Campos obligatorios
    if(nombre == "" || apellido1 == "" || fecha == "" || email == "" || password == "" || password2 == "")
    {
        mensaje.innerHTML = "Error: Los campos obligatorios están vacíos";
        return;
    }

    // Validar email
    if(!validarEmail(email))
    {
        mensaje.innerHTML = "Error: Email incorrecto";
        return;
    }

    // Validar fecha
    if(!validarFecha(fecha))
    {
        mensaje.innerHTML = "Error: Fecha incorrecta o es menor de edad";
        return;
    }

    // Validar contraseñas
    if(password.length < 8)
    {
        mensaje.innerHTML = "Error: La contraseña debe tener mínimo 8 caracteres";
        return;
    }

    if(password != password2)
    {
        mensaje.innerHTML = "Error: Las contraseñas no coinciden";
        return;
    }

    // Correcto
    mensaje.style.color = "green";
    mensaje.innerHTML = "Se ha creado correctamente la cuenta de " + nombre + " " + apellido1;

    document.body.style.backgroundColor = "#90EE90";
}


function validarEmail(email)
{
    let patron = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return patron.test(email);
}


function validarFecha(fecha)
{
    let hoy = new Date();
    let fechaNacimiento = new Date(fecha);

    if(fechaNacimiento > hoy)
    {
        return false;
    }

    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    if(edad < 18)
    {
        return false;
    }

    return true;
}