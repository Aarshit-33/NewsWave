import React from 'react';
import logo from '../logo.svg';
// import profilephoto from '../images/profile-picture.jpg';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar(props) {
	const themeToggle = () => {
		document.documentElement.classList.toggle('dark');
		localStorage.setItem(
			'theme',
			document.documentElement.classList.contains('dark')
				? 'dark'
				: 'light',
		);
	};

	const userTheme = localStorage.getItem('theme');
	const systemTheme = window.matchMedia(
		'(prefers-color-scheme: dark)',
	).matches;
	console.log(userTheme, systemTheme);

	const checkTheme = () => {
		if (userTheme === 'light') {
			if (document.documentElement.classList.contains('dark')) {
				document.documentElement.classList.remove('dark');
			}

			localStorage.setItem('theme', userTheme);
			console.log('userTheme');
		} else if (userTheme === 'dark' || systemTheme) {
			if (!document.documentElement.classList.contains('dark')) {
				document.documentElement.classList.add('dark');
			}
			console.log('systemTheme');
			localStorage.setItem('theme', 'dark');
		}
	};

	checkTheme();
	return (
		<nav className="fixed w-screen bg-slate-200 bg-opacity-95 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800 dark:bg-opacity-95 z-10">
			<div className="container flex justify-between items-center mx-auto">
				{/* logo */}
				<Link to="/" className="flex items-center">
					<img
						src={logo}
						className="mr-3 h-6 sm:h-9"
						alt="Flowbite Logo"
					/>
					<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
						{props.title}
					</span>
				</Link>
				<div className="">
					{/* navbar menu  */}
					<div
						className="hidden justify-between items-center w-full md:flex md:w-auto"
						id="mobile-menu-2">
						<ul className="flex flex-col items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
							<li className="">
								<NavLink
									exact="true"
									to="/"
									className={({ isActive }) =>
										isActive
											? 'active-link'
											: 'default-link'
									}>
									Home
								</NavLink>
							</li>
							<li className="">
								<NavLink
									exact="true"
									to="/about"
									className={({ isActive }) =>
										isActive
											? 'active-link'
											: 'default-link'
									}>
									About
								</NavLink>
							</li>
							<li className="">
								<NavLink
									exact="true"
									to="/contact"
									className={({ isActive }) =>
										isActive
											? 'active-link'
											: 'default-link'
									}>
									Contact
								</NavLink>
							</li>
						</ul>
					</div>

					{/*  <!-- Dropdown menu --> */}
					<div className="flex items-center">
						<div
							className="hidden z-50 my-4 md:hidden text-base list-none bg-transparent rounded dark:bg-transparent"
							id="dropdown">
							<ul className="flex flex-col items-center mt-4 md:flex-row md:mt-0 md:text-sm md:font-medium">
								<li className="">
									<NavLink
										exact="true"
										to="/"
										className={({ isActive }) =>
											isActive
												? 'active-link'
												: 'default-link'
										}
										onClick={() => {
											document
												.getElementById('dropdown')
												.classList.toggle('hidden');
										}}>
										Home
									</NavLink>
								</li>
								<li className="">
									<NavLink
										exact="true"
										to="/about"
										className={({ isActive }) =>
											isActive
												? 'active-link'
												: 'default-link'
										}
										onClick={() => {
											document
												.getElementById('dropdown')
												.classList.toggle('hidden');
										}}>
										About
									</NavLink>
								</li>
								<li className="">
									<NavLink
										exact="true"
										to="/contact"
										className={({ isActive }) =>
											isActive
												? 'active-link'
												: 'default-link'
										}
										onClick={() => {
											document
												.getElementById('dropdown')
												.classList.toggle('hidden');
										}}>
										Contact
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* theme toggle button and mobile menu toggle */}
				<div className="pl-[10px]"></div>
				<div className="flex justify-center items-center">
					{/* <button
						type="button"
						className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						onClick={themeToggle}>
						<svg
							id="sun"
							viewBox="0 0 24 24"
							fill="none"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="w-6 h-6 hidden dark:block">
							<path
								d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
								className="fill-sky-400/20 stroke-sky-500"></path>
							<path
								d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
								className="stroke-sky-500"></path>
						</svg>
						<svg
							id="moon"
							viewBox="0 0 24 24"
							fill="none"
							className="w-6 h-6 dark:hidden">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
								className="fill-sky-400/20"></path>
							<path
								d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
								className="fill-sky-500"></path>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
								className="fill-sky-500"></path>
						</svg>
					</button> */}
					<button
						className="flex items-center px-[6px] cursor-pointer w-[50px] h-8 bg-zinc-500 dark:bg-sky-800 rounded-full outline-none"
						onClick={themeToggle}>
						<span className="w-5 h-5 rounded-full flex items-center justify-center bg-white transition-all text-body-color dark:translate-x-[18px]">
							<svg
								viewBox="0 0 16 16"
								className="dark:hidden fill-current w-[14px] h-[14px]">
								<path d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z"></path>
							</svg>
							<svg
								viewBox="0 0 23 23"
								className="hidden dark:block fill-current w-[18px] h-[18px]">
								<g clipPath="url(#clip0_40_125)">
									<path d="M16.6111 15.855C17.591 15.1394 18.3151 14.1979 18.7723 13.1623C16.4824 13.4065 14.1342 12.4631 12.6795 10.4711C11.2248 8.47905 11.0409 5.95516 11.9705 3.84818C10.8449 3.9685 9.72768 4.37162 8.74781 5.08719C5.7759 7.25747 5.12529 11.4308 7.29558 14.4028C9.46586 17.3747 13.6392 18.0253 16.6111 15.855Z"></path>
								</g>
							</svg>
						</span>
					</button>
					<button
						onClick={() => {
							document
								.getElementById('dropdown')
								.classList.toggle('hidden');
						}}
						data-collapse-toggle="mobile-menu-2"
						type="button"
						className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="mobile-menu-2"
						aria-expanded="false">
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-6 h-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"></path>
						</svg>
						<svg
							className="hidden w-6 h-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"></path>
						</svg>
					</button>
				</div>
			</div>
		</nav>
	);
}
