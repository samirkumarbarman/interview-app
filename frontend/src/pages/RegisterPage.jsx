import React from 'react';

const RegisterPage = ({ userType }) => {
  return (
    <div className="register-page">
      <h1>Register as {userType}</h1>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;