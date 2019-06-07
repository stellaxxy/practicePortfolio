$(document).ready(startApp);

function startApp(){
    $('.project').hover(handleHover);
    $('.intro').click(handleHideNav);
    $('#about').click(handleHideNav);
    $('#skills').click(handleHideNav);
    $('#portfolio').click(handleHideNav);
    $('#contact').click(handleHideNav);
    $('footer').click(handleHideNav);
}

function handleHover(){
    $(this).find('.projectShow').toggle();
}

function handleHideNav(){
    $('.navbar-main-collapse').removeClass('in');
}