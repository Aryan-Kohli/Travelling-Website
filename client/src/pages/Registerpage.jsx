import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Registerpage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post("/register", { name, email, password });
      alert("registered Successfully");
    } catch (e) {
      alert("not regsitered");
    }
  }
  return (
    <div>
      {/* <h1 className="text-center">This is Register page</h1> */}
      <div className="grow flex items-center justify-around -mt-4 mb-4">
        <div>
          <h1 className="mt-4 text-center text-4xl text-primary">
            Register Page
          </h1>
          <form
            action=""
            className=" max-w-md text-center mt-3"
            onSubmit={registerUser}
          >
            <input
              type="text"
              placeholder="john polr"
              className="border-4 border-gray"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
            <input
              type="email"
              placeholder="Yourmail@gmail.com"
              className="border-4 border-gray"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <input
              type="password"
              placeholder="Password"
              className="border-4 border-gray"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <button id="longinbtn" className="text-white bg-primary">
              Register
            </button>
          </form>
          <div className="my-2 py-2">
            <h2 className="text-center text-gray-500">
              Already have an account ?{" "}
              <Link className="text-black underline" to={"/login"}>
                Login here
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
