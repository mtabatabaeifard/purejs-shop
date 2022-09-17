import handleLogout from "./handleLogout.js";

const userNameInput = document.querySelector("#inputUser");
const passwordInput = document.querySelector("#inputPassword");
const signinBtn = document.querySelector("#signin-btn");
const loginSec = document.querySelector(".login-sec");
const loginText = document.querySelector(".login-text");

let loggedIn = localStorage.getItem("logged in");
if (loggedIn==="true"){
  loginSec.innerHTML = `<h1>you are logged in</h1>`;
  const logoutButton = document.createElement("button");
  logoutButton.innerText="Log out";
  logoutButton.classList='btn btn-danger';
  loginSec.appendChild(logoutButton);
  logoutButton.addEventListener('click', handleLogout);
  document.getElementsByTagName("footer")[0].style.display="none";
}
signinBtn.addEventListener("click", (e) => {
  e.preventDefault();

      if (!userNameInput.value) {
        userNameInput.style.border = "1px solid red";
        loginText.innerHTML += `<h5 class="alert-danger">error:username can't be blank</h5>`;
      }
      if (!passwordInput.value) {
        passwordInput.style.border = "1px solid red";
        loginText.innerHTML += `<h5 class="alert-danger">error:password can't be blank</h5>`;
      }
      const usersDataBase = localStorage.getItem("usersDataBase");
      const parsedUserDataBase = JSON.parse(usersDataBase) || [];
      if (parsedUserDataBase.length === 0) {
        loginText.innerHTML += `<h5 class="alert-danger">error: no users found please register first</h5>`;
      } else {
        parsedUserDataBase.forEach((user) => {
          if (userNameInput.value == user.username) {
            if (passwordInput.value == user.password) {
              loginSec.innerHTML = `
              <h1 class="alert-success">logged in Successfully!
        you can now <a href="/shop.html">shopping</a>
        </h1>
        <h3>Username is : ${user.username}</h3>
              `;
              localStorage.setItem("logged in",true);
            } else {
                loginText.innerHTML += `<h5 class="alert-danger">error: username or password is incorrect</h5>`;
            }
          } else {
            loginText.innerHTML += `<h5 class="alert-danger">error: user not found ~ 404</h5>`;
          }
        });
      }
  
});
