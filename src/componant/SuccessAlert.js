import React from 'react';
import successImg from '../images/success.gif';

export default function SuccessAlert() {
	return (
		<div className="fixed flex items-center justify-center z-50 w-screen h-screen bg-slate-500 bg-opacity-70 inset-0">
			<div className="bg-white h-fit w-2/3 md:w-1/2 rounded-lg border border-b-2 border-success-green">
				<div className="relative rounded-xl w-1/3 md:w-1/4 -mt-10 md:-mt-16 mx-auto">
					<img
						src={successImg}
						className="rounded-full bg-transparent"
					/>
				</div>
				<div className="flex flex-col space-y-5 items-center justify-center pb-10">
					<div className="text-success-green tracking-wide font-bold text-2xl">
						Congratulations
					</div>
					<div className="text-success-green tracking-wide font-semibold text-lg">
						Your Message has been Sent Successfully ...
					</div>
				</div>
			</div>
		</div>
	);
}
