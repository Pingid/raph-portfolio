
var navs = [
  {class: '.nav-intro', top: 0, bottom: 800},
  {class: '.nav-hopyard', top: 800, bottom: 1600},
  {class: '.nav-outlook', top: 1600, bottom: 2400}
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
  scrollNavColour(navs, 'nav-scroll');
})
