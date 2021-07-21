function IniciarSesion()
{
    credencial_username = document.getElementById("user").value;
    credencial_password = document.getElementById("pass").value;

    if(credencial_username == "1" && credencial_password == "1")
    {
        alert("Iniciaste sesion correctamente");
        cambiar2();
    }
    else
    {
        alert("Usuario/Contraseña incorrecto(s)!!!!!!!!!!!");
    }
}

function cambiar()
{  
    window.location.replace('C:/Users/Nicolas/Desktop/clase20-04/Frontend/admin.html');
}

function cambiar2()
{
    window.location.href = './admin.html';
}