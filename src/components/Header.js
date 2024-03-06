import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { logo } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)
  const dispatch = useDispatch();

  const handleSignOut = () => {
    console.log("signing out");
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribing when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute z-10
     px-2 justify-between py- 1 bg-gradient-to-b from-black w-full flex">
      <img className="z-10 w-44" src={logo} alt="logo"></img>
      {user && <div className="flex">
        <p className="w-8 my-16 text-xl font-bold text-white mx-12">{user.displayName}</p>
        <img className="w-12 h-12 my-12 mr-0" src={user.photoURL} alt="user icon"></img>
        <button onClick={handleSignOut} className="p-2 m-10 font-bold text-white bg-red-600 rounded-lg cursor-pointer">Sign Out</button>
      </div>}
    </div>
  );
};

export default Header;
