let signinForm = document.getElementById("signinForm");
let faultMsg = document.getElementById("signin-fault-message")

async function validate(e) {
  // e.preventDefault(); // Prevent the default form submission

  let signinusername = signinForm
    .querySelector('input[name="username"]')
    .value.trim();
  let signinpassword = signinForm
    .querySelector('input[name="password"]')
    .value.trim();
    
  if (!signinusername || !signinpassword) {
    return false;
  }
  try {
    let res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signinusername,
        password: signinpassword,
      }),
    });
    let data = await res.json();
    localStorage.setItem("user", JSON.stringify(data));
    if (!res.ok) {
      faultMsg.innerHTML="Invalid credentials";
      console.log(history);
      return false;
    }
    window.location.href = "profilePage.html";
  } catch (error) {
    console.error("Error:", error);
    faultMsg.innerHTML="An error occured. Please try again!";
    return false;
  }
}


let signupForm = document.getElementById("SignUpForm");
 let signUpFaultMsg = document.getElementById("signup-fault-message");
async function SignUpValidate() {
  let firstName = signupForm.querySelector("#FirstName").value.trim();
  let lastName = signupForm.querySelector("#LastName").value.trim();
  let username = signupForm.querySelector("#Username").value;
  let email = signupForm.querySelector("#Email").value;
  let age = signupForm.querySelector("#age").value;
  let password = signupForm.querySelector("#Password").value;
  let address = signupForm.querySelector("#Address").value;


   if (!firstName || !lastName || !username || !email || !age || !password || !address) {
    signUpFaultMsg.innerHTML = "Please fill out all fields.";
    return false;
  }

  if (password.length < 6) {
    signUpFaultMsg.innerHTML = "Password must be at least 6 characters.";
    return false;
  }

 try {
    let res = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        username,
        email,
        password,
        address,
      }),
    });

    let data = await res.json();
    localStorage.setItem("age", age);
    localStorage.setItem("address", address);
    localStorage.setItem("user", JSON.stringify(data));

    console.log(data);
    window.location.href = "profilePage.html";
    return true;
  } catch (error) {
    console.error("Error:", error);
    signUpFaultMsg.innerHTML = "An error occurred. Please try again!";
    return false;
  }
}