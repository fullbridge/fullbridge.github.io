// Hide subnav on scroll down, show on scroll up (mobile needs improvement, it only functions when it completely stops scrolling, need re-factoring before production).

$(function(){
    var nav = $(".subnav.fixed"),
        state = "down", 
        lastScrollTop = 0, delta = 200;

    $(window).scroll(function(event){
      var st = $(this).scrollTop();
       
      if(Math.abs(lastScrollTop - st) <= delta){return};

      if ((st > lastScrollTop) && (lastScrollTop>0)) {
         // downscroll code
         if(state == "up"){
          nav.css("top","-100%");
          state = "down";
        }
      } else {
        // upscroll code
        if(state == "down"){
        nav.css("top","auto");
        state = "up";
        }
      }
        lastScrollTop = st;
    });
});

// Maximize sidebar when page is scrolled

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".sidebar.fixed").addClass("scrolled");
    } else {
        $(".sidebar.fixed").removeClass("scrolled");
    }
});

// Open split buttons and tooltips (doesn't always work on mobile, something is delaying the action for anchor and button elements, need re-factoring before production).

$(".drop, .tooltip").children(".link, .button, .tip").click(function(e) {
    $(".link, .button, .tip").not(this).removeClass("open")
    $(this).toggleClass("open")
})

$(document).find("[data-tip], .side-nav>header").click(function(e) {
    $("[data-tip], .side-nav>header").not(this).removeClass("open")
    $(this).toggleClass("open")
})

// Close split buttons and tooltips when clicked outside (does not work on mobile, need re-factoring before production). http://stackoverflow.com/questions/1403615/use-jquery-to-hide-a-div-when-the-user-clicks-outside-of-it

$(document).mouseup(function (e)
{
    var container = $(".drop, .tooltip");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.children(".link, .button, .tip").removeClass("open");
    }
});

// Close reveal modals

$(".reveal-modal, .overlay").find(".close").click(function(e) {
    $(".reveal-modal, .overlay").removeClass("open")
})

// Form field validates after focus once

$(':required').on('blur keydown', function() {
    $(this).addClass('touched');
});

// Make label visible after value is entered

$('input,textarea,select').on('change', function() {
    $(this).addClass('filled')
})

$(document).ready(function() {
    $("input, textarea").each(function(i, element) {
        if ($.trim($(element).val()) != "") {
            $(element).addClass("filled");
        }
    });
});

// truncate long text
var boxContentFullText = [];
var boxContentCutoffLength = 80;


function displayFullText(index) {
       $(".truncate").html(boxContentFullText[index]);
}

$(document).ready(function() {
       $.each($(".truncate"), function(index, el){
               current = $(el);
               if (current.html().length >  boxContentCutoffLength) {
                       boxContentFullText[index] = current.html();
                       current.html(current.html().substr(0,boxContentCutoffLength-1) + "&hellip; <small class='nowrap'><a href='javascript:displayFullText(" + index + ")';>show</a></small class='nowrap'>");
               }
       });
});
// This makes the .tabs work in IE8 and below, add in HTML <head>:
// <!--[if lt IE 9]><script>window.ltIE9=true</script><![endif]-->
/* if(window.ltIE9) {
  (function($) {
    $('.tabs input[type="radio"]:checked')
    .closest('.tab')
    .addClass('checked');
    $('html').on('click', '.tabs input', function() {
      $('input[name="' + this.name + '"]')
      .closest('.tab')
      .removeClass('checked');
      $(this)
      .closest('.tab')
      .addClass('checked');
    });
  })(window.jQuery);
} */

//Range input click to update output value (it only catches the first range input on the page, and it returns error when there's no range input on the page, need re-factoring before production).
/* if (document.querySelector) {
    document.querySelector(".range").onchange = function(e) {
        e.target.nextElementSibling.innerText = e.target.value;
    }
} */