import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const toggleSingInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate form data
    const message = checkValidData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    // Sign In / Sign Up
    if (message !== null) return;

    if (!isSignInForm) {
      // Sign Up
      createUserWithEmailAndPassword(auth, email.current.value,
        password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(name.current.value);
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/90746836?v=4"
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
            navigate("/browse");
          }).catch((error) => {
            setErrorMessage(error.message);
          });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          alert("Signed In");
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
    document.getElementsByTagName("input").value = " ";
  };

  return (
    <div>
      <div className="absolute">
        <Header />
        <img
          className="w-[1920px] h-screen"
          src="https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute bg-opacity-80 p-2 my-48 mx-auto right-0 left-0 font-bold text-white bg-black"
      >
        <h1 className="font-bold p-2 m-2 text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 w-full my-2 rounded-sm bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 rounded-sm w-full my-2 bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 rounded-sm w-full my-2 bg-gray-700"
        />
        <p className="text-red-700 font-semibold text-lg">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-2 mt-4 mb-4 w-full text-white bg-red-700"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          onClick={toggleSingInForm}
          className="cursor-pointer font-semibold my-2"
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a User? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
