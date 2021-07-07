const controller = {};
controller.register = (data) => {
  if (data.firstName === "") {
    document.getElementById("first-name-error").innerHTML =
      "please input first name";
  } else {
    document.getElementById("first-name-error").innerHTML = "";
  }
  if (data.lastName === "") {
    document.getElementById("last-name-error").innerHTML =
      "please input last name";
  } else {
    document.getElementById("last-name-error").innerHTML = "";
  }
  if (data.email === "") {
    document.getElementById("email-error").innerHTML = "please input email";
  } else {
    document.getElementById("email-error").innerHTML = "";
  }
  if (data.password === "") {
    document.getElementById("password-error").innerHTML =
      "please input password";
  } else {
    document.getElementById("password-error").innerHTML = "";
  }
  if (data.comfirmPassword != data.password) {
    document.getElementById("comfirm-password-error").innerHTML =
      "please input password name";
  } else {
    document.getElementById("comfirm-password-error").innerHTML = "";
  }
};
controller.login = (data) => {
  if (data.email === "") {
    document.getElementById("email-error").innerHTML = "please input email";
  } else {
    document.getElementById("email-error").innerHTML = "";
  }
  if (data.password === "") {
    document.getElementById("password-error").innerHTML =
      "please input password";
  } else {
    document.getElementById("password-error").innerHTML = "";
  }
};
