const founders = document.querySelector('#founders');

const storyBoxPart = document.querySelector('.story__box_part');

const partners = document.querySelector('#partners')
console.log(partners)

founders.onmouseover = function(event) {
    const founders = event.founders;
    storyBoxPart.style.opacity = '1';
  };

founders.onmouseout = function(event) {
    const founders = event.founders;
    storyBoxPart.style.opacity= '0';
  };

// partners.onmouseover = function(event) {
//     const partners = event.partners;
//     storyBoxPart.style.opacity = '1';
//   };

// partners.onmouseout = function(event) {
//     const partners = event.partners;
//     storyBoxPart.style.opacity= '0';
//   };
// founders.addEventListener('click', getFounders ())

// function getFounders () {
//     storyBoxPart.classList.add('activ')
// }
