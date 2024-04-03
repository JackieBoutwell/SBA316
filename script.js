//1. Cache at least one element using selectElementById.
const mainDiv = document.querySelector("main");

// console.log("main");

//2.Cache at least one element using querySelector or querySelectorAll.
const cow = document.getElementById("cow");

// console.log(cow);

//3. Use the parent-child-sibling relationship to navigate between elements at least once
// (firstChild, lastChild, parentNode, nextElementSibling, etc.).
const parent = document.querySelector("#top-text");
parent.firstChild.style.color = "red";


//5. Create at least one element using createElement.
//6.Use appendChild and/or prepend to add new elements to the DOM.
const para = document.createElement("p");
para.innerHTML = "How many animals are in the farm house total?";
document.getElementById("box3").appendChild(para);

//8. Modify the HTML or text content of at least one element in
// response to user interaction using innerHTML, innerText, or textContent.


//7. Use the DocumentFragment interface or
// HTML templating with the cloneNode method to create templated content. 
    function showContent() {
  let temp = document.getElementsByTagName("template")[0];
  let clon = temp.content.cloneNode(true);
  document.body.appendChild(clon);
}
    
//4. Iterate over a collection of elements to accomplish some task.
const animalList = document.querySelectorAll('.animal')
    
console.log(animalList)
animalList.forEach((element) => {
    console.log(element)
    
})

//  while (animalList> 4) {
//         console.log("yes");
// } else {
//     console.log("no");
//     }

//9. Modify the style and/or CSS classes of an element in response to user
// interactions using the style or classList properties.

//10. Modify at least one attribute of an element in response to user interaction.

//11. Register at least two different event listeners and create the associated event handler functions.

//12. Use at least two Browser Object Model (BOM) properties or methods.
// password.addEventListener("blur", (event) => {
//     event.target.style.background = "";
// })

//13. Include at least one form and/or input with HTML attribute validation.