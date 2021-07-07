const components = {};
components.register = ` 
<div class="register-container">
  <div class="aside-right">
    <div class="header">
      <h3>XTP Chat</h3>
    </div>
    <form id="register-form">
      <div class="input-name">
        <div class="input-wrapper">
          <input type="text" placeholder="enter first name" name="firstName">
          <div class="error" id="first-name-error"></div>
        </div>
        <div class="input-wrapper">
          <input type="text" placeholder="enter last name" name="lastName">
          <div class="error" id="last-name-error"></div>
        </div>
      </div>
      <div class="input-wrapper">
        <input type="email" placeholder="Email" name="email">
        <div class="error" id="email-error"></div>
      </div>
      <div class="input-wrapper">
        <input type="password" placeholder="password" name="password">
        <div class="error" id="password-error"></div>
      </div>
      <div class="input-wrapper">
        <input type="password" placeholder="comfirm Password" name="comfirmPassword">
        <div class="error" id="comfirm-password-error"></div>
      </div>
      <div class="form-action">
        <span id="redirect-to-login">
         <p>Already have an account ? Login</p>
        </span>
        <button class="btn" id = "btn-register" type="submit">Register</button>
      </div>

    </form>
  </div>
</div>`;
components.login = `
<div class="register-container">
  <div class="aside-right">
    <div class="header">
      <h3>XTP Chat</h3>
    </div>
    <form id="login-form">
      <div class="input-wrapper">
        <input type="email" placeholder="Email" name="email">
        <div class="error" id="email-error"></div>
      </div>
      <div class="input-wrapper">
        <input type="password" placeholder="password" name="password">
        <div class="error" id="password-error"></div>
      </div>
      <div class="form-action"></div>
        <button class="btn" id = "btn-login" type="submit">Login</button>
      </div>

    </form>
  </div>
</div>

`;
