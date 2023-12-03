// --------====EVENTO BOTAO NOSSA MISSAO E NOSSA VISAO====-------
const BtnMissao = document.getElementById('btn-Missao');
const BtnVisao = document.getElementById('btn-Visao');
const textMissao = document.querySelector('.text-Missao');
const textVisao = document.querySelector('.text-Visao');
const DivNossoAlvo = document.querySelector('.Nossa-Missao-Visao');

BtnMissao.addEventListener("click", ()=>{

    DivNossoAlvo.style.backgroundColor = 'rgb(233, 233, 233)';

    BtnMissao.style.backgroundColor = 'rgb(22, 157, 22)';
    BtnMissao.style.padding = '10px 40px 10px 40px';
    BtnMissao.style.fontSize = '12px';

    BtnVisao.style.padding = '7px';
    BtnVisao.style.fontSize = '10px';

    textVisao.style.display = 'none';
    textMissao.style.display = 'block';

})

BtnVisao.addEventListener("click", ()=>{

    DivNossoAlvo.style.backgroundColor = 'rgb(18, 78, 41)'

    BtnVisao.style.backgroundColor = '#ff8e15';
    BtnVisao.style.padding = '10px 40px 10px 40px';
    BtnVisao.style.fontSize = '12px';

    BtnMissao.style.padding = '7px';
    BtnMissao.style.fontSize = '10px';

    textVisao.style.display = 'block';
    textMissao.style.display= 'none';
})

//----------=========CARROSSEL===========--------
var prevBtn = document.getElementById('prevItem');
var nextBtn = document.getElementById('nextItem');
var slide = document.getElementById('card-slide');
let currentPosition = 0;
function moveSlide(direction) {
  const cardWidth = 200; // 200px card width
  currentPosition += direction * cardWidth;
  slide.style.transform = `translateX(${-currentPosition}px)`;
}
prevBtn.addEventListener('click', () => {
  moveSlide(1); // Move para a direita
});
nextBtn.addEventListener('click', () => {
  moveSlide(-1); // Move para a esquerda
});

var prevBtn2 = document.getElementById('prevItem2');
var nextBtn2 = document.getElementById('nextItem2');
var slide2 = document.getElementById('card-slide2');
function moveSlide2(direction) {

  var cardWidth = 200; // 200px card width
  currentPosition += direction * cardWidth;
  slide2.style.transform = `translateX(${-currentPosition}px)`;
}

prevBtn2.addEventListener('click', () => {
  moveSlide2(1); // Move para a direita

});

nextBtn2.addEventListener('click', () => {
  moveSlide2(-1); // Move para a esquerda
});
