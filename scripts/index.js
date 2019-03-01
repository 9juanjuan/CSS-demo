console.log("is this thing on? hello?")

// When we click any .picture-frame
// A const is a constant varaible 
//  which means that it cannot be reassigned.
const targetElements = document.querySelectorAll("[data-target]") ;
const background = document.querySelectorAll("body");
function respondToClick(event) {
    console.log('hello');
    console.log('how are you?');
    console.log('I am fine because I am a hamster.');

    console.log(event.target.parentElement);

    event.target.parentElement.classList.toggle('big');

    // add the "big" class to the thing that got clicked"
}


function attachClickHandler(oneElement) {
    oneElement.addEventListener("click", respondToClick);
}

targetElements.forEach(attachClickHandler);
// we should see an enlarged version of image that is
// inside that .picture-frame.