function cssVar(varName, value){
   document.documentElement.style.setProperty('--' + varName, value);
}

// -----------------------------------------------------------------------------
var currentScroll = 0;
var scrollViews = document.querySelectorAll('[class^="scroll-view-"');

var currentScrollViewIndex = 0;
var currentScrollView = scrollViews[currentScrollViewIndex];
currentScrollView.classList.add('active');

function scroll(e){
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
}

// -----------------------------------------------------------------------------

window.addEventListener('mousewheel', scroll);

// -----------------------------------------------------------------------------
var yDown = null;

window.addEventListener('touchstart', function(e){
  yDown = e.touches[0].clientY;
});

window.addEventListener('touchmove', function(e){
  if (!yDown) {
    return;
  }

  var yUp = e.touches[0].clientY;

  var yDiff = yDown - yUp;

  if (Math.abs(yDiff) < 10) {
    return;
  }

  if (yDiff > 0) {
    scroll({
      deltaY: 1
    });
  } else {
    scroll({
      deltaY: -1
    });
  }
});
