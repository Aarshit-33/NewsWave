import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import defaultImage from '../images/image-1.jpg';

export default function NewsCard() {
	const [artical, setArtical] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetch(
			'https://newsapi.org/v2/top-headlines?country=us&apiKey=79790959ff6a4c5b8352a631b8b7badd',
		)
			.then((res) => {
				if (res) {
					return res.json();
				}
				throw new Error('API not fatched');
			})
			.then((res) => {
				setArtical(res.articles);
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-4">
				{artical &&
					artical.map((records) => {
						return (
							<div key={records.url}>
								<div className="flex flex-col items-start w-100 bg-white rounded-xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-auto sm:h-[19rem] lg:h-[22.5rem] xl:h-[23rem] 2xl:h-96">
									<Link
										to="/"
										className="w-full h-40 flex justify-center">
										<img
											className="rounded-t-xl w-full 2xl:w-auto h-full"
											src={
												records.urlToImage
													? records.urlToImage
													: defaultImage
											}
											alt="News Thumbnail"
										/>
									</Link>

									<div className="p-2 ">
										<h5 className="mb-2 sm:text-sm md:text-base lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
											{records.title
												? records.title.length > 50
													? records.title.substring(
															0,
															50,
													  ) + '...'
													: records.title
												: 'No Title'}
										</h5>
										<p className="mb-3 sm:text-xs md:text-xs lg:text-sm font-normal text-gray-700 dark:text-gray-400">
											{records.description
												? records.description.length >
												  100
													? records.description.substring(
															0,
															100,
													  ) + '...'
													: records.description
												: 'No Description'}
										</p>
									</div>
									{/* <Link
                                        to="/newsCard"
                                        className="flex justify-center text-white"
                                    >
                                        {" "}
                                        OPEN
                                    </Link> */}
									<button
										// onClick={() => setPopupDisplay(true)}
										onClick={() => {
											navigate('/news', {
												state: {
													title: records.title,
													description:
														records.description,
													url: records.url,
													imgUrl: records.urlToImage,
													author: records.author,
												},
											});
										}}
										className="ml-2 bottom-0 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-cyan-800">
										Read more
										<svg
											className="ml-2 -mr-1 w-4 h-4"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg">
											<path
												fillRule="evenodd"
												d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
												clipRule="evenodd"></path>
										</svg>
									</button>
								</div>
							</div>
						);
					})}
			</div>
		</>
	);
}
