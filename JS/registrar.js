
$(document).ready(function () {
    $("#error").hide();
    $("#errorContrasena").hide();
    $("#errorEmail").hide();

    // Validar email con regex
    function validarEmail(email) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);

    }
    if (window.location.href.indexOf("error=1") > -1) {
        $("#error").html("Usuario o contraseña incorrectos").show();
    }
    $("#formulario").submit(function (event) {
        let msg = "";

        // Contraseña vacía
        if ($("#contrasena").val().trim().length == 0) {
            msg = "Contraseña inválida";
            $("#errorContrasena").html(msg).show();

        }

        // Email vacío o inválido
        let email = $("#email").val().trim();
        if (email.length == 0) {
            msg += " El email está en blanco.";
            $("#errorEmail").html("El email está en blanco").show();
        } else if (!validarEmail(email)) {
            msg += " Requiere tener formato Email con @.";
            $("#errorEmail").html("Requiere tener formato Email con @").show();
        } else {
            $("#errorEmail").hide();
        }
        if (msg.length > 0) {
            event.preventDefault();
            $("#error").html(msg).show();
        } else {
            $("#error").hide();
        }


    });
});