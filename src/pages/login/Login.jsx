import { Link, useNavigate } from "react-router-dom";
import "./login.scss"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);

  const handleLogin = () => {
    login();
    navigate("/")
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome to <span>bStage</span></h1>
          <p>
            Bstage is the place to express your ideas in music and share with other musicians.
          </p>
          <span>Don't have an account?</span>
          <Link to="/register">
          <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
          <input action="text" placeholder="Username"></input>
          <input action="password" placeholder="Password"></input>
          <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;