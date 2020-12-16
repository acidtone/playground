const root = document.documentElement;

const img = document.querySelector('div > img:first-child');
const contrast = document.querySelector('#contrast');
const contrastOut = document.querySelector('output[for=contrast]');

contrast.addEventListener('input', function(event) {
  contrastOut.value = contrast.value + '%';
  root.style.setProperty("--contrast",contrast.value);
  changeFilter('div > img');
})

function changeFilter(cssSelector) {
  var elems = document.querySelectorAll(cssSelector);
  var index = 0, length = elems.length;
  for ( ; index < length; index++) {
      elems[index].style.filter = 'contrast(' + contrast.value + '%)';
  }
}