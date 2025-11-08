
const form = document.getElementById("registrationForm");

const nameField = document.getElementById("name");


const validateForm = (event) => {
    event.preventDefault(); // Prevent form submission
    
    console.log(nameField.value);
}