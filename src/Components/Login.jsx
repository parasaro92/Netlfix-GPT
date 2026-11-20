import Header from './Header';
import { BG_URL, USER_AVATAR } from '../utils/constants';
import { useRef, useState } from 'react';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
	const dispatch = useDispatch()
	const [isSignInForm, setSignInForm] = useState(true)
	const [errorMsg, setErrorMsg] = useState(null)
	const navigate = useNavigate()

	const toggleSignInForm = () => {
		setSignInForm(!isSignInForm)
	}

	const name = useRef(null)
	const email = useRef(null)
	const password = useRef(null)

	const handleButtonClick = () => {
		// Validate the form data
		const msg = checkValidData(
			!isSignInForm ? name.current.value : '',
			email.current.value,
			password.current.value,
			!isSignInForm
		)
		setErrorMsg(msg)

		if (msg) return

		if (!isSignInForm) {
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed up 
					const user = userCredential.user;
					updateProfile(user, {
						displayName: name.current.value, photoURL: USER_AVATAR
					}).then(() => {
						const {uid, email, displayName, photoURL} = auth.currentUser;
						dispatch(
							addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL})
						)
						navigate("/browse")
					}).catch((error) => {
						// navigate("/")
						setErrorMsg(error.message)
					})
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMsg(errorCode + "-" + errorMessage)
				});

		} else {
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed in 
					const user = userCredential.user;
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMsg(errorCode + "-" + errorMessage)
					navigate("/")
				});
		}
	}

	return (
		<div>
			<Header />
			<div className="absolute">
				<img className="object-cover" src={BG_URL} alt="logo" />
			</div>
			<form
				className='w-3/12 absolute p-12 bg-black text-white my-36 mx-auto right-0 left-0 rounded-lg opacity-85'
				onClick={(e) => e.preventDefault()}
			>
				<h1 className='font-bold text-3xl py-5'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

				{!isSignInForm && (
					<input ref={name} type="text" placeholder="Full Name" className='p-2 my-4 bg-gray-700 w-full' />
				)}
				<input ref={email} type="text" placeholder="Email Address" className='p-2 my-4 bg-gray-700 w-full' />
				<input ref={password} type="password" placeholder="Password" className='p-2 my-4 bg-gray-700 w-full' />
				<p className='text-red-500 font-bold text-lg py-2'>{errorMsg}</p>

				<button className='py-4 my-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
				<p className='py-4' onClick={toggleSignInForm}>
					{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."}
				</p>
			</form>
		</div>
	);
};

export default Login;
