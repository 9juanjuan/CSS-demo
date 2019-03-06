console.log("is this thing on? hello?")

// When we click any .picture-frame
// A const is a constant varaible 
//  which means that it cannot be reassigned.
const targetElements = document.querySelectorAll("[data-target]") ;
const outputElement= document.querySelector("[data-output]")
console.log(outputElement)

function respondToClick(event) {
    // console.log(event.target.getAttribute('src'))
    // assigns src attribute to variable image 
    const image = event.target.getAttribute('src')
    // assign src of image to our data output element
    outputElement.src = image
    //  toggles hidden class onto our output element
    outputElement.classList.toggle('hidden')
    // toggles big class onto our target 
    event.target.parentElement.classList.toggle('big');


    // add the "big" class to the thing that got clicked"
}
function clickOnBig (event){
    console.log('boop')
    event.target.classList.toggle('hidden');
}

// function attachBigClickHandler(oneElement){
//     oneElement.addEventListener("click", clickOnBig);
// }
function attachClickHandler(oneElement) {
    oneElement.addEventListener("click", respondToClick);
}

outputElement.addEventListener("click", clickOnBig);
targetElements.forEach(attachClickHandler);
// we should see an enlarged version of image that is
// inside that .picture-frame.