import React from 'react';

const LoginPage = ({ userType }) => {
  return (
    <div className="login-page">
      <h1>Login as {userType}</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;