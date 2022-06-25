import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import card_img from "../images/image-1.jpg";

export default function News(props) {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div>
            {/* <h1>News</h1> */}
            <div
                id="extralarge-modal"
                // tabindex="-1"
                className="bg-transparent overflow-y-auto overflow-x-hidden fixed z-50 w-full inset-0 h-screen"
            >
                <div className="relative p-4 w-full max-w-full h-full md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white dark:bg-opacity-90 rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                {location.state.title
                                    ? location.state.title.length > 25
                                        ? location.state.title.substring(
                                              0,
                                              25
                                          ) + "..."
                                        : location.state.title
                                    : "News Title"}
                                <br />
                                {location.state.author
                                    ? "   -- by " + location.state.author
                                    : "helo"}
                            </h3>
                            {console.log(location.author)}
                            <button
                                onClick={() => {
                                    navigate(-1);
                                }}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="p-6 space-y-6 flex flex-col items-center md:flex-row min-w-full">
                            <img
                                className="object-cover w-full h-96 rounded-lg md:h-auto md:w-96 md:rounded-lg"
                                src={
                                    location.state.imgUrl
                                        ? location.state.imgUrl
                                        : card_img
                                }
                                alt=""
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {location.state.title
                                        ? location.state.title
                                        : "News Title"}
                                </h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {location.state.description
                                        ? location.state.description
                                        : "News Description"}
                                </p>
                                <a
                                    href={location.state.url}
                                    data-modal-toggle="extralarge-modal"
                                    type="button"
                                    className="inline-flex w-max
                                    items-center py-2 px-4 text-sm font-medium
                                    text-center text-white bg-blue-700
                                    rounded-lg hover:bg-blue-800 focus:ring-4
                                    focus:outline-none focus:ring-blue-300
                                    dark:bg-cyan-500 dark:hover:bg-cyan-600
                                    dark:focus:ring-cyan-800"
                                >
                                    Go to Article
                                    <svg
                                        className="ml-2 -mr-1 w-4 h-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    // return props.trigger ? (
    //     <div>
    //         {/* <h1>News</h1> */}
    //         <div
    //             id="extralarge-modal"
    //             // tabindex="-1"
    //             className="bg-transparent overflow-y-auto overflow-x-hidden fixed z-50 w-full inset-0 h-screen"
    //         >
    //             <div className="relative p-4 w-full max-w-full h-full md:h-auto">
    //                 {/* <!-- Modal content --> */}
    //                 <div className="relative bg-white dark:bg-opacity-90 rounded-lg shadow dark:bg-gray-700">
    //                     {/* <!-- Modal header --> */}
    //                     <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
    //                         <h3 className="text-xl font-medium text-gray-900 dark:text-white">
    //                             News Title
    //                             {props.title}
    //                         </h3>
    //                         <button
    //                             onClick={() => {
    //                                 props.setTrigger(false);
    //                             }}
    //                             className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
    //                         >
    //                             <svg
    //                                 className="w-5 h-5"
    //                                 fill="currentColor"
    //                                 viewBox="0 0 20 20"
    //                                 xmlns="http://www.w3.org/2000/svg"
    //                             >
    //                                 <path
    //                                     fillRule="evenodd"
    //                                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //                                     clipRule="evenodd"
    //                                 ></path>
    //                             </svg>
    //                         </button>
    //                     </div>
    //                     {/* <!-- Modal body --> */}
    //                     <div className="p-6 space-y-6 flex flex-col items-center md:flex-row min-w-full">
    //                         <img
    //                             className="object-cover w-full h-96 rounded-lg md:h-auto md:w-96 md:rounded-lg"
    //                             src={card_img}
    //                             alt=""
    //                         />
    //                         <div className="flex flex-col justify-between p-4 leading-normal">
    //                             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //                                 Noteworthy technology acquisitions 2021
    //                             </h5>
    //                             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //                                 {props.des}
    //                                 News Description <br /> Lorem ipsum dolor
    //                                 sit amet consectetur adipisicing elit. Quia
    //                                 aliquam iure minima quo facere officiis rem
    //                                 natus culpa, saepe temporibus dolor sit
    //                                 nihil illum delectus sunt modi tempora
    //                                 laboriosam perspiciatis a. Quidem excepturi
    //                                 omnis unde odio, numquam aut reprehenderit
    //                                 explicabo a. Dolores, mollitia obcaecati
    //                                 labore voluptas iste corporis autem ab
    //                                 doloremque perferendis maiores provident
    //                                 iusto deserunt, enim non dolor. Voluptates
    //                                 eveniet et distinctio maxime. Quis dolorum
    //                                 nesciunt delectus quod tempore nostrum
    //                                 architecto a eos, explicabo ducimus vitae
    //                                 excepturi eum dolore exercitationem enim
    //                                 reprehenderit quo corporis provident tenetur
    //                                 ipsam quos? Expedita, nobis? Culpa itaque
    //                                 commodi voluptate.
    //                             </p>
    //                             <button
    //                                 data-modal-toggle="extralarge-modal"
    //                                 type="button"
    //                                 className="inline-flex w-max items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-cyan-800"
    //                             >
    //                                 Read more
    //                                 <svg
    //                                     className="ml-2 -mr-1 w-4 h-4"
    //                                     fill="currentColor"
    //                                     viewBox="0 0 20 20"
    //                                     xmlns="http://www.w3.org/2000/svg"
    //                                 >
    //                                     <path
    //                                         fillRule="evenodd"
    //                                         d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
    //                                         clipRule="evenodd"
    //                                     ></path>
    //                                 </svg>
    //                             </button>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // ) : (
    //     ""
    // );
}
