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
    <section className="login">
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}></p>

      <h1>Login first</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          value={user}
          onChange={handleUserInput}
          autoComplete="off"
          required
        />

        <label htmlFor="password">Username:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordInput}
          required
        />

        <button>Sign In</button>
      </form>
    </section>
  );

  return content;
}

export default Login;
