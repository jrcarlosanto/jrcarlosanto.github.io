$(document).ready(adapta);
$(window).on('load resize', adapta);

function adapta()//deixar tamanho dos blocos iguais
{
  var alturaWindow = window.screen.width; //pega largura da tela
  console.log(alturaWindow);
  
  if(alturaWindow>=992)
  {
    var altura = $('#alturaBloco').css('height'); // altura do bloco da esquerda
    $('.adapta').css('height', altura);//colocar a altura no bloco da direita
  } else
  {
    $('.adapta').css('height', ""); //colocar a altura normal do bloco da direita
  }
};