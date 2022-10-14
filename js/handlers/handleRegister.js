import handleLogout from "./handleLogout.js";

const userNameInput = document.querySelector("#inputUserName");
const passwordInput = document.querySelector("#inputPassword");
const address = document.querySelector("#inputAddress");
const city = document.querySelector("#inputCity");
const state = document.querySelector("#inputState");
const zip = document.querySelector("#inputZip");
const registerButton = document.querySelector("#register-btn");
const regText = document.querySelector("#reg-text");
const registerSec = document.querySelector(".register-sec");
let emptyField = false;



let loggedIn = localStorage.getItem("logged in");
if (loggedIn==="true"){
  registerSec.innerHTML = `<h1>you are logged in</h1>`;
  const logoutButton = document.createElement("button");
  logoutButton.innerText="Log out";
  logoutButton.classList='btn btn-danger';
  registerSec.appendChild(logoutButton);
  logoutButton.addEventListener('click', handleLogout);
  document.getElementsByTagName("footer")[0].style.display="none";
}

let duplicatedUserName = false;
registerButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (!userNameInput.value) {
    userNameInput.style.border = "1px solid red";
    regText.innerHTML += `<h5 class="alert-danger">error:username cannot be blank</h5>`;
    emptyField = true;
  }else{
    emptyField = false;
    city.style.border = "1px solid";

  }
  if (!passwordInput.value) {
    passwordInput.style.border = "1px solid red";
    regText.innerHTML += `<h5 class="alert-danger">error:password cannot be blank</h5>`;
    emptyField = true;
  }else{
    emptyField = false;
    city.style.border = "1px solid";

  }
  if (!address.value) {
    address.style.border = "1px solid red";
    regText.innerHTML += `<h5 class="alert-danger">error:address cannot be blank</h5>`;
    emptyField = true;
  }else{
    emptyField = false;
    city.style.border = "1px solid";

  }
  if (!city.value) {
    city.style.border = "1px solid red";
    regText.innerHTML += `<h5 class="alert-danger">error:city cannot be blank</h5>`;
    emptyField = true;
  }else{
    city.style.border = "1px solid";
    emptyField = false;


  }
  if (!state.value) {
    state.style.border = "1px solid red";
    regText.innerHTML += `<h5 class="alert-danger">error:state cannot be blank</h5>`;
    emptyField = true;
  }else{
    emptyField = false;
    city.style.border = "1px solid";

  }
  if (!zip.value) {
    zip.style.border = "1px solid red";
    regText.innerHTML += `<h5 class="alert-danger">error:zip cannot be blank</h5>`;
    emptyField = true;
  }else{
    emptyField = false;
    city.style.border = "1px solid";

  }
  const usersDataBase = localStorage.getItem("usersDataBase");
  const parsedUserDataBase = JSON.parse(usersDataBase) || [];
  parsedUserDataBase.forEach((userData) => {
    if (userData.username == userNameInput.value) {
      userNameInput.style.border = "1px solid red";
      regText.innerHTML += `<h5 class="alert-danger">error:username must be unique please choose another username!</h5>`;
      duplicatedUserName = true;
    } else {
      userNameInput.style.border = "1px solid grey";
      regText.innerHTML = `<h1>Register
      </h1>`;
      duplicatedUserName = false;
    }
  });
  if (duplicatedUserName == false && emptyField== false) {
    const userDetails = {
      username: userNameInput.value,
      password: passwordInput.value,
      address: address.value,
      city: city.value,
      state: state.value,
      zip: zip.value,
    };
    const CurrentUserDataBase = parsedUserDataBase;
    CurrentUserDataBase.push(userDetails);
    localStorage.setItem("usersDataBase", JSON.stringify(CurrentUserDataBase));
    regText.innerHTML += `<h5 class="alert-success">User created Successfully!
    you can now <a href="/login.html">login</a>
    </h5>`
  }
});
