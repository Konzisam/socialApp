import { Link, useNavigate } from "react-router-dom";
import "./login.scss"
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/")
    } catch (err) {
      // setErr(err.response.data);
      setErr(err.response ? err.response.data : "An unexpected error occurred.");
      console.error("Error during login:", err.response ? err.response.data : err.message);
    }
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
          <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;