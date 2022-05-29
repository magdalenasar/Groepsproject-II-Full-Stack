import React from "react";

const Login = props => {
  const { className } = props;
  return (
    <>
      <div className={className} id="myForm">
        <form action="" class="form-container">
          <h1>Login</h1>

          <label for="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter Email" name="email" required />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <button type="submit" class="btn">
            Login
          </button>
          <button type="button" class="btn cancel" onclick="closeForm()">
            Close
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
