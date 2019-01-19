
const scroll = new SmoothScroll('a[href*="#"]');

const mySwiper = new Swiper(".swiper-container", 
{
  speed: 400,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  }
});

window.addEventListener('load', function() {
  console.log('hello')
  var surname = prompt('Greetings friend, may I enquire as to your surname?');
})

// var handleClick = function (do click) {
//   console.log('hello')
// };
// var button = document.querySelector('#big-button');
// button.addEventListener('click', handleClick);