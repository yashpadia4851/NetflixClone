import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, addUser } from '../utils/userslice';
import { LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { ChangeLanguage } from '../utils/configSlice'
// import lang from '../utils/languageConstants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ShowGptSearch = useSelector((store) => store.gpt.ShowGptSearch);

  const user = useSelector(store => store.user);

  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/erorr");
    });
    // const auth = getAuth();
    // signOut(auth).then(() => {
    //   // Sign-out successful.
    // }).catch((error) => {
    //   // An error happened.
    // });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe()
  }, []);


  const GPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(ChangeLanguage(e.target.value))
  }


  return (
    <div className='absolute w-screen px-8 py-2 z-10 flex flex-col md:flex-row justify-between bg-gradient-to-b from-black'>
      <img className='w-44 mx-auto md:mx-0' src={LOGO} alt='Logo' />
      {user &&

        <div className='flex justify-between'>
          {ShowGptSearch &&
            <select className='p-2 bg-gray-700 m-5 text-white rounded-lg' onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (<option key={lang.languages} value={lang.languages}>{lang.name}</option>))}
            </select>}
          <button className='m-4 py-3 px-2 bg-red-700 text-white rounded-lg' onClick={GPTSearchClick}>{ShowGptSearch ? "Home Page" : "GPT Search"}</button>
          <img className='hidden md:block w-10 m-8 md:m-0 md:w-20 rounded-full' src={user?.photoURL} alt="User Icon" />
          <button onClick={handleSignout} className='mx-1 md:mx-6 text-white font-bold'>(Sign Out)</button>
        </div>}
    </div>
  );
}

export default Header;
