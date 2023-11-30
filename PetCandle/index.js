// --------====EVENTO BOTAO NOSSA MISSAO E NOSSA VISAO====-------
const BtnMissao = document.getElementById('btn-Missao');
const BtnVisao = document.getElementById('btn-Visao');
const textMissao = document.querySelector('.text-Missao');
const textVisao = document.querySelector('.text-Visao');

BtnMissao.addEventListener("click", ()=>{
    BtnMissao.style.backgroundColor = 'rgb(22, 157, 22)';
    BtnMissao.style.color = 'white'; 
    BtnMissao.style.padding = '10px';
    BtnMissao.style.fontSize = '12px';

    BtnVisao.style.backgroundColor = 'rgb(193, 193, 193)';
    BtnVisao.style.color = 'black'; 
    BtnVisao.style.padding = '7px';
    BtnVisao.style.fontSize = '10px';

    textVisao.style.display = 'none';
    textMissao.style.display = 'block';

})

BtnVisao.addEventListener("click", ()=>{

    BtnVisao.style.backgroundColor = 'rgb(22, 157, 22)';
    BtnVisao.style.color = 'white'; 
    BtnVisao.style.padding = '10px';
    BtnVisao.style.fontSize = '12px';

    BtnMissao.style.backgroundColor = 'rgb(193, 193, 193)';
    BtnMissao.style.color = 'black';
    BtnMissao.style.padding = '7px';
    BtnMissao.style.fontSize = '10px';

    textVisao.style.display = 'block';
    textMissao.style.display = 'none';
})