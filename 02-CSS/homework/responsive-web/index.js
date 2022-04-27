const hamburger = document.querySelector(".hamburger")
const lines = document.querySelectorAll(".line")
const dropdownMenu = document.querySelector(".dropdown")
const itemsA = document.querySelectorAll("a")

//bandera para saber en que estado se encuentra el boton hamburguesa
let flag = true;

//eventos de click de boton hamburguesa y animacion
hamburger.addEventListener("click", function(){
  if(flag){
    lines[0].style.transform = "rotate(45deg) translateY(12px)";
    lines[1].style.opacity = 0;
    lines[2].style.transform = "rotate(-45deg) translateY(-12px) ";
    dropdownMenu.style.display = "block";
    flag=false;
  }else{
    lines[0].style.transform = "rotate(0deg) translateY(0px) ";
    lines[1].style.opacity = 1;
    lines[2].style.transform = "rotate(0deg) translateY(0px) ";
    dropdownMenu.style.display = "none";
    flag=true;
  }
});

//links a subpaginas en dropdown menu
itemsA[1].addEventListener("click", function(){
  window.location.href = "/index.html"
});

itemsA[5].addEventListener("click", function(){
  window.location.href = "/register.html"
});

//si el dropdown se queda abierto y se cambia el tamano de la pantalla...
window.addEventListener("resize", function(){
  if(flag === false){
    flag = true;
  }
  lines[0].style.transform = "rotate(0deg) translateY(0px) ";
  lines[1].style.opacity = 1;
  lines[2].style.transform = "rotate(0deg) translateY(0px) ";
  dropdownMenu.style.display = "none";
});

