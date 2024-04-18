   
   document.addEventListener("DOMContentLoaded", function() {
    const saveButton = document.getElementById("saveButton");
    saveButton.addEventListener("click", validateForm);
});

function validateForm(event) {
    event.preventDefault(); 

    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const gender = document.querySelector('input[name="gender"]:checked');
    const birthdate = document.getElementById("birthdate");

    
    if (!checkEmail()) {
        return; 
    }

   
    document.getElementById("registerPage").submit();
}

const checkEmail = () => {
    const emailInput = email.value;

    
    if (!isRequired(emailInput)) {
        alert('Email is required.');
        return false;
    }

    
    if (!isEmailValid(emailInput)) {
        alert('Please enter a valid email address.');
        return false;
    }

    
    alert('Email is valid.');
    return true;
};

const isRequired = (value) => {
    return value.trim() !== '';
};

const isEmailValid = (email) => {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};


