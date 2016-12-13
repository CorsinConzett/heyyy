function cssVar(varName, value){
   document.documentElement.style.setProperty('--' + varName, value);
}

var currentScroll = 0;
var scrollViews = document.querySelectorAll('[class^="scroll-view-"');

var currentScrollViewIndex = 0;
var currentScrollView = scrollViews[currentScrollViewIndex];
currentScrollView.classList.add('active');

window.addEventListener('mousewheel', function (e) {

  var scroll = currentScroll;

  if (e.deltaY < 0) {
    // scroll up
    if (currentScroll + 100 <= 0){
      scroll = currentScroll + 100;
      currentScrollViewIndex--;
    }
  } else {
    // scroll down
    if (currentScroll - 100 > -200) {
      scroll = currentScroll - 100;
      currentScrollViewIndex++;
    }

  }

  cssVar('scroll-position', scroll + 'vh');
  currentScrollView.classList.remove('active');
  currentScrollView = scrollViews[currentScrollViewIndex];
  currentScrollView.classList.add('active');
  currentScroll = scroll;
});
