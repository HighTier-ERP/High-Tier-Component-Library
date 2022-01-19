//PACKAGE IMPORTS
import React, { useContext, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import Input from '../../inputs/input-component/Input';
import Button from '../../utilities/button-component/Button';
import MotionDiv from '../../layout/motion-div-component/MotionDiv';

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
//Auth page for HTCL. Is Site configurable.
/*----------------------------------------------------------------------------*/

const FadeUp = {
	hidden: { opacity: 0, y: 20, x: 0 }
};

const AlertContent = ({ message }) => {
	return message.content && (
			<p
				className={`${
					message.type === 'error'
						? 'text-pink'
						: 'text-green'
				} border ${
					message.type === 'error'
						? 'border-pink'
						: 'border-green'
				} py-30px mb-10px`}
			>
				{message.content}
			</p>
		)}
	)
}

const SignUpAnchor = ({ router, classes }) => {
	function goToOnboading() {
		router.push('/signup');
	}
	return (
		<span className="w-full" onClick={() => goToOnboading()}>
			<div className={classes}>
				Need an account? <br />
				<p className="f-w-600 f-s-18px">Sign Up</p>
			</div>
		</span>
	);
};

const PageTitle = ({ hidePageTitle }) => {
	return !hidePageTitle && (
		<div className="pb-200px">
			<h1 className="py-20px"> Login </h1>
			<p>{authMessaging}</p>
		</div>
	)
};

const Auth = ({
	backgroundImageRef,
	sessionContext,
	updateStatus,
	useUser,
	router,
	authMessaging,
	layoutFormat,
	hidePageTitle
}) => {
	const { isLoggedIn, setIsLoggedIn } = useContext(sessionContext);
	const [showPasswordInput, setShowPasswordInput] = useState(false);

	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [message, setMessage] = useState({ type: '', content: '' });

	const { user, signIn } = useUser();
	const [userStatus] = useState('ONLINE');

	const controls = useAnimation();
	const [ref, inView] = useInView();

	function handleEmail(event) {
		setEmail(event.target.value);
	}

	function handlePassword(event) {
		setPassword(event.target.value);
	}

	const handleSignin = async (e) => {
		e.preventDefault();

		setMessage({});

		setIsLoggedIn(true);

		const { error, user } = await signIn({ email, password });

		if (user) {
			await updateStatus(user, userStatus);
		}

		if (error) {
			setMessage({ type: 'error', content: error.message });
			setIsLoggedIn(false);
		}
		if (!password) {
			setMessage({
				type: 'note',
				content: 'Check your email for the magic link.'
			});
		}
	};

	useEffect(() => {
		if (user && isLoggedIn) {
			router.push('/dashboard');
		}
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
	}, [user, router, isLoggedIn, controls, inView]);

	return layoutFormat === 'row' ? (
		<MotionDiv
			componentRef={ref}
			custom={0.4}
			animation={controls}
			initialValue="hidden"
			variant={FadeUp}
			classes="bg-white h-full"
		>
			<div
				className="w-100 mx-auto px-30px pt-30px pb-80px font-work-sans h-full"
				style={{
					backgroundImage: `url(${backgroundImageRef})`,
					backgroundSize: 'cover'
				}}
			>
				<div className="flex flex-column flex-md-row">
					<div className="column-7 px-0 h-full">
						<form
							onSubmit={handleSignin}
							className="flex min-h-680px h-full"
						>
							<div className="flex flex-column mx-auto w-full max-w-450px pt-100px pt-80px-md-down">
							<AlertContent message={message} />
								<h2 className="py-20px">
									Good to see you again!
								</h2>

								<h3 className="pb-20px">Please sign in</h3>

								<div
									className="pointer pb-20px"
									onClick={() => {
										if (showPasswordInput) setPassword('');
										setShowPasswordInput(
											!showPasswordInput
										);
										setMessage({});
									}}
								>
									{`Or sign in with ${
										showPasswordInput
											? 'magic link'
											: 'password'
									}.`}
								</div>
								<Input
									placeholder="Email"
									name="email"
									type="email"
									autoComplete="off"
									value={email}
									onChange={handleEmail}
									classes="mb-20px"
								/>

								{showPasswordInput ? (
									<>
										<Input
											placeholder="Password"
											name="password"
											type="password"
											autoComplete="off"
											value={password}
											onChange={handlePassword}
											classes="mb-20px"
										/>
										<Button
											classes="mt-30px bg-black text-white h-40px px-30px w-200px br-full flex items-center pointer f-w-800 bw-1px"
											label="Login"
											type="submit"
											disabled={
												email === null ||
												password === null ||
												email === '' ||
												password === ''
											}
										/>
									</>
								) : (
									<Button
										classes="mt-30px bg-black text-white h-40px px-30px w-200px br-full flex items-center pointer f-w-800 bw-1px"
										label="Send Magic Link"
										type="submit"
										disabled={
											email === null ||
											email === '' ||
											!email.length
										}
									/>
								)}
								<SignUpAnchor router={router} classes="pointer my-20px relative bottom-10px py-20px px-30px bg-black-1 br-8px w-full text-decoration-none text-black flex flex-column" />
							</div>
						</form>
					</div>
					<div className="column-5 h-full flex flex-column items-center relative none-md-down">
						<div className="min-h-680px pt-200px mt-20px br-24px w-full px-30px bg-yellow-1">
							<PageTitle hidePageTitle={hidePageTitle} authMessaging={authMessaging} />
							<SignUpAnchor router={router} classes="pointer my-20px relative bottom-10px py-20px px-30px bg-black-1 br-8px w-full text-decoration-none text-black flex flex-column" />
						</div>
					</div>
				</div>
			</div>
		</MotionDiv>
	) : (
		<MotionDiv
			componentRef={ref}
			custom={0.4}
			animation={controls}
			initialValue="hidden"
			variant={FadeUp}
			classes="bg-white h-full"
		>
			<div
				className="w-100 mx-auto px-30px py-80px h-full"
				style={{
					backgroundImage: `url(${backgroundImageRef})`,
					backgroundSize: 'cover'
				}}
			>
				<div className="br-24px flex flex-column items-center mt-20px relative max-w-720px mx-auto none-md-dow p-50px bg-yellow-1 box-shadow">
					<PageTitle hidePageTitle={hidePageTitle} authMessaging={authMessaging} />
					<form
						onSubmit={handleSignin}
						className="flex flex-column w-full bg-black-1 br-8px pt-30px pb-20px px-50px"
					>
						<AlertContent message={message} />

						<h2>{welcomeMessage}</h2>

						<h3 className="pb-20px">
							{welcomeMessageSubContent}
						</h3>

						<div
							className="pointer pb-20px"
							onClick={() => {
								if (showPasswordInput) setPassword('');
								setShowPasswordInput(!showPasswordInput);
								setMessage({});
							}}
						>
							{`Or sign in with ${
								showPasswordInput ? 'magic link' : 'password'
							}.`}
						</div>
						<Input
							placeholder="Email"
							name="email"
							type="email"
							autoComplete="off"
							value={email}
							onChange={handleEmail}
							classes="mb-20px"
						/>

						{showPasswordInput ? (
							<>
								<Input
									placeholder="Password"
									name="password"
									type="password"
									autoComplete="off"
									value={password}
									onChange={handlePassword}
									classes="mb-20px"
								/>
								<Button
									classes="my-20px bg-black text-white h-40px px-30px w-200px br-full flex items-center pointer f-w-800 bw-1px"
									label="Login"
									type="submit"
									disabled={
										email === null ||
										password === null ||
										email === '' ||
										password === ''
									}
								/>
							</>
						) : (
							<Button
								classes="my-20px bg-black text-white h-40px px-30px w-200px br-full flex items-center pointer f-w-800 bw-1px"
								label="Send Magic Link"
								type="submit"
								disabled={
									email === null ||
									email === '' ||
									!email.length
								}
							/>
						)}
					</form>
					<SignUpAnchor router={router} classes="pointer mt-30px relative bottom-0px py-20px px-50px bg-black-1 br-8px w-full text-decoration-none text-black flex flex-column"/>
				</div>
			</div>
		</MotionDiv>
	);
};

export default Auth;
