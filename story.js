const founders = document.querySelector('#founders');
console.log(founders)

const storyBoxPart = document.querySelector('.story__box_part');
console.log(storyBoxPart)

founders.onmouseover = function(event) {
    const founders = event.founders;
    storyBoxPart.style.opacity = '1';
  };

founders.onmouseout = function(event) {
    const founders = event.founders;
    storyBoxPart.style.opacity= '0';
  };
// founders.addEventListener('click', getFounders ())

// function getFounders () {
//     storyBoxPart.classList.add('activ')
// }
