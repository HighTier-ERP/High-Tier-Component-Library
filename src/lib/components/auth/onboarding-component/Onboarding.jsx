//PACKAGE IMPORTS
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

//INTERNAL IMPORTS
import Input from '../../inputs/input-component/Input';
import Button from '../../utilities/button-component/Button';
import MotionDiv from '../../layout/motion-div-component/MotionDiv';

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
//Sign up page for react app. Is Site configurable.
/*----------------------------------------------------------------------------*/

const FadeUp = {
	hidden: { opacity: 0, y: 20, x: 0 }
};

const RegisterContent = ({ registerMessage, registerMessageSubContent }) => {
	return (
		<>
			<h2 className="pt-20px">{registerMessage}</h2>
			<h3 className="py-20px">{registerMessageSubContent}</h3>
		</>
	);
};

const AlertContent = ({ message }) => {
	return message.content ? (
		<span className="alert-content flex flex-row justify-center">
			<p
				className={classNames(
					'py-30px mb-10px border',
					message.type === 'error' ? 'text-pink' : 'text-green',
					message.type === 'error' ? 'border-pink' : 'border-green'
				)}
			>
				{message.content}
			</p>
		</span>
	) : null;
};

const PageTitle = ({ hidePageTitle, authMessaging, authComponent }) => {
	return (
		!hidePageTitle && (
			<div
				className={classNames(
					authComponent === 'login' ? 'pb-200px' : 'mb-20px'
				)}
			>
				<h1 className="py-20px">
					{authComponent === 'login' ? 'Login' : 'Sign Up'}
				</h1>
				<p>{authMessaging}</p>
			</div>
		)
	);
};

const Onboarding = ({
	useUser,
	updateUserName,
	updateStatus,
	backgroundImageRef,
	authMessaging,
	maxWidthClass,
	hidePageTitle,
	registerMessage,
	registerMessageSubContent
}) => {
	const [message, setMessage] = useState({ type: '', content: '' });
	const [supabaseUser, setSupabaseUser] = useState(null);
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	const { signUp } = useUser();

	const controls = useAnimation();
	const [ref, inView] = useInView();

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
				setSupabaseUser(user);
				await updateUserName(user, name);
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

	useEffect(() => {
		if (inView) {
			controls.start((i) => ({
				type: 'spring',
				bounce: 0.25,
				opacity: 1,
				y: 0,
				x: 0,
				transition: { ease: [0.17, 0.67, 0.83, 0.67], delay: i * 1 }
			}));
		}
	}, [controls, inView]);

	return (
		<MotionDiv
			componentRef={ref}
			custom={0.4}
			animation={controls}
			initialValue="hidden"
			variant={FadeUp}
			classes="bg-white h-full"
		>
			<div
				className="w-100 mx-auto pt-30px px-30px pb-80px h-full"
				style={{
					backgroundImage: `url(${backgroundImageRef})`,
					backgroundSize: 'cover'
				}}
			>
				<div
					className={classNames(
						maxWidthClass,
						'flex flex-column mx-auto w-full mt-80px mb-30px my-75px br-24px p-50px bg-white box-shadow'
					)}
				>
					<AlertContent message={message} />
					<PageTitle
						hidePageTitle={hidePageTitle}
						authMessaging={authMessaging}
						authComponent="signup"
					/>
					<form
						onSubmit={handleSignup}
						className="flex flex-column w-full bg-black-1 br-8px pt-30px pb-20px px-50px"
					>
						<RegisterContent
							registerMessage={registerMessage}
							registerMessageSubContent={
								registerMessageSubContent
							}
						/>
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
		</MotionDiv>
	);
};

export default Onboarding;
