$(document).ready(startApp);

function startApp(){
    $('.project').hover(handleHover);
    $('.memoryMatch').click(handleMemoryDivClick);
    $('.expenseTracker').click(handleExpenseDivClick);
    $('.paws').click(handlePawsDivClick);
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
