import { Link } from "react-router-dom";
import "./register.scss"

const Register = () => {

  
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1><span>bStage</span></h1>
          <p>Connect</p>
          <p>Meet</p>
          <p>Jam</p>
          <p>Gig</p>
     
          <span>Don't have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
          
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
          <input action="text" placeholder="Username"></input>
          <input action="email" placeholder="Email"></input>
          <input action="password" placeholder="Password"></input>
          <input action="text" placeholder="Name"></input>
          <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;