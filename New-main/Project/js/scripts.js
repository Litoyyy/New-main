let myage = 15,
age = 18;
if (myage >= 18 && age >= 18) {
    console.log('вы прошли вместе с мамой')
} else {
    
}
// let block = document.querySelectorAll('.aboutUs .aboutUsBlock .infoBlock .block');
// console.log(block);
// let h2 = document.querySelector('.aboutUs .aboutUsBlock h2');
// h2.style.fontSize = '50px';
// h2.style.background = 'red';
// h2.style.padding = '30px';
// h2.classList.add ('error');
// h2.classList.toggle ('error');

// let news = $('.news .newsblock .info-block .block').eq(1);
let news = $('.news .newsblock .info-block .block');
// news.css('background-color','lightblue');
// news.css({
//     'background-color':'lightblue',
//     'padding':'50px'
// });
// news.removeClass('error')
$('.news .newsblock .block .text-news .snus').on('click', function(){
    news.toggleClass('error')
    editText();
})

function editText() {
    let btnText = $('.news .newsblock .block .text-news .snus')
    if (btnText.val() == 'Светлая тема') {
        btnText.val('Тёмная тема')
    } else {
        btnText.val('Светлая тема')
    }
}
