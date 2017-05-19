$(document).ready(function () {
  $("#slide_menu img").mouseover(function () {
  	$(this).attr(
      "style", "background-color : #d3d3d3"
    );
  }).mouseleave(function () {
    $(this).removeAttr("style");
  });
});




/*
  function slide_menu(opts) {

    opts = $.extend({
      container: 'body',
      flag:      'slide_menu-open'
    }, opts);

    var container = $(opts.container);

    // open menu
    this.open  = function() {
      container.data('slide_menu-timer', setTimeout(function() {
        container.addClass(opts.flag);
      }, 100));
    };

    // close menu
    this.close = function() {
      clearTimeout(container.data('slide_menu-timer'));
      container.removeClass(opts.flag);
    };

  }

  $.fn.slide_menu = function (options) {
    var menu = new slide_menu(options);
    return this.each(function() {
      $(this).hover(menu.open, menu.close);
    });
  };
*/




//追加部分
//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
//<script>
/*$(function () {
    
var menu = $('#slide_menu'),
    menuBtn = $('#button'),
    body = $(document.body),
    // .layer もオブジェクト化    
    layer = $('.layer'),
    menuWidth = menu.outerWidth();                
         
    menuBtn.on('click', function() {
    body.toggleClass('open');
        if(body.hasClass('open')){
            // css で非表示にしていた .layer を表示
            $(".layer").show();
            body.animate({'left' : menuWidth }, 300);
            menu.animate({'left' : 0 }, 300);                    
        } else {
            // .layer を非表示
            $(".layer").hide();
            menu.animate({'left' : -menuWidth }, 300);
            body.animate({'left' : 0 }, 300);            
        }             
    });
    // .layer をクリック時にもメニューを閉じる
    layer.on('click', function() {
            menu.animate({'left' : -menuWidth }, 300);
            body.animate({'left' : 0 }, 300).removeClass('open');
            layer.hide();
    });
});*/