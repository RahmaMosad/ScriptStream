   
   document.addEventListener("DOMContentLoaded", function() {
    const saveButton = document.getElementById("saveButton");
    saveButton.addEventListener("click", validateForm);
});

function validateForm(event) {
    event.preventDefault(); // Prevents the form from submitting

    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const gender = document.querySelector('input[name="gender"]:checked');
    const birthdate = document.getElementById("birthdate");

    // Validate email
    checkEmail();

    // You can add validations for other fields here

    // If all validations pass, you can submit the form
    document.getElementById("registerPage").submit();
}

const checkEmail = () => {
    const emailInput = email.value;

    // Check if email is required
    if (!isRequired(emailInput)) {
        alert('Email is required.');
        return;
    }

    // Check if email is valid
    if (!isEmailValid(emailInput)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Email is valid
    alert('Email is valid.');
};

const isRequired = (value) => {
    return value.trim() !== '';
};

const isEmailValid = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};


