 let card = document.querySelector('.card');
    function visitProfile(){
      // console.log(localStorage);
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user);

      if (!user) {
    window.location.href = "signIn.html";
  } 
        card.innerHTML=" ";
         const div = document.createElement("div");
    div.className = "content";
    div.innerHTML = `
   <img src=" ${user.image}" alt"proile image" class="profile-img" />
      <h2> ${user.firstName} ${user.lastName} </h2>
      <h4>${user.username}</h4>
      <h4>
        Age: ${user.age}<br>
        Address: ${user.address}<br>
        Gmail: ${user.email}</h4>
      <p>Creating beautiful digital experiences</p>

     <div>
      <button class="contact-btn" onclick="logout()">Log Out</button>
     <button class="contact-btn" onclick="window.location.href='myCart.html'">My Cart</button>

      </div>
    `;
    card.appendChild(div);
    }
    setTimeout(visitProfile(), 2000);

    function logout(){
      localStorage.removeItem("user");
    window.location.href = "signIn.html";
    }
