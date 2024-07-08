import React,{useState} from 'react'
import "../App.css";



function Login() {
    const [login, setLogin] = useState(false);



    function LoginShow(){
        return(
            <>
    <div className="login-container">
            <div className="login-box">
              <h2>Login Form</h2>
              <form>
                <label>Name</label>
                <input type="text" placeholder="Enter username" />
                <br />
                <label>Password:</label>
                <input type="password" placeholder="Enter password" />
                <br />
                <button type="button" onClick={()=>{return setLogin(false); console.log(login)}}>Login</button>
              </form>
            </div>
          </div>
    
            
            
            
            
            </>
        )
    }


    function SignUpShow(){
        return(
            <>
    <div className="login-container">
            <div className="login-box">
              <h2>SignUp Form</h2>
              <form>
                <label>Name</label>
                <input type="text" placeholder="Enter username" />
                <br />
                <label>Password:</label>
                <input type="password" placeholder="Enter password" />
                <br />
                <button type="submit" onClick={()=>{return setLogin(true); console.log(login)}}>SignUp</button>
              </form>
            </div>
          </div>
    
            
            
            
            
            </>
        )
    }


    return (
<>
{login ==false?  <SignUpShow/> : login == true ? <LoginShow /> : null}




</>
)
}


export default Login