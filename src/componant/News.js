import React from 'react';
import defaultImage from '../images/default.png';

export default function News(props) {
	const data = props.data[0];
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	let dt = (date) => {
		return [
			date.getDate() +
				' ' +
				months[date.getMonth()] +
				', ' +
				date.getFullYear(),
		];
	};

	return (
		<div>
			<h1>News</h1>
			<div
				id="extralarge-modal"
				className="flex items-center bg-gray-400 bg-opacity-70 dark:bg-gray-500 dark:bg-opacity-70 fixed overflow-y-auto overflow-x-hidden z-50 w-screen left-0 top-0 h-screen">
				<div className="px-10 m-auto w-screen rounded-lg shadow dark:bg-gray-700 dark:bg-opacity-90 min-h-fit">
					{/* <!-- Modal content --> */}

					{/* <!-- Modal header --> */}
					<div className="flex space-x-10 justify-between items-center p-5 border-b dark:border-gray-600">
						<h3 className="text-xl font-medium text-gray-900 dark:text-white">
							Article From :{' '}
							{data.source ? data.source : 'Anonymous'}
						</h3>
						<button
							onClick={() => {
								props.display(false);
							}}
							className="text-gray-800 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
							<svg
								className="w-5 h-5"
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
					{/* <!-- Modal body --> */}
					<div className="p-6 space-y-6 flex flex-col items-center justify-center md:flex-row min-w-full">
						<img
							className="w-full rounded-lg md:h-auto md:w-96 md:rounded-lg"
							src={
								data.urlToImage ? data.urlToImage : defaultImage
							}
							alt="Article"
						/>

						<div className="flex flex-col">
							<div className="flex flex-col justify-between p-4 leading-normal">
								<h5 className="my-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
									{data.title
										? data.title
										: 'Title not available'}
								</h5>
								<p className="font-normal text-gray-700 dark:text-gray-400">
									{data.description
										? data.description
										: 'Description not available'}
								</p>
							</div>
							<div className="mb-2 flex items-center justify-end">
								<p className="font-normal text-gray-700 dark:text-gray-400">
									{dt(new Date(data.publishedAt))}
								</p>
							</div>
							<div className="mx-5 flex items-center justify-start space-x-4 text-base">
								<h5 className="font-bold tracking-tight text-gray-900 dark:text-gray-300 min-w-fit">
									Author :
								</h5>
								<p className="font-normal text-gray-700 dark:text-gray-400">
									{data.author ? data.author : 'Anonymous'}
								</p>
							</div>
							<div className="mx-5 flex items-center justify-start space-x-4 text-base">
								<h5 className="font-bold tracking-tight text-gray-900 dark:text-gray-300 min-w-fit">
									Source :
								</h5>
								<p className="font-normal text-gray-700 dark:text-gray-400">
									{data.source ? data.source : 'Anonymous'}
								</p>
							</div>
							<div className="mx-5 my-10 flex items-center justify-start">
								<p className="text-gray-700 dark:text-gray-100 font-medium">
									read full article{' '}
									<a
										className="text-cyan-500 hover:text-sky-600 cursor-pointer"
										href={data.url ? data.url : '/'}
										target="black">
										here
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
