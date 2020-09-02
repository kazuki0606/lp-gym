$(function(){

$('.trainer-link').hover(function(){

  $(this).find('.inner').removeClass('hi');
  $(this).find('.trainer-title').removeClass('white');
  
},
function(){
  
  $('.inner').addClass('hi');
  $(this).find('.trainer-title').addClass('white');
  

});



$('.trainer-link').click(function(){





  $('#tr-modal').fadeIn();

  var $tr =$(this).find('.inner').children('img').attr('src');
  var $text =$(this).find('.trainer-title').html();
  var $text2 =$(this).find('.scroll').html();
 

$('#translate-img').attr('src',$tr);


$('#translate-text').html($text);
$('#translate-text2').html($text2);
$('#translate-text').children('.tr-name').css('font-size','40px');
$('#translate-text').children('.tr-position').css('color','#2b2e38');
$('#translate-text').find('.tr-job').css('display','inline');



  
  });





$('#close-modal').click(function(){

  $('#tr-modal').fadeOut();
  
  });


  $('.faq-list-item').click(function(){
    var $answer=$(this).find('.answer');
    
    if($answer.hasClass('open')){
    $answer.removeClass('open');
    $answer.slideUp();
    $(this).find('span').text('+');
    
    
    }else{
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find('span').text('-');
    
    }
    
    });


});