$(document).ready(startApp);

function startApp(){
    $('.project').hover(handleHover);
    $('.intro').click(handleHideNav);
    $('#about').click(handleHideNav);
    $('#skills').click(handleHideNav);
    $('#portfolio').click(handleHideNav);
    $('#contact').click(handleHideNav);
    $('footer').click(handleHideNav);
    printTitle();
}

function handleHover(){
    $(this).find('.projectShow').toggle();
}

function handleHideNav(){
    $('.navbar-main-collapse').removeClass('in');
}

function printTitle(){
    let w = $('<h1>').text('W').addClass('w');
    let e = $('<h1>').text('E').addClass('e');
    let l = $('<h1>').text('L').addClass('l');
    let c = $('<h1>').text('C').addClass('c');
    let o = $('<h1>').text('O').addClass('o');
    let m = $('<h1>').text('M').addClass('m');
    let eSec = $('<h1>').text('E').addClass('eSec');
    let exclamation = $('<h1>').text('!').addClass('exclamation');

    let i = $('<h1>').text('I').addClass('i');
    let apostrophe = $('<h1>').text('\'').addClass('apostrophe');
    let mSec = $('<h1>').text('M').addClass('mSec').css('padding-right', '20px');
    let s = $('<h1>').text('S').addClass('s');
    let t = $('<h1>').text('T').addClass('t');
    let eThird = $('<h1>').text('E').addClass('eThird');
    let lSec = $('<h1>').text('L').addClass('lSec');
    let lThird = $('<h1>').text('L').addClass('lThird');
    let a = $('<h1>').text('A').addClass('a');

    setTimeout(function(){$('.welcome').prepend(w)}, 500);
    setTimeout(function(){$('.w').after(e)}, 600);
    setTimeout(function(){$('.e').after(l)}, 700);
    setTimeout(function(){$('.l').after(c)}, 800);
    setTimeout(function(){$('.c').after(o)}, 900);
    setTimeout(function(){$('.o').after(m)}, 1000);
    setTimeout(function(){$('.m').after(eSec)}, 1100);
    setTimeout(function(){$('.eSec').after(exclamation)}, 1200);
    setTimeout(function(){$('.name').append($('.bar')).prepend(i);}, 1300);
    setTimeout(function(){$('.i').after(apostrophe)}, 1400);
    setTimeout(function(){$('.apostrophe').after(mSec)}, 1500);
    setTimeout(function(){$('.mSec').after(s)}, 1600);
    setTimeout(function(){$('.s').after(t)}, 1700);
    setTimeout(function(){$('.t').after(eThird)}, 1800);
    setTimeout(function(){$('.eThird').after(lSec)}, 1900);
    setTimeout(function(){$('.lSec').after(lThird)}, 2000);
    setTimeout(function(){$('.lThird').after(a)}, 2000);
}