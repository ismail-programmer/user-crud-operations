var users = ['ismail', 'ali'];

// ! add user
aded.onclick = function() {
  var user = prompt('Enter your name?');

  users.push(user);
  active.setAttribute('class', 'activeSucess');
  active.innerHTML = user + ' have been aded to list';
};

// ! generate

generate.onclick = function() {
  active.setAttribute('class', 'activeSucess');
  active.innerHTML = '';

  for (var i = 0; i < users.length; i++) {
    active.innerHTML += users[i] + ' <br>';
  }
};

// ! delete  user

deleteuser.onclick = function() {
  var deleteUser = prompt('which user you want to delete?');

  for (var i = 0; i < users.length; i++) {
    if (deleteUser === users[i]) {
      users.splice(i, 1);
      active.setAttribute('class', 'activeSucess');
      active.innerHTML = deleteUser + ' have been deleted.';
    } else {
      active.setAttribute('class', 'activeFailed');
      active.innerHTML = 'Invalid user';
    }
  }
};

//! Login user

login.onclick = function() {
  var login = prompt('Your name?');

  for (var i = 0; i < users.length; i++) {
    if (login === users[i]) {
      active.setAttribute('class', 'activeSucess');
      document.getElementById('name').innerHTML = 'Hello ' + login;
      active.innerHTML = 'logged in';
      break;
    } else {
      active.setAttribute('class', 'activeFailed');
      document.getElementById('name').innerHTML = 'First add in users!';
      active.innerHTML = 'You are not aded in users';
    }
  }
};
