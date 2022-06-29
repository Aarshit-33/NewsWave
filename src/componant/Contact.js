import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

export default function Contact() {
	const {
		register,
		handleSubmit,
		getValues,
		watch,
		formState: { errors },
	} = useForm({
		mode: 'all',
	});
	const onSubmit = (data) => {
		let x = data;
		console.log('x is : ', x);
		let y = getValues();
		console.log('y is :', y);
	};
	console.log('err ', errors);
	// console.log(watch()); // watch input value by passing the name of it

	const [user, setUser] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [templateParams, setTemplateParams] = useState({
		from_name: 'James',
		email: 'aarshitjolapara@gmail.com',
		to_mail: 'aarshitjolapara11@gmail.com', //THIS IS FIXED 1 admin email
		rep_to: 'aarshitgajjar11@gmail.com', // email address of the sender 2 vistor email
		message: 'Check this out!',
		reply_to_mail: 'bharatjolapara5@gmail.com', // not required, but nice to have 1
		reply_to: 'redskullff99@gmail.com', // not required, but nice to have 2
	});

	const mail = () => {
		emailjs
			.send(
				'default_service',
				'template_54pf78g',
				templateParams,
				'ATdvGiTE6OR9JzHNT',
			)
			.then(
				(response) => {
					console.log('SUCCESS!', response.status, response.text);
					alert('Mail sent successfully');
				},
				(err) => {
					console.log('FAILED...', err);
				},
			);
	};
	return (
		<div className="">
			{/* <h1>Contact</h1> */}
			<section className="text-gray-600 dark:bg-gray-700 dark:text-gray-300 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="ease-out duration-150">
						<button
							id="triggerElement"
							type="button"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
							Hide alert
						</button>

						<div
							id="targetElement"
							className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
							role="alert">
							<span className="font-medium">Info alert!</span>{' '}
							Change a few things up and try submitting again.
						</div>
					</div>
					<div className="flex flex-col text-center items-center w-full mb-12">
						<h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 dark:text-white">
							Contact Us
						</h1>
						<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
							Get in touch and let us know how we can help.
						</p>
					</div>
					<div className="lg:w-1/2 md:w-2/3 mx-auto">
						<div className="flex flex-wrap -m-2">
							<form
								className="flex flex-wrap -m-2"
								onSubmit={handleSubmit(onSubmit)}>
								<div className="p-2 w-1/2">
									<div className="relative">
										<div className="inline-flex">
											<label
												htmlFor="name"
												className="leading-7 text-sm font-semibold text-gray-600 dark:text-white">
												Name
											</label>
										</div>
										<input
											type="text"
											id="name"
											name="name"
											maxLength={21}
											className="inputField"
											placeholder="Name"
											{...register('Name', {
												required: true,
												minLength: 3,
												maxLength: 20,
											})}
										/>
									</div>
									<div className="h-10 mb-2">
										{errors.Name &&
											errors.Name.type === 'required' && (
												<div
													className="my-1 rounded pl-2 py-1 bg-red-300 text-xl font-semibold text-red-700 inline-flex items-center w-full"
													role="alert">
													<svg
														aria-hidden="true"
														focusable="false"
														data-prefix="fas"
														data-icon="times-circle"
														className="w-7 md:w-5 mr-2 fill-current"
														role="img"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 512 512">
														<path
															fill="currentColor"
															d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
													</svg>
													<label className="text-base">
														Name is required
													</label>
												</div>
											)}
										{errors.Name &&
											errors.Name.type ===
												'minLength' && (
												<div
													className="my-1 rounded pl-2 py-1 bg-red-300 text-xl font-semibold text-red-700 inline-flex items-center w-full"
													role="alert">
													<svg
														aria-hidden="true"
														focusable="false"
														data-prefix="fas"
														data-icon="times-circle"
														className="w-7 md:w-5 mr-2 fill-current"
														role="img"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 512 512">
														<path
															fill="currentColor"
															d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
													</svg>
													<label className="text-base">
														Name must be at least 3
														characters
													</label>
												</div>
											)}
										{errors.Name &&
											errors.Name.type ===
												'maxLength' && (
												<div
													className="my-1 rounded pl-2 py-1 bg-red-300 text-xl font-semibold text-red-700 inline-flex items-center w-full"
													role="alert">
													<svg
														aria-hidden="true"
														focusable="false"
														data-prefix="fas"
														data-icon="times-circle"
														className="w-7 md:w-5 mr-2 fill-current"
														role="img"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 512 512">
														<path
															fill="currentColor"
															d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
													</svg>
													<label className="text-base">
														Name must be at most 20
													</label>
												</div>
											)}
									</div>
								</div>
								<div className="p-2 w-1/2">
									<div className="relative">
										<label
											htmlFor="email"
											className="leading-7 text-sm font-semibold text-gray-600 dark:text-white">
											Email
										</label>
										<input
											type="text"
											id="email"
											name="email"
											className="inputField"
											placeholder="Email"
											{...register('Email', {
												required: true,
												// pattern: /^\S+@\S+$/i,
												pattern:
													/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
											})}
										/>
									</div>
									<div className="h-10 mb-2">
										{errors.Email &&
											errors.Email.type ===
												'required' && (
												<div
													className="my-1 rounded pl-2 py-1 bg-red-300 text-xl font-semibold text-red-700 inline-flex items-center w-full"
													role="alert">
													<svg
														aria-hidden="true"
														focusable="false"
														data-prefix="fas"
														data-icon="times-circle"
														className="w-7 md:w-5 mr-2 fill-current"
														role="img"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 512 512">
														<path
															fill="currentColor"
															d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
													</svg>
													<label className="text-base">
														Email is required
													</label>
												</div>
											)}
										{errors.Email &&
											errors.Email.type === 'pattern' && (
												<div
													className="my-1 rounded pl-2 py-1 bg-red-300 text-xl font-semibold text-red-700 inline-flex items-center w-full"
													role="alert">
													<svg
														aria-hidden="true"
														focusable="false"
														data-prefix="fas"
														data-icon="times-circle"
														className="w-7 md:w-5 mr-2 fill-current"
														role="img"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 512 512">
														<path
															fill="currentColor"
															d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
													</svg>
													<label className="text-base">
														Email is invalid
													</label>
												</div>
											)}
									</div>
								</div>

								<div className="p-2 w-full">
									<div className="relative">
										<label
											htmlFor="message"
											className="leading-7 text-sm font-semibold text-gray-600 dark:text-white">
											Message
										</label>
										<textarea
											id="message"
											className="inputField"
											name="message"
											{...register('Message', {
												required: true,
												minLength: 10,
											})}
										/>
									</div>
									<div className="h-10 mb-2">
										{errors.Message &&
											errors.Message.type ===
												'required' && (
												<div
													className="my-1 rounded pl-2 py-1 bg-red-300 text-xl font-semibold text-red-700 inline-flex items-center w-full"
													role="alert">
													<svg
														aria-hidden="true"
														focusable="false"
														data-prefix="fas"
														data-icon="times-circle"
														className="w-7 md:w-5 mr-2 fill-current"
														role="img"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 512 512">
														<path
															fill="currentColor"
															d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
													</svg>
													<label className="text-base">
														Message is required
													</label>
												</div>
											)}
										{errors.Message &&
											errors.Message.type ===
												'minLength' && (
												<div
													className="my-1 rounded pl-2 py-1 bg-red-300 text-xl font-semibold text-red-700 inline-flex items-center w-full"
													role="alert">
													<svg
														aria-hidden="true"
														focusable="false"
														data-prefix="fas"
														data-icon="times-circle"
														className="w-7 md:w-5 mr-2 fill-current"
														role="img"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 512 512">
														<path
															fill="currentColor"
															d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
													</svg>
													<label className="text-base">
														Message must be at least
														10 characters
													</label>
												</div>
											)}
									</div>
								</div>
								<div className="p-2 w-full">
									<button
										// onClick={handleChange}
										type="submit"
										className="flex mx-auto border-0 py-2 px-8 text-lg text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-cyan-800">
										Send Message
									</button>
								</div>
							</form>
							{/* social media icons */}
							<div className="p-2 w-full pt-4 mt-8 border-t border-gray-200 text-center">
								<p className="leading-normal my-5">
									Follow us on social media
								</p>
								<span className="inline-flex">
									<a className="text-gray-500">
										<svg
											id="facebook"
											fill="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5 dark:hover:fill-white hover:fill-gray-900"
											viewBox="0 0 24 24">
											<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
										</svg>
									</a>
									<a className="ml-4 text-gray-500">
										<svg
											id="twitter"
											fill="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5 dark:hover:fill-white hover:fill-gray-900"
											viewBox="0 0 24 24">
											<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
										</svg>
									</a>
									<a className="ml-4 text-gray-500">
										<svg
											id="instagram"
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5 dark:hover:fill-white hover:fill-gray-900"
											viewBox="0 0 24 24">
											<rect
												width="20"
												height="20"
												x="2"
												y="2"
												rx="5"
												ry="5"></rect>
											<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
										</svg>
									</a>
									<a className="ml-4 text-gray-500">
										<svg
											id="linkedin"
											fill="currentColor"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="0"
											className="w-5 h-5 dark:hover:fill-white hover:fill-gray-900"
											viewBox="0 0 24 24">
											<path
												stroke="none"
												d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
											<circle
												cx="4"
												cy="4"
												r="2"
												stroke="none"></circle>
										</svg>
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
