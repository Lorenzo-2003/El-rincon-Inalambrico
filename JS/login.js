const email = document.getElementById('email').value.trim;
const password = document.getElementById('password').value.trim;

class usuario{
    constructor(emailUser, passwordUser){
        this.email = 'Lor@gmail.com',
        this.password = 'jokoko'
    }
}

if(email === usuario.email && password === usuario.password){
    alert('Inicio de sesion exitoso');
    window.location.href = 'menu2.html';
}