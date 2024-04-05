//1. Cache at least one element using selectElementById.
const cow = document.getElementById("cow");

// console.log(cow);

//2.Cache at least one element using querySelector or querySelectorAll.
const mainDiv = document.querySelector("main");

// console.log("main");

//3. Use the parent-child-sibling relationship to navigate between elements at least once
// (firstChild, lastChild, parentNode, nextElementSibling, etc.).
const parent = document.querySelector("#top-text");
parent.firstChild.style.color = "#A34343";

//4. Iterate over a collection of elements to accomplish some task.
const animalList = document.querySelectorAll('.animal')
    
//console.log(animalList)
animalList.forEach((element) => {
    //console.log(element);
    //if (animalList.length == 4) 
    //  i dont need above code b/c it is in the element  is in the Animal list variable.
    element.style.border = "thick solid #000000"
});

//5. Create at least one element using createElement.
//6.Use appendChild and/or prepend to add new elements to the DOM.
const para = document.createElement("p");
para.innerHTML = "Click on the Rooster to Answer";
document.getElementById("top-text").appendChild(para);

//7. Use the DocumentFragment interface or
// HTML templating with the cloneNode method to create templated content. 
    function showContent() {
  let temp = document.getElementsByTagName("template")[0];
  let clon = temp.content.cloneNode(true);
  document.body.appendChild(clon);
}
    
//8. Modify the HTML or text content of at least one element in
// response to user interaction using innerHTML, innerText, or textContent.
//   on line 67.

//9. Modify the style and/or CSS classes of an element in response to user
// interactions using the style or classList properties.
//10. Modify at least one attribute of an element in response to user interaction.
document.getElementById('pinkBtn').addEventListener("click", function () {
    document.getElementById('pig').src = "https://media.npr.org/assets/img/2013/05/01/hires1_sq-279ebd18a38e055bcbe1e310cf85e61e142614ab.jpg";
    this.style.backgroundColor = "#E493B3";
});

//11. Register at least two different event listeners and create the associated event handler functions.
//12. Use at least two Browser Object Model (BOM) properties or methods.
//document.querySelector('#rooster')
document.querySelector('#rooster').addEventListener('click', function () {
    document.getElementById("larrySays").innerHTML = "Larry the Rooster says Cock-a-Doodle-Doo!.";
    let answer = window.prompt('How many Animal?');
    //console.log(answer);
    //console.log(animalList.length);
    if (answer == animalList.length) {
        console.log('correct');
    }
});

const confirm = document.querySelector('#pig')
//console.log(confirm)
confirm.addEventListener('click', function(){
    window.confirm('Pigs cant fly but they can run and swim!','click');    
}); 
    
//13. Include at least one form and/or input with HTML attribute validation.
//  line 28 in HTML -required pattern="[Hh]orse"


//BLOCKERS!!
//Did not have blockers this time around. went with the requirements on the SBA and knocked them out one by one.
// for the Broswers Object Model i was going to do a window.open() and window.close()
//But they did not really fit into the the theme.. they seemed out of place.
//I inncorperated a loop and that was hard to figure out what to do with that loop to accomplish a task.
//The tasked i ended up doing was putting a border on all images.
//line 23 is a blocker.

