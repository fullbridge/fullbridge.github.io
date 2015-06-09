/* Form field validates after focus once */

$(':required').on('blur keydown', function() {
    $(this).addClass('touched');
});

/* Make label visible after value is entered */

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

/* Range input click to update output value (it only catches the first range input on the page, need re-factoring before production). */

if (document.querySelector) {
    document.querySelector(".range").onchange = function(e) {
        e.target.nextElementSibling.innerText = e.target.value;
    }
}

/* Open split buttons and tooltips */

$(".drop, .tooltip").find(".link, .button, .tip").click(function(e) {
    $(e.target).toggleClass("open")
})

$(document).find("[data-tip]").click(function(e) {
    $(e.target).toggleClass("open")
})

/* Close split buttons and tooltips when clicked outside (does not work on mobile, need re-factoring before production). http://stackoverflow.com/questions/1403615/use-jquery-to-hide-a-div-when-the-user-clicks-outside-of-it */

$(document).mouseup(function (e)
{
    var container = $(".link, .button, .tip");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.removeClass("open");
    }
});