import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom"; 
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }
    return (
      <div className="absolute px-2 justify-between py- 1 bg-gradient-to-b from-black w-full flex">
        <img className="z-10 w-44" src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png" alt="logo"></img>
        {user && <div className="flex">
          <p className="w-8 my-16 font-bold mx-10">{user.displayName}</p>
          <img className="w-8 my-12 " src={user.photoURL} alt="user icon"></img>
          <button onClick={handleSignOut} className="p-2 m-10 font-bold text-white bg-red-600 rounded-lg">Sign Out</button>
        </div>}
      </div>
    );
  };

  export default Header;
