import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkvaliddata } from "../utils/validdata"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userslice';
import { USER_AVATAR , BACKGROUND_IMG } from '../utils/constants'

const Login = () => {

    const [signInForm, setSignInform] = useState(true);
    const [errormessage, setErrorMessage] = useState(true);
    const dispatch = useDispatch();
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const handleonclick = () => {
        // Validdata the form data
        const message = checkvaliddata(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;
        if (!signInForm) {
            //Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // users Name API 
                    updateProfile(user, {
                        displayName: name.current.value ,
                        photoURL:  USER_AVATAR,
                        
                      }).then(() => {
                        // Profile updated
                        const {uid , email , displayName , photoURL} = auth.currentUser;
                        dispatch(addUser({uid:uid , email : email , displayName : displayName , photoURL : photoURL}));

                      }).catch((error) => {
                        // An error occurred 
                        setErrorMessage(error.message)
                      });
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " " + errorMessage)
                });
        }
        else {
            //Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " Your Sign In is invalid " + errorMessage)
                });
        }
    }

    const togglebtn = () => {
        setSignInform(!signInForm);
    };

    return (
        <>
            <Header />
            <div className='absolute'>
                <img src={ BACKGROUND_IMG } alt="" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='absolute bg-black w-3/12 my-36 mx-auto left-0 right-0 text-center text-white p-8 bg-opacity-80'>
                <h1 className='font-bold text-3xl p-5 text-center cursor-default'>{signInForm ? "Sign In" : "Sign Up"}</h1>

                {!signInForm && <input type="text" ref={name} placeholder='Full Name' className='p-3 my-3 w-full  bg-slate-600 rounded-md' />}

                <input ref={email} type="text" placeholder='Email Address' className='p-3 my-3 w-full  bg-slate-600 rounded-md' />

                <input ref={password} type="password" placeholder='Passward' className='p-3 my-3 w-full  bg-slate-600 rounded-md' />

                <p className='text-red-600 font-bold text-lg p-2'>{errormessage}</p>

                <button className='p-4 my-6 bg-red-600 rounded-md w-full hover:bg-red-500' onClick={handleonclick}>Submit</button>


                <h4 onClick={togglebtn} className='cursor-pointer '>{signInForm ? "New to Netflix? Sign Up Now" : "Already Ragistered? Sign In Now"}</h4>
            </form>


            
            <footer>

            </footer>
        </>
    );
}

export default Login;
