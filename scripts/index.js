console.log("is this thing on? hello?")

// When we click any .picture-frame
// A const is a constant varaible 
//  which means that it cannot be reassigned.
const targetElements = document.querySelectorAll("[data-target]") ;

function respondToClick() {
    console.log('hello');
    console.log('how are you?');

    console.log('I am fine because I am a hamster.');
}
targetElements[0].addEventListener("click", respondToClick);

// we should see an enlarged version of image that is
// inside that .picture-frame.