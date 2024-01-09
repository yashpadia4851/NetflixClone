import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser , addUser} from '../utils/userslice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  const handleSignout = () => {
    // console.log(user)
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/erorr")
    });
  };

  useEffect(() => {
    const unsubscribe =  onAuthStateChanged( auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const {uid , email , displayName , photoURL} = user;
        dispatch(addUser({uid:uid , email : email , displayName : displayName , photoURL : photoURL}));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe()
}, []);

  return (
    <div className='absolute w-screen px-8 py-2 z-10 flex justify-between'>
      <img className='w-48' src={LOGO} alt='Logo' />
    { user && <div className='flex'>
        <img className='w-20 rounded-3xl' src={user?.photoURL} xalt="User Icon" />
        <button onClick={handleSignout} className='mx-5 text-white font-bold'>(Sign Out)</button>
      </div>}
    </div>
  );
}

export default Header;
