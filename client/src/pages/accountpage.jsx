import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { Navigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import Placespage from "./Placespage";
export default function accountpage() {
  const { ready, user, setUser } = useContext(UserContext);
  const [out, setOut] = React.useState(null);
  let { subpage } = useParams();
  if (subpage === undefined) subpage = "profile";
  if (!ready) {
    return "Loading...";
  }
  if (ready && !user && !out) {
    return <Navigate to={"/login"} replace={true} />;
  }
  console.log(subpage);
  function linkClasses(type = null) {
    let classes = "py-2 px-6";
    if (type === subpage) {
      classes += " bg-primary text-white rounded-full ";
    }
    return classes;
  }
  async function logout() {
    await axios.post("/logout");
    setOut("/");
    setUser(null);
  }
  if (out) {
    console.log("redirected to index");
    return <Navigate to={out} />;
  }
  return (
    <div>
      <nav className="w-full flex mt-8 gap-2 justify-center">
        <Link className={linkClasses("profile")} to={"/account/"}>
          My Profile
        </Link>
        <Link className={linkClasses("bookings")} to={"/account/bookings"}>
          My booking
        </Link>
        <Link className={linkClasses("places")} to={"/account/places"}>
          My accomodations
        </Link>
      </nav>
      {subpage === "profile" && (
        <div className="text-center max-w-lg  text-center text-2xl mt-5 mx-auto">
          You are logged in as {user.name} & {user.email}
          <br />
          <button
            className="bg-primary rounded-lg mt-4 text-xl px-6 py-2 text-white"
            onClick={logout}
          >
            Log Out{" "}
          </button>
        </div>
      )}
      {subpage === "places" && <Placespage />}
    </div>
  );
}
