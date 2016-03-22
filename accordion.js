$(document).ready(function ($) {
    accordionToggle();
});

var accordionToggle = function () {
    $('.accordion').find('h2').click(function () {
        $(this).parent().siblings().removeClass('open');
        $('.accordion__content').slideUp();

        if ($(this).parent().hasClass('open')) {
            $(this).parent().removeClass('open');
            $(this).parent().find('.accordion__content').slideUp();
        } else {
            $(this).parent().addClass('open');
            $(this).parent().find('.accordion__content').slideDown();
        }
    });
};

