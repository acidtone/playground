import {colors} from './color-names.mjs';

function init() {
  const tplSwatch = document.getElementById('tpl-swatch');
  const swatchContainer = tplSwatch.parentNode;
  
  colors.list().forEach(function(color) {
    let swatchClone = tplSwatch.content.cloneNode(true);
  
    swatchClone.querySelector('section').classList.add(color);
    swatchContainer.appendChild(swatchClone);
  });

  document.querySelectorAll('article').forEach(function(item){
    console.log(getComputedStyle(item).getPropertyValue('--clr'));
    item.setAttribute('data-color',getComputedStyle(item).getPropertyValue('--clr'));
  });
  
}

document.addEventListener('load', init());