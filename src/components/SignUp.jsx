import React from 'react'

function SignUp() {
  return (
<>
<div className="login-container">
        <div className="login-box">
          <h2>Sign Up Form
          </h2>
          <form>
            <label>Name</label>
            <input type="text" placeholder="Enter username" />
            <br />
            <label>Password:</label>
            <input type="password" placeholder="Enter password" />
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>



</>
)
}

export default SignUp