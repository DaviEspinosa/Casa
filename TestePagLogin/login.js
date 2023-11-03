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
        cadastro.style.display = 'block';
        // login.style.opacity = 0;
        login.style.transform = 'translateX(-100%)';
        greenWave.style.width = '100%'

        greenWave.addEventListener('transitionend', () =>   {
            // Quando a transição de "green-wave" terminar, oculte o formulário de login
            login.style.display = 'none';
        });

    }


})  