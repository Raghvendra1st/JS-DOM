
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const submitBtn = document.getElementById('submitBtn');

const validate = () => {
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isEmailValid = emailPattern.test(emailValue);
    let isPasswordValid = passwordValue.length >= 8;

    
    if (isEmailValid || emailValue === "") {
        emailError.textContent = "";
        emailInput.style.borderColor = "#ccc";
    } else {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.color = "red";
        emailInput.style.borderColor = "red";
    }

    
    if (isPasswordValid || passwordValue === "") {
        passwordError.textContent = "";
        passwordInput.style.borderColor = "#ccc";
    } else {
        passwordError.textContent = "Password must be at least 8 characters.";
        passwordError.style.color = "red";
        passwordInput.style.borderColor = "red";
    }

    
    submitBtn.disabled = !(isEmailValid && isPasswordValid);
};

emailInput.addEventListener('input', validate);
passwordInput.addEventListener('input', validate);