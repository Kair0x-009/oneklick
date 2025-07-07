

let signinForm = document.getElementById('signinForm');
// signinForm.addEventListener('submit', validate); // Attach the validate function to the form submission event

async function validate(e) {
    // e.preventDefault(); // Prevent the default form submission

    let signinusername = signinForm.querySelector('input[name="username"]').value.trim();
    let signinpassword = signinForm.querySelector('input[name="password"]').value.trim();

    // Check if fields are filled before sending request
    if (!signinusername || !signinpassword) {
        alert('Please fill in all fields.');
        return false;
    }

    try {
        let res = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: signinusername,
                password: signinpassword,
                expiresInMins: 30, // optional
            }),
        });

        let data = await res.json();

        console.log(data);
        localStorage.setItem("user", JSON.stringify(data));

        if (!res.ok) {
            alert('Login failed: ' + (data.message || 'Invalid credentials'));
            return false;
        }

        console.log(data); // Token, user info
        alert('Sign In successful for ' + signinusername);
        window.location.href = "profilePage.html";// Allow form submission or redirect
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
        return false;
    }
    // window.location.href = "profilePage.html";
}

  let signupForm = document.getElementById('SignUpForm');
//   signupForm.addEventListener('submit', validate);
async function SignUpValidate() {
    // e.preventDefault(); // Prevent the default form submission
    let firstName = signupForm.querySelector('#FirstName').value.trim();
    let lastName = signupForm.querySelector('#LastName').value.trim();
    let username = signupForm.querySelector('#Username').value;
    let email = signupForm.querySelector('#Email').value;
    let age = signupForm.querySelector('#age').value;
    let password = signupForm.querySelector('#Password').value;


    let res = await fetch('https://dummyjson.com/users/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    firstName: firstName,
    lastName: lastName,
    age: age,
    username: username,
    email: email,
    password: password,
  })
})
    let data = await res.json();
    localStorage.setItem("user", JSON.stringify(data));
    console.log(data);
    // visitProfile(data);
    //  window.location.href = "profilePage.html";
    alert('Sign Up successful MR. ' + username);
    return true; // Allow form submission
}

