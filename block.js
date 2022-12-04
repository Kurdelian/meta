// function viewDiv(){
//     document.getElementById("div1").style.display = "block";
// };

const button = document.querySelector(".hero__button")
const tex = document.querySelector(".hero__tex")
const texBlock = document.querySelector(".hero__tex_block")

button.onmouseover = function(event) {
    const button = event.founders;
    document.getElementById("div1").style.display = "block";
    tex.style.marginBottom = '10px';
    texBlock.marginBottom = '50px'
  };

