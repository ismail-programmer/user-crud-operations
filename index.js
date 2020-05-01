const names = ["Ismail", "Zeeshan", "Adeeb"];

//js for show list of users
document.querySelector(".gen").addEventListener("click", gene);
function gene() {
  document.querySelector(".details-para").innerHTML = "";
  document.querySelector(".details-para").innerHTML +=
    "We have following users :" + " <br>";
  for (let i = 0; i < names.length; i++) {
    const element = names[i];
    document.querySelector(".details-para").innerHTML += `<li>${element}</li>`;
    document.querySelector(".details-para").style.backgroundColor =
      "rgba(128, 128, 128, 0.089)";
  }
}

//js for add user

document.querySelector(".add").addEventListener("click", handleClick);
function handleClick() {
  let name = prompt("What is your Name?");
  document.querySelector(
    ".details-para"
  ).innerHTML = `${name} Here's Your new account`;
  document.querySelector(".welcome").innerHTML =
    " warm welcome to your account ";
  names.push(name);
  console.log(names);
  document.querySelector(".details-para").style.backgroundColor = "#ade9ff";
}

//js for delete user
document.querySelector(".del").addEventListener("click", deletes);
function deletes() {
  let deleteName = prompt("Which User you want to delete?");
  if (names.includes(deleteName)) {
    document.querySelector(".details-para").innerHTML =
      "Your account has been deleted";
    document.querySelector(".welcome").innerHTML =
      "Hope so be there Soon AGAIN";
    var i = names.indexOf(deleteName);
    names.splice(i, 1);
    document.querySelector(".details-para").style.backgroundColor = "#ffadad";
  } else {
    document.querySelector(".details-para").innerHTML =
      " Sorry this account dose not detected";
    document.querySelector(".details-para").style.backgroundColor =
      "rgba(128, 128, 128, 0.089)";
  }
}

//js for log

document.querySelector(".login").addEventListener("click", Login);
function Login() {
  let loginName = prompt("Please Enter your NAME?");
  if (names.includes(loginName)) {
    document.querySelector(".details-para").innerHTML =
      " Here You go,Your account has been login";
    document.querySelector(".details-para").style.backgroundColor = "#c8ffad";
  } else {
    document.querySelector(".details-para").innerHTML =
      " Sorry,we did'nt found this account";
    document.querySelector(".details-para").style.backgroundColor =
      "rgba(128, 128, 128, 0.089)";
  }
}
