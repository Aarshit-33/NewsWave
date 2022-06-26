import React from 'react';

export default function Contact() {
	return (
		<div className="">
			{/* <h1>Contact</h1> */}
			<section className="text-gray-600 dark:bg-gray-700 dark:text-gray-300 body-font">
				<div className="container px-5 py-24 mx-auto">
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
							<div className="p-2 w-1/2">
								<div className="relative">
									<label
										htmlFor="name"
										className="leading-7 text-sm font-semibold text-gray-600 dark:text-white">
										Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										className="inputField"
									/>
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
										type="email"
										id="email"
										name="email"
										className="inputField"
									/>
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
										name="message"
										className="inputField"></textarea>
								</div>
							</div>
							<div className="p-2 w-full mt-5">
								<button className="flex mx-auto border-0 py-2 px-8 text-lg text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-cyan-800">
									Send Message
								</button>
							</div>
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
