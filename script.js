const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password_2 = document.getElementById("password2");

//showerror message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

//show success outline

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

//check email is valid
function checkEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

function match(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords do not match");
    }
}

//check required function

function checkRequired(inputArr) {
    inputArr.forEach((input) => {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

//checklength

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} must be at least ${min} characters`
        );
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`
        );
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// event lisenter
form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkRequired([userName, email, password, password_2]);
    checkLength(userName, 3, 15);
    checkLength(password, 6, 25);
    match(password, password_2);
    // if (userName.value === "") {
    //     showError(userName, "username is required");
    // } else {
    //     showSuccess(userName);
    // }

    // if (email.value === "") {
    //     showError(email, "email is required");
    // } else if (!isValidEmail(email.value)) {
    //     showError(email, "email is not valid");
    // } else {
    //     showSuccess(email);
    // }
    // if (password.value === "") {
    //     showError(password, "password is required");
    // } else {
    //     showSuccess(password);
    // }
    // if (password2.value === "") {
    //     showError(password2, "password2 is required");
    // } else {
    //     showSuccess(password2);
    // }
    if (!checkEmail(email.value)) {
        showError(email, "Email is not valid");
    }
});
