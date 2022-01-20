//PACKAGE IMPORTS
import React, { useState } from 'react';
import Input from '../../inputs/input-component/Input';
import Button from '../../utilities/button-component/Button';

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
//Sign up page for react app. Is Site configurable.
/*----------------------------------------------------------------------------*/

const AlertContent = ({ message }) => {
	return message ? (
		<p
			className={`${
				message.type === 'error' ? 'text-pink' : 'text-green'
			} border ${
				message.type === 'error' ? 'border-pink' : 'border-green'
			} py-30px mb-10px`}
		>
			{message.content}
		</p>
	) : null;
};

const Onboarding = ({
	useUser,
	updateUserName,
	updateStatus,
	backgroundImageRef,
	authMessaging
}) => {
	const [message, setMessage] = useState({ type: '', content: '' });
	const [supabaseUser, setSupabaseUser] = useState(null);
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	const { signUp } = useUser();

	function handleName(event) {
		setName(event.target.value);
	}

	function handleEmail(event) {
		setEmail(event.target.value);
	}

	function handlePassword(event) {
		setPassword(event.target.value);
	}

	const handleSignup = async (e) => {
		e.preventDefault();
		const { error, user } = await signUp({ email, password });
		if (error) {
			setMessage({ type: 'error', content: error.message });
		} else {
			if (user) {
				await updateUserName(user, name);
				setSupabaseUser(user);
				setMessage({
					type: 'note',
					content: 'Check your email for the confirmation link.'
				});
			} else {
				setMessage({
					type: 'note',
					content: 'Check your email for the confirmation.'
				});
			}
		}
	};

	return (
		<div
			className="w-100 mx-auto px-30px pb-25px pt-80px h-full"
			style={{
				backgroundImage: `url(${backgroundImageRef})`,
				backgroundSize: 'cover'
			}}
		>
			<div className="flex flex-column max-w-450px mx-auto w-full mt-80px mb-30px px-30px py-30px my-75px br-8px b-default bg-white box-shadow">
				<AlertContent message={message} />

				<div className="pointer mb-20px">
					<h1 className="py-20px"> Sign Up </h1>
					<p>{authMessaging}</p>
				</div>

				<form onSubmit={handleSignup}>
					<Input
						placeholder="Name"
						name="name"
						type="text"
						autoComplete="off"
						value={name}
						onChange={handleName}
						classes="mb-20px"
					/>
					<Input
						placeholder="Email"
						name="email"
						type="email"
						autoComplete="off"
						value={email}
						onChange={handleEmail}
						classes="mb-20px"
					/>
					<Input
						placeholder="Password"
						name="password"
						type="password"
						autoComplete="off"
						value={password}
						onChange={handlePassword}
						classes="mb-20px"
					/>
					<div>
						<Button
							classes="mt-30px mb-30px bg-black text-white h-40px px-30px w-200px br-full flex items-center pointer bw-1px f-w-800"
							label="Sign Up"
							disabled={
								name === null ||
								email === null ||
								password === null ||
								name === '' ||
								email === '' ||
								password === ''
							}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Onboarding;
