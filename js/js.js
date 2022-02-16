$(document).ready(adapta);
$(window).on('load resize', adapta);

function adapta()//deixar tamanho dos blocos iguais
{
  var altura = $('#alturaBloco').css('height'); // altura do segundo blocos

  $('.adapta').css('height', altura);//colocar a altura no primeiro bloco

};