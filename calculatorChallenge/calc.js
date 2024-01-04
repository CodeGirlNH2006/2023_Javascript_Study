// Setup access to HTML elements
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
// Add listeners to all buttons
buttons.forEach(function(button) {
    button.addEventListener('click', calculate);
    }
);
// Calculate function
function calculate(event){
    // What button was clicked?
    const clickedValue = event.target.value;

    // Check if = sign was clicked
    if(clickedValue === "=") {
        // Check if the display is empty
        if (display.value !== "") {
            // Calculate and show the result
            display.value = eval(display.value);
        }
    }
    else if (clickedValue === "CE") {
            // Clear everything
            display.value = "";
        }
    else{
            // Concatenate clicked button value
            display.value += clickedValue;
        }
}