import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";

function Login() {
  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  // Side effects
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, password]);

  // Functions
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await login({ user, password }).unwrap();
      dispatch(setCredentials({ ...userData, user }));
      setUser("");
      setPassword("");
      navigate("/dashboard");
    } catch (err) {
      if (!err?.originalStatus) {
        setErrMsg("No server Response");
      } else if (err.originalStatus?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.originalStatus?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login failed");
      }
      errRef.current.focus();
    }
  };

  const handleUserInput = (e) => setUser(e.target.value);

  const handlePasswordInput = (e) => setPassword(e.target.value);

  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="login-wrapper">
      <section className="login">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="large"
              ref={userRef}
              value={user}
              onChange={handleUserInput}
              autoComplete="off"
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="large"
              value={password}
              onChange={handlePasswordInput}
              required
            />
          </div>

          <button className="btn-primary large">Sign In</button>
        </form>
      </section>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}></p>
    </div>
  );

  return content;
}

export default Login;
