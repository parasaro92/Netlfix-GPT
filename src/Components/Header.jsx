import { memo } from 'react';
import { LOGO, USER_AVATAR } from '../utils/constants';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className='flex p-2'>
          <img
            className='w-12 h-12 m-2'
            src={user?.photoURL}
            alt="usericon"
          />
          <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default memo(Header);