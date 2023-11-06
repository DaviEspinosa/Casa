const cadastrologinBtn = document.getElementById('cadastro-login');
const greenWave = document.getElementById('green-wave');
const login = document.getElementById('login');
const cadastro = document.getElementById('cadastro');
const imgCachorro = document.getElementById('img-cachorro');
const textCadastro = document.getElementById('conviteTxt');

 cadastrologinBtn.addEventListener('click', ()  => {

    /*Utilizando toggle para alternat entre as classes */
    cadastrologinBtn.classList.toggle('cadastrar');
    cadastrologinBtn.classList.toggle('logar');

    // cadastrologinBtn.style.display = 'none';
    /*If e Else para alternar entre as classes */
    if (cadastrologinBtn.classList.contains('cadastrar')) {
        cadastrologinBtn.innerHTML = 'Cadastre-se';

    }
    else{
        cadastrologinBtn.innerHTML = 'Login';
        // login.style.opacity = 0;
         login.style.transform = 'translateX(-5%)';
        greenWave.style.width = '140%'
        greenWave.style.transform = 'translateX(0%)'
        greenWave.style.backgroundImage = 'linear-gradient( 45deg,rgb(30, 117, 74)40%), transparent, rgb(33, 165, 77)50%;';
        textCadastro.style.display = 'none';


        greenWave.addEventListener('transitionend', () =>   {
            // Quando a transição de "green-wave" terminar...
            login.style.display = 'none';
            imgCachorro.style.display='block';
            cadastrologinBtn.style.float = "right";
    
            // cadastrologinBtn.style.display = "block";
            cadastro.style.display = 'block';
            // cadastro.style.opacity = 1;
            
        });

    }


})  