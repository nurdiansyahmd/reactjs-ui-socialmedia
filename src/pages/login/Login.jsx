import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext";
import "./login.scss"

const Login = () => {
  const {login} = useContext(AuthContext);

  const handleLogin = () =>{
    login();
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Batavia Book.</h1>
          <p>
            Join a supportive community where you can share your story with your family and help you connect with the people in your life.
          </p>
          <span>Don't have account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login