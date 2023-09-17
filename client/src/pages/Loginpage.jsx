import React from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../UserContext";
export default function Loginpage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [redirect, setRedirect] = React.useState(false);
  const { setuser } = useContext(UserContext);
  async function loginUser(ev) {
    ev.preventDefault();
    try {
      const { data } = await axios.post("/login", { email, password });
      setRedirect(true);
      setuser(data);
    } catch (e) {
      alert("there is some error in backend");
    }
  }
  if (redirect) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div>
      {/* <h1 className="text-center">This is Login page</h1> */}
      <div className="grow flex items-center justify-around -mt-4 mb-4">
        <div>
          <h1 className="mt-4 text-center text-4xl text-primary">Login Page</h1>
          <form
            action=""
            className=" max-w-md text-center mt-3"
            onSubmit={loginUser}
          >
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
              Login
            </button>
          </form>
          <div className="my-2 py-2">
            <h2 className="text-center text-gray-500">
              Do have an account ?{" "}
              <Link className="text-black underline" to={"/register"}>
                Register here
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
