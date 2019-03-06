console.log("is this thing on? hello?")

// When we click any .picture-frame
// A const is a constant varaible 
//  which means that it cannot be reassigned.
const targetElements = document.querySelectorAll("[data-target]") ;
const outputElement= document.querySelector("[data-output]")
console.log(outputElement)

function respondToClick(event) {
    // assigns src attribute to variable image 
    const image = event.target.getAttribute('src')
    // assign src of image to our data output element
    outputElement.src = image
    //  toggles hidden class onto our output element
    outputElement.classList.remove('hidden')
    // toggles big class onto our target 
    event.target.parentElement.classList.toggle('big');
    // scrolls to top of page
    window.scrollTo(0,0);


    // add the "big" class to the thing that got clicked"
}
function clickOnBig (event){
    // console.log('boop')
    event.target.classList.toggle('hidden');
}
//  adds click event listener and applies respondToClick function
function attachClickHandler(oneElement) {
    oneElement.addEventListener("click", respondToClick);

}
//  adds event listener to outputElement that we "click" 
outputElement.addEventListener("click", clickOnBig);
// attaches click handler to each target element that we "click"
targetElements.forEach(attachClickHandler);
