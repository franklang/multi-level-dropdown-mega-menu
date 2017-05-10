$(document).ready(function(){
  $('.level0 > .item').on('mouseenter', level0MouseEnter);
  $('.level1 > .item').on('mouseenter', level1MouseEnter);
  $(document).on('mouseover','.screen', closeMenu);

  function level0MouseEnter(){
    var $this = $(this);
    var $subDropDown0 = $('.sub-dropdown0');

    if($('.screen').length <= 0){
      $('<div class="screen" />').insertBefore('.desktop-mega-menu');
    }
    
    $('.main-dropdown:not(.hidden)').addClass('hidden');

    if(!$this.hasClass('in-path')){
      $this.addClass('in-path').siblings('.item').removeClass('in-path');
      $('.main-dropdown').find('.item').removeClass('in-path');
      $subDropDown0.closest('.item').addClass('in-path');

      $('.sub-dropdown').addClass('hidden');
      $subDropDown0.removeClass('hidden');
    }

    var getHoveredMainItemClass = $this.children('a').attr('class');
    $('.main-dropdown.'+getHoveredMainItemClass).removeClass('hidden');  
  }

  function level1MouseEnter(){
    var $this = $(this);
    $('.sub-dropdown:not(.hidden)').addClass('hidden');
    
    $this.siblings('.item').removeClass('in-path');
    $this.addClass('in-path');

    var getHoveredSubItemClass = $this.children('a').attr('class');
    $('.sub-dropdown.'+getHoveredSubItemClass).removeClass('hidden');   
  }

  function closeMenu(){
    $('.main-dropdown:not(.hidden), .sub-dropdown:not(.hidden)').addClass('hidden');
    $('.item').removeClass('in-path');
    $('.screen').detach();    
  }
});
