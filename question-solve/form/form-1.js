
const form = document.getElementById("registrationForm");

const nameField = document.getElementById("name");
const emailField = document.getElementById('email');
const passwordField = document.getElementById('pass');
const confPassField = document.getElementById('conf_pass');

const validateForm = (event) => {
    event.preventDefault(); // Prevent form submission
    const name = nameField.value.trim();
    const email = emailField.value
    const password = passwordField.value.trim() || '';
    const confPass = confPassField.value.trim() || '';
    
    console.log([name,email,password,confPass])
    let isValid = true;
    
    // Validate Name
    if (name === '') {
        isValid = false;
        nameField.nextElementSibling.style.display = 'block';
    } else {
        nameField.nextElementSibling.style.display = 'none';
    }
    
    // Validate Email
    if (!isValidEmail(email)) {
        isValid = false;
        emailField.nextElementSibling.style.display = 'block';
    } else {
        emailField.nextElementSibling.style.display = 'none';
    }

    // Validate Password
    if (password.length < 6) {
        isValid = false;
        passwordField.nextElementSibling.style.display = 'block';
    } else {
        passwordField.nextElementSibling.style.display = 'none';
    }

    // Validate Confirm Password
    if (confPass !== password || confPass === '') {
        isValid = false;
        confPassField.nextElementSibling.style.display = 'block';
    } else {
        confPassField.nextElementSibling.style.display = 'none';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
    }
    
}
form.addEventListener('submit', validateForm);

const isValidEmail = (email) =>{
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}