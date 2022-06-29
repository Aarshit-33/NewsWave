import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'all',
	});
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<form className="p-24" onSubmit={handleSubmit(onSubmit)}>
			<input
				className="text-xl bg-red-300"
				type="text"
				placeholder="Name"
				{...register('Name', {
					required: true,
					minLength: 3,
					maxLength: 20,
				})}
			/>

			{/* {errors.Name && errors.Name.type === 'required' && (
				<label>Name is Required</label>
			)}
			{errors.Name && errors.Name.type === 'minLength' && (
				<label>Name is too short</label>
			)}
			{errors.Name && errors.Name.type === 'maxLength' && (
				<label>Name is too Long</label>
			)}
			{!errors.Name && <label>Name All right</label>} */}

			<input
				type="text"
				placeholder="Email"
				{...register('Email', {
					required: true,
					pattern: /^\S+@\S+$/i,
				})}
			/>
			<textarea {...register('Message', { required: true, min: 5 })} />
			<input type="submit" />
		</form>
	);
}
