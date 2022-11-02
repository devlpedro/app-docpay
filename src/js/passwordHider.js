// Olho para aparecer e desaparecer senha
let password = document.getElementById('password-type');
let icon = document.querySelector('#eyes');

icon.addEventListener('click', eyeClick);

function eyeClick() {
    let inputTypePassword = password.type === 'password';

    if (inputTypePassword) {
        showPassword()
    } else {
        hidePassword()
    }
}

function showPassword() {
    password.setAttribute('type', 'text');
    icon.setAttribute('src', './images/dd-EyeSlash.svg');
}

function hidePassword() {
    password.setAttribute('type', 'password');
    icon.setAttribute('src', './images/dd-Eye.svg');
}