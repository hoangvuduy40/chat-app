const view = {};

view.setActiveScreen = (screenName) => {
  switch (screenName) {
    case "register":
      document.getElementById("app").innerHTML = components.register;
      const registerfrom = document.getElementById("register-form");
      registerfrom.addEventListener("submit", (event) => {
        event.preventDefault();
        const data = {
          firstName: registerfrom.firstName.value,
          lastName: registerfrom.lastName.value,
          email: registerfrom.email.value,
          password: registerfrom.password.value,
          comfirmPassword: registerfrom.comfirmPassword.value,
        };
        controller.register(data);
        console.log(data);
      });
      const loginForm = document.getElementById("redirect-to-login");
      loginForm.addEventListener("click", () => {
        document.getElementById("app").innerHTML = components.login;
      });
      loginForm.addEventListener("mouseover", () => {
        loginForm.style.color = "blue";
      });
      loginForm.addEventListener("mouseout", () => {
        loginForm.style.color = "black";
      });
      break;
    case "login":
      document.getElementById("app").innerHTML = components.login;
      const login = document.getElementById("login-form");
      login.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = {
          email: login.email.value,
          password: login.password.value,
        };
        controller.login(data);
        console.log(data);
      });
      break;
    default:
      break;
  }
};
