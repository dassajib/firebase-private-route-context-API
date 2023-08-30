import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {

  const { signInWithGoogle,signInWithGithub } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <h2 className="text-center">Login Form</h2>
      <hr />
      <form onClick={handleSubmit} className="mt-4 text-center">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <div>
          <button type="submit" className="btn btn-primary mx-2">
            Login
          </button>
          <button onClick={signInWithGoogle} type="submit" className="btn btn-primary mx-2">
            Google Sign In
          </button>
          <button onClick={signInWithGithub} type="submit" className="btn btn-primary mx-2">
            Github SIgn In
          </button>
        </div>
        <div className="mt-2">
          <Link to="/registration">Haven's Register?</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
