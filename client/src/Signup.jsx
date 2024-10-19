import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('',{name,email,password});
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="EnterName"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="my-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="EnterName"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="my-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="EnterName"
                autoComplete="off"
                name="email"
                className="form-control my-2 rounded-0"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register{" "}
          </button>
          <p>Already have an account</p>
          <Link
            to="/login"
            className="btn btn-default bg-light w-100 rounded-0"
          >
            Login{" "}
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
