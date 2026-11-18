import Header from './Header';
import { BG_URL } from '../utils/constants';
import { useState } from 'react';

const Login = () => {
	const [isSignInForm, setSignInForm] = useState(true)

	const toggleSignInForm = () => {
		setSignInForm(!isSignInForm)
	}
	
	return (
		<div>
			<Header />
			<div className="absolute">
				<img className="object-cover" src={BG_URL} alt="logo" />
			</div>
			<form className='w-3/12 absolute p-12 bg-black text-white my-36 mx-auto right-0 left-0 rounded-lg opacity-85'>
				<h1 className='font-bold text-3xl py-5'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

				{!isSignInForm && (
					<input type="text" placeholder="Full Name" className='p-2 my-4 bg-gray-700 w-full' />
				)}
				<input type="text" placeholder="Email Address" className='p-2 my-4 bg-gray-700 w-full' />
				<input type="password" placeholder="Password" className='p-2 my-4 bg-gray-700 w-full' />
				
				<button className='py-4 my-4 bg-red-700 w-full rounded-lg'>Sign In</button>
				<p className='py-4' onClick={toggleSignInForm}>
					{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."}
				</p>
			</form>
		</div>
	);
};

export default Login;