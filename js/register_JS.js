console.log("Register JS file is loaded.");
const registerForm = document.getElementById('Form-Register');

// Data from the registration form
const Username = document.getElementById('UserName1');
const email = document.getElementById('EmailInput1');
const password = document.getElementById('inputPassword');
const repassword = document.getElementById('ReinputPassword');

// Error from the registration form
const UsernameError = document.getElementById('UserName1-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('inputPassword-error');
const repasswordError = document.getElementById('ReinputPassword-error');

registerForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Validate the form data
    if (!Username.value) {
        UsernameError.style.display = 'block';
    } else {
        UsernameError.style.display = 'none';
    }

    if (!email.value) {
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }


    if (!password.value) {
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }
        
    if (password.value !== repassword.value) {
        repasswordError.style.display = 'block';
    } else {
        repasswordError.style.display = 'none';
    }

    if (!repassword.value) {
        repasswordError.style.display = 'block';
        repasswordError.innerHTML = 'Please re-enter your password';
    }

    //Send data
    if (Username.value && email.value && password.value && (password.value === repassword.value)) {
        console.log('Form submitted successfully!');
        // Here you can add code to send the data to the server or perform other actions
    
        const user = {
            userID: Username.value,
            email: email.value,
            password: password.value
        };
    }
})