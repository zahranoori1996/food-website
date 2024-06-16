let liElems = document.querySelectorAll("li");
console.log(liElems);

let id = document.getElementById("footer-website");
console.log(id);
let classi = document.getElementsByClassName("container-menu");
console.log(classi);
let tag = document.getElementsByTagName("a");
console.log(tag);
let query = document.querySelector("section");
console.log(query);
// let test = liElems.forEach(element => {
//     console.log(element.textContent.trim());
// });

for (let index = 0; index < tag.length; index++) {
    const element = tag[index].textContent.trim();
    console.log(element);
}
// let i = 0;
// while(i < liElems.length){
//     console.log(liElems[i].textContent.trim());
//     i++;
// }