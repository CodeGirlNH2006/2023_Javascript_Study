// Gain Access to form elements
const submitButton = document.getElementById('submit');

// Add event listener to submit button
submitButton.addEventListener('click', checkForm);


function checkForm(){
    /*
        In this method check whether name, email, and phone number have input.
        If they are blank turn the fields red.  Otherwise, do nothing.
     */
    /* Check Plan:
        1. Make a constant for the input (gaining access programmatically)
        2. If statement to check if the input is blank
        3. If the input is blank, turn the fields red
     */
    const name = document.getElementById("name");
    if(name.value === ""){
        name.style.backgroundColor = "red";
    }
    const email = document.getElementById("email");
    if(email.value === ""){
        email.style.backgroundColor = "red";
    }
    const phone = document.getElementById("phone");
    if(phone.value === ""){
        phone.style.backgroundColor = "red";
    }

}