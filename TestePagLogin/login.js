const cadastrologin = document.getElementById('cadastro-login');
const greenWave = document.getElementById('green-wave');
const login = document.getElementById('login');
const cadastro = document.getElementById('cadastro');

 cadastrologin.addEventListener('click', ()  => {

    /*Utilizando toggle para alternat entre as classes */
    cadastrologin.classList.toggle('cadastrar');
    cadastrologin.classList.toggle('logar');

    /*If e Else para alternar entre as classes */
    if (cadastrologin.classList.contains('cadastrar')) {
        cadastrologin.innerHTML = 'Cadastre-se';
    }
    else{
        cadastrologin.innerHTML = 'Login';
    }

    cadastro.style.display = 'block';
    login.style.display = 'none';
    greenWave.style.width = '100%'

})