let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});

/**Tratamento da Exibição da Grid de Vitórias */

toggle_vitorias = document.querySelector("#toggle_vitorias");
vitorias = document.querySelector("#vitorias");
iconPlus = document.querySelector("#iconPlus");

toggle_vitorias.addEventListener("click", ()=>{
  vitorias.classList.toggle("closeDiv")
  if(vitorias.classList.contains("closeDiv")){
    iconPlus.classList.remove("bx-plus-circle")
    iconPlus.classList.add("bx-minus-circle")
  }else{
    iconPlus.classList.remove("bx-minus-circle")
    iconPlus.classList.add("bx-plus-circle")
  }
})







