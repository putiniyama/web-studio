import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Button from '../Button/Button'

type Inputs = {
	name: string
	phone: string
	mail: string
}

const Form = () => {
	const { register, handleSubmit, formState, reset } = useForm<Inputs>({
		mode: 'onBlur',
	})

	useEffect(() => {
		if (formState.isSubmitSuccessful) {
			reset()
		}
	}, [formState, reset])

	const onSubmit: SubmitHandler<Inputs> = data => {
		console.log(data)

		reset({ name: '', phone: '', mail: '' })
	}

	// console.log(watch('example')) // watch input value by passing the name of it

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='input__wrapper'>
				<input
					{...register('name', {
						required: 'Поле обязательно к заполнению!',
						minLength: {
							value: 2,
							message: 'Минимум 2 символа!',
						},
					})}
					placeholder='ИМЯ'
					//autoComplete='off'
				/>
				{formState.errors.name && (
					<span>
						{formState.errors.name?.message || 'Неверно введено имя!'}
					</span>
				)}
			</div>
			<div className='input__wrapper'>
				{/* <InputMask */}
				<input
					{...register('phone', {
						required: 'Поле обязательно к заполнению!',
						pattern: /^\+?[0-9\s\-\\(\\)]+$/,
						minLength: {
							value: 3,
							message: 'Минимум 3 символа!',
						},

						maxLength: {
							value: 20,
							message: 'Максимум 20 символов!',
						},
					})}
					/* mask='+7 (999) 999-99-99' */
					placeholder='ТЕЛЕФОН'
				/>
				{formState.errors.phone && (
					<span>
						{formState.errors.phone?.message ||
							'Неверно введен номер телефона!'}
					</span>
				)}
			</div>
			<div className='input__wrapper'>
				<input
					{...register('mail', {
						required: 'Поле обязательно к заполнению!',
						pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
					})}
					placeholder='Email'
				/>
				{formState.errors.mail && (
					<span>
						{formState.errors.mail?.message || 'Неверно введен email!'}
					</span>
				)}
			</div>

			<Button title='Оставить заявку'></Button>
		</form>
	)
}

export default Form
