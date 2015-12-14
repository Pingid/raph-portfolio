
var navs = [
  {class: '.nav-intro', top: 0, bottom: 250},
  {class: '.nav-hopyard', top: 250, bottom: 600},
  {class: '.nav-night-tails', top: 400, bottom: 400},
  {class: '.nav-outlook', top: 600, bottom: 2400}
]

function scrollNavColour(nav, newClass) {
  var distance = $('body').scrollTop();
  nav.forEach(function(text) {
    if (distance >= text.top && distance < text.bottom) {
      $(text.class).addClass(newClass)
    } else {
      $(text.class).removeClass(newClass)
    }
  })
}

scrollNavColour(navs, 'nav-scroll');

$(window).scroll(function() {
  console.log('s');
  scrollNavColour(navs, 'nav-scroll');
})
