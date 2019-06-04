$(document).ready(startApp);

function startApp(){
    $('.project').hover(handleHover);
    $('.memoryMatch').click(handleMemoryDivClick);
    $('.expenseTracker').click(handleExpenseDivClick);
    $('.paws').click(handlePawsDivClick);
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

function handleMemoryDivClick(){
    window.open("http://stellaxyh.com/memorymatch/", "_blank");
}

function handleExpenseDivClick(){
    window.open("http://stellaxyh.com/expensetracker/", "_blank");
}

function handlePawsDivClick(){
    window.open("http://pawssolution.com/", "_blank");
}

function handleHideNav(){
    $('.navbar-main-collapse').toggleClass('in');
}