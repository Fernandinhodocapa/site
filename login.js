let botao = document.getElementById('togglePass');
let senha = document.getElementById('password');

botao.addEventListener('click', function() {
    if (senha.type === 'password') {
        senha.type = 'text';
        botao.textContent = '👁️';
    } else {
        senha.type = 'password';
        botao.textContent = '🙈';
    }
});

let formulario = document.getElementById('loginform');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let senhaValor = document.getElementById('password').value;

    if (email === '' || senhaValor === '') {
        alert('Preencha todos os campos!');
    } else {
        alert('Login enviado!\nE-mail: ' + email);
    }
});
