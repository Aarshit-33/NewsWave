import React from 'react';
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';

export default function Footer(props) {
	return (
		<footer className=" p-4 shadow md:flex md:items-center md:justify-between md:p-6 bg-slate-200 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800 z-10">
			<span className="flex justify-center items-center text-sm text-gray-500 sm:text-center dark:text-gray-400 ml-5">
				<span> © 2022 </span>
				<img src={logo} className="w-6" alt="Flowbite Logo" />
				<a href="/" className="hover:underline text-lg font-bold pr-2">
					{props.title}
				</a>
				<span> All Rights Reserved.</span>
			</span>

			<span className="flex justify-center items-center text-sm text-gray-500 sm:text-center dark:text-gray-400 ml-5">
				All are demo data, because NewsAPI doesn't support on.
				web-server
			</span>
			<ul className="flex flex-wrap items-center justify-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0 mr-5">
				<li>
					<NavLink
						exact="true"
						to="/"
						className={({ isActive }) =>
							isActive
								? 'footer-active-link'
								: 'footer-default-link'
						}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						exact="true"
						to="/about"
						className={({ isActive }) =>
							isActive
								? 'footer-active-link'
								: 'footer-default-link'
						}>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						exact="true"
						to="/contact"
						className={({ isActive }) =>
							isActive
								? 'footer-active-link'
								: 'footer-default-link'
						}>
						Contact
					</NavLink>
				</li>
			</ul>
		</footer>

		// <footer className="text-gray-600 bg-black body-font">
		// 	<div className="container px-5 py-24 mx-auto flex items-center md:flex-row md:flex-nowrap flex-wrap flex-col">
		// 		<div className="flex-grow flex flex-wrap md:text-left text-center">
		// 			<div className="lg:w-1/4 md:w-1/2 w-full px-4">
		// 				<h2 className="title-font font-medium text-blue-700 dark:text-cyan-700 tracking-widest text-sm mb-3">
		// 					CATEGORIES
		// 				</h2>
		// 				<nav className="list-none mb-10 lg:m-0">
		// 					<li>
		// 						<a className="text-gray-600 hover:text-gray-800">
		// 							First Link
		// 						</a>
		// 					</li>
		// 					<li>
		// 						<a className="text-gray-600 hover:text-gray-800">
		// 							Second Link
		// 						</a>
		// 					</li>
		// 					<li>
		// 						<a className="text-gray-600 hover:text-gray-800">
		// 							Third Link
		// 						</a>
		// 					</li>
		// 					<li>
		// 						<a className="text-gray-600 hover:text-gray-800">
		// 							Fourth Link
		// 						</a>
		// 					</li>
		// 				</nav>
		// 			</div>
		// 			<div className="lg:w-1/4 md:w-1/2 w-full px-4">
		// 				<h2 className="title-font font-medium text-blue-700 dark:text-cyan-700 tracking-widest text-sm mb-3">
		// 					CATEGORIES
		// 				</h2>
		// 				<nav className="list-none mb-10 lg:m-0">
		// 					<li>
		// 						<a className="text-gray-600 hover:text-gray-800">
		// 							First Link
		// 						</a>
		// 					</li>
		// 					<li>
		// 						<a className="text-gray-600 hover:text-gray-800">
		// 							Second Link
		// 						</a>
		// 					</li>
		// 					<li>
		// 						<a className="text-gray-600 hover:text-gray-800">
		// 							Third Link
		// 						</a>
		// 					</li>
		// 					<li>
		// 						<a className="text-gray-600 hover:text-gray-800">
		// 							Fourth Link
		// 						</a>
		// 					</li>
		// 				</nav>
		// 			</div>
		// 			<div className="lg:w-1/4 md:w-1/2 w-full px-4">
		// 				<h2 className="title-font font-medium text-blue-700 dark:text-cyan-700 tracking-widest text-sm mb-3">
		// 					CATEGORIES
		// 				</h2>
		// 				<nav className="list-none mb-10 lg:m-0">
		// 					<li>
		// 						<a className="text-gray-600 hover:text-gray-800">
		// 							First Link
		// 						</a>
		// 					</li>
		// 					<li>
		// 						<a className="text-gray-600 hover:text-gray-800">
		// 							Second Link
		// 						</a>
		// 					</li>
		// 					<li>
		// 						<a className="text-gray-600 hover:text-gray-800">
		// 							Third Link
		// 						</a>
		// 					</li>
		// 					<li>
		// 						<a className="text-gray-600 hover:text-gray-800">
		// 							Fourth Link
		// 						</a>
		// 					</li>
		// 				</nav>
		// 			</div>
		// 			<div className="lg:w-1/4 md:w-1/2 w-full px-4">
		// 				<h2 className="title-font font-medium text-blue-700 dark:text-cyan-700 tracking-widest text-sm mb-3">
		// 					CATEGORIES
		// 				</h2>
		// 				<nav className="list-none mb-10 lg:m-0">
		// 					<li>
		// 						<a className="text-gray-600 hover:text-gray-800">
		// 							First Link
		// 						</a>
		// 					</li>
		// 					<li>
		// 						<a className="text-gray-600 hover:text-gray-800">
		// 							Second Link
		// 						</a>
		// 					</li>
		// 					<li>
		// 						<a className="text-gray-600 hover:text-gray-800">
		// 							Third Link
		// 						</a>
		// 					</li>
		// 					<li>
		// 						<a className="text-gray-600 hover:text-gray-800">
		// 							Fourth Link
		// 						</a>
		// 					</li>
		// 				</nav>
		// 			</div>
		// 		</div>
		// 		{/* company info */}
		// 		<div className="flex flex-col items-center justify-center">
		// 			<a className="flex items-center justify-center title-font font-medium text-blue-700 dark:text-cyan-700 md-5">
		// 				<img src={logo} className="w-10" alt="News" />
		// 				<span className="ml-3 text-xl">{props.title}</span>
		// 			</a>
		// 			<p className="my-2 text-sm text-gray-500">The News Ocen</p>
		// 			<span className="flex mt-2 justify-center sm:justify-start">
		// 				<a className="text-gray-500">
		// 					<svg
		// 						fill="currentColor"
		// 						strokeLinecap="round"
		// 						strokeLinejoin="round"
		// 						strokeWidth="2"
		// 						className="w-5 h-5 fill-blue-700 hover:fill-blue-500 cursor-pointer"
		// 						viewBox="0 0 24 24">
		// 						<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
		// 					</svg>
		// 				</a>
		// 				<a className="ml-3 text-gray-500">
		// 					<svg
		// 						fill="currentColor"
		// 						strokeLinecap="round"
		// 						strokeLinejoin="round"
		// 						strokeWidth="2"
		// 						className="w-5 h-5 fill-cyan-700 hover:fill-sky-500 cursor-pointer"
		// 						viewBox="0 0 24 24">
		// 						<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
		// 					</svg>
		// 				</a>
		// 				<a className="ml-3 text-gray-500">
		// 					<svg
		// 						fill="none"
		// 						stroke="black"
		// 						strokeLinecap="round"
		// 						strokeLinejoin="round"
		// 						strokeWidth="3"
		// 						className="w-5 h-5 fill-rose-700 hover:fill-pink-700 cursor-pointer"
		// 						viewBox="0 0 24 24">
		// 						<rect
		// 							width="20"
		// 							height="20"
		// 							x="2"
		// 							y="2"
		// 							rx="5"
		// 							ry="5"></rect>
		// 						<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
		// 					</svg>
		// 				</a>
		// 				<a className="ml-3 text-gray-500">
		// 					<svg
		// 						fill="currentColor"
		// 						stroke="currentColor"
		// 						strokeLinecap="round"
		// 						strokeLinejoin="round"
		// 						strokeWidth="0"
		// 						className="w-5 h-5 fill-blue-900 hover:fill-blue-600 cursor-pointer"
		// 						viewBox="0 0 24 24">
		// 						<path
		// 							stroke="none"
		// 							d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
		// 						<circle
		// 							cx="4"
		// 							cy="4"
		// 							r="2"
		// 							stroke="none"></circle>
		// 					</svg>
		// 				</a>
		// 			</span>
		// 		</div>
		// 	</div>
		// </footer>
	);
}
