const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

form.addEventListener('submit', e => {
    e.preventDefault();
    const status = checkInputs();

    if (status) {
        e.target.submit();
    }
});

function checkInputs() {
    // get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheck = password2.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, "Username cannot be blank");
    } else {
        setSuccessFor(username);
    }
    if (emailValue === '') {
        setErrorFor(email, "Email cannot be blank");
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, "Email is not valid");
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, "Password cannot be blank");
    } else {
        setSuccessFor(password);
    }

    if (passwordCheck === '') {
        setErrorFor(password2, "Password check cannot be blank");
    } else if(passwordValue !== passwordCheck) {
        setErrorFor(password2, "Passwords does not match");
    } else {
        setSuccessFor(password2);
    }

    return true;
}

function setErrorFor(input, message) {
    const formGroup = input.parentElement; // .form-group
    const small = formGroup.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formGroup.className = 'form-group error';
}

function setSuccessFor(input) {
    const formGroup = input.parentElement; // .form-group
    formGroup.className = 'form-group success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
} 