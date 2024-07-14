let $ = document;
let lightModeBtn = $.getElementById("light-btn");
let darkModeBtn = $.getElementById("dark-btn");
let imgLight = $.querySelector(".light");
let imgDark = $.querySelector(".dark");
let links = $.querySelectorAll("a");
let h1Elem = $.querySelector(".text-information");
let spanElem = $.querySelectorAll("span");
let pElem = $.querySelectorAll("p");
let h3Elem = $.querySelectorAll("h3");
let boxMenu = $.querySelector(".food-list-menu-2");
let boxMenu2 = $.querySelectorAll(".food-list-menu-1");
let footer = $.getElementById("footer-website");
let flagDrakLightMode = false;

let loader = $.getElementById("loader");
let contanier = $.getElementsByClassName("contanier")[0];



window.addEventListener("load",function(){
    loader.style.display = "none";
    loader.style.transition = "all 1s ease-in-out";
    contanier.style.display = "block"
})
imgLight.addEventListener("click",function(){

    console.log("dark");
    $.body.style.background = "#000";
    $.body.style.transition = "all 100ms ease-in-out";
    imgLight.style.visibility = "hidden";
    imgLight.style.transition = "all 100ms ease-in-out";
    imgDark.style.transition = "all 150ms ease-in-out";
    imgDark.style.visibility = "visible";
    h1Elem.style.color = "#ff2400";
    footer.style.background = "rgb(40, 38, 45)";

    boxMenu.style.border = "3px solid #fff"
    links.forEach(function(link){
        link.style.color = "#878484";
        
    });
    spanElem.forEach(function(span){
        span.style.color = "#878484";
      
    });
    pElem.forEach(function(p){
        p.style.color = "#878484";
       
    });
    h3Elem.forEach(function(h3){
        h3.style.color = "#878484";
    
    });
    boxMenu2.forEach(function(box){
        box.style.border = "3px solid #fff";
   ;
    });
});
imgDark.addEventListener("click",function(){
    console.log("light");
    $.body.style.background = "#fff";
    $.body.style.transition = "all 100ms ease-in-out";
    imgLight.style.visibility = "visible";
    imgLight.style.transition = "all 100ms ease-in-out";
    imgDark.style.transition = "all 150ms ease-in-out";
    imgDark.style.visibility = "hidden";
    h1Elem.style.color = "rgb(23, 22, 26)";
    footer.style.background = "#faebd7"
   
    links.forEach(function(link){
        link.style.color = "rgb(23, 22, 26)";
        
    });
    spanElem.forEach(function(span){
        span.style.color = "rgb(23, 22, 26)";
       
       
    });
    pElem.forEach(function(p){
        p.style.color = "rgb(23, 22, 26)";
        
    });
    h3Elem.forEach(function(h3){
        h3.style.color = "rgb(23, 22, 26)";
       
    });
    boxMenu2.forEach(function(box){
        box.style.border = "3px solid #000";
        
    });
});

