const allInputs = document.querySelectorAll('input');
console.log(allInputs);

const firstname = document.querySelector("input[id='firstname']");
const lastname = document.querySelector("input[id='lastname']");
const email = document.querySelector("input[id='email']");
const phonenumber = document.querySelector("input[id='phonenumber']");
const password = document.querySelector("input[id='password']");
const confirmpw = document.querySelector("input[id='confirm']");

const firstname_text = document.querySelector("p[id='firstname']");
const lastname_text = document.querySelector("p[id='lastname']");
const email_text = document.querySelector("p[id='email']");
const phonenumber_text = document.querySelector("p[id='phonenumber']");
const password_text = document.querySelector("p[id='password']");
const confirmpw_text = document.querySelector("p[id='confirm']");

const submitBtn = document.querySelector("button[class='submit']");



var howMany = {
    'firstname': false,
    'lastname': false,
    'email': false,
    'phonenumber': false,
    'password': false,
    'confirm': false
};

function check_firstname() {
    var text = firstname.value;
    if(text.length == 0) {
        firstname.classList.remove('valid_input')
        firstname.classList.add('invalid_input');
        firstname_text.classList.remove('valid_text');
        firstname_text.classList.add('invalid_text');
        firstname_text.textContent = "✗ Invalid input!";
        howMany['firstname'] = false;
    }
    else {
        firstname.classList.remove('invalid_input');
        firstname.classList.add('valid_input');
        firstname_text.classList.remove('invalid_text');
        firstname_text.classList.add('valid_text');
        firstname_text.textContent = "✓ Valid input!";
        howMany['firstname'] = true;
    }
}

function check_lastname() {
    var text = lastname.value;
    if(text.length == 0) {
        lastname.classList.remove('valid_input')
        lastname.classList.add('invalid_input');
        lastname_text.classList.remove('valid_text');
        lastname_text.classList.add('invalid_text');
        lastname_text.textContent = "✗ Invalid input!";
        howMany['lastname'] = false;
    }
    else {
        lastname.classList.remove('invalid_input');
        lastname.classList.add('valid_input');
        lastname_text.classList.remove('invalid_text');
        lastname_text.classList.add('valid_text');
        lastname_text.textContent = "✓ Valid input!";
        howMany['lastname'] = true;
    }
}

function check_phonenumber() {

    if(!phonenumber.validity.valid || phonenumber.value.length < 10) {

        phonenumber.classList.remove('valid_input')
        phonenumber.classList.add('invalid_input');
        phonenumber_text.classList.remove('valid_text');
        phonenumber_text.classList.add('invalid_text');
        phonenumber_text.textContent = "✗ Please enter 10 digit phone number!";
        howMany['phonenumber'] = false;
    }
    else {
        phonenumber.classList.remove('invalid_input');
        phonenumber.classList.add('valid_input');
        phonenumber_text.classList.remove('invalid_text');
        phonenumber_text.classList.add('valid_text');
        phonenumber_text.textContent = "✓ Valid input!";
        howMany['phonenumber'] = true;
    }
}

function test_regex(text) {
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;

    return regex.test(text);
}

function check_password() {
    var text = password.value;

    if(text.length < 8) {
        password.classList.remove('valid_input')
        password.classList.add('invalid_input');
        password_text.classList.remove('valid_text');
        password_text.classList.add('invalid_text');
        password_text.textContent = "✗ At least 8 characters!";
        howMany['password'] = false;
    }
    else if(!test_regex(text)) {
        password.classList.remove('valid_input')
        password.classList.add('invalid_input');
        password_text.classList.remove('valid_text');
        password_text.classList.add('invalid_text');
        password_text.textContent = "✗ At least 1 uppercase,1 lowercase,1 digit!";
        howMany['password'] = false;
    }
    else {
        password.classList.remove('invalid_input');
        password.classList.add('valid_input');
        password_text.classList.remove('invalid_text');
        password_text.classList.add('valid_text');
        password_text.textContent = "✓ Valid input!";
        howMany['password'] = true;
    }
}

function check_confirm() {
    var pw = password.value;
    var cf = confirmpw.value;

    if(pw !== cf) {
        confirmpw.classList.remove('valid_input')
        confirmpw.classList.add('invalid_input');
        confirmpw_text.classList.remove('valid_text');
        confirmpw_text.classList.add('invalid_text');
        confirmpw_text.textContent = "✗ Passwords do not match!";
        howMany['confirm'] = false;
    }
    else {
        confirmpw.classList.remove('invalid_input');
        confirmpw.classList.add('valid_input');
        confirmpw_text.classList.remove('invalid_text');
        confirmpw_text.classList.add('valid_text');
        confirmpw_text.textContent = "✓ Valid input!";
        howMany['confirm'] = true;
    }
}


function email_regex(text) {
    const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    return regex.test(text);
}

function check_email() {

    var text = email.value;

    if(!email_regex(text)) {
        email.classList.remove('valid_input')
        email.classList.add('invalid_input');
        email_text.classList.remove('valid_text');
        email_text.classList.add('invalid_text');
        email_text.textContent = "✗ Expecting a correct address!";
        howMany['email'] = false;
    }
    else {
        email.classList.remove('invalid_input');
        email.classList.add('valid_input');
        email_text.classList.remove('invalid_text');
        email_text.classList.add('valid_text');
        email_text.textContent = "✓ Valid input!";
        howMany['email'] = true;
    }
}

function enable_button() {

    console.log(howMany);

    const isTrue = Object.values(howMany).every(
        value => value === true
    );

    if(isTrue === true) {
        submitBtn.disabled = false;
    }
    else {
        submitBtn.disabled = true;
    }
}

firstname.addEventListener('input', () => {
    check_firstname()
});

lastname.addEventListener('input', () => {
    check_lastname()
});

phonenumber.addEventListener('input', () => {
    check_phonenumber()
});

password.addEventListener('input', () => {
    check_password()
});

confirmpw.addEventListener('input', () => {
    check_confirm()
});

email.addEventListener('input', () => {
    check_email()
});

for(i = 0; i < allInputs.length; i += 1) {
    allInputs[i].addEventListener('input', () => {
        enable_button()
    })
};