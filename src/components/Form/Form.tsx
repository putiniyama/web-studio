import { useForm, SubmitHandler } from 'react-hook-form'
import Button from '../Button/Button'
import { useEffect } from 'react'
import InputMask from 'react-input-mask'

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
			reset({ phone: '' })
		}
	}, [formState, reset])

	const onSubmit: SubmitHandler<Inputs> = data => {
		console.log(data)
		reset()
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
						{formState.errors?.name?.message || 'Неверо введено имя!'}
					</span>
				)}
			</div>
			<div className='input__wrapper'>
				<InputMask
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
					mask='+7 (999) 999-99-99'
					placeholder='ТЕЛЕФОН'
				/>
				{formState.errors.phone && (
					<span>
						{formState.errors?.phone?.message ||
							'Неверо введен номер телефона!'}
					</span>
				)}
			</div>
			<div className='input__wrapper'>
				<input
					{...register('mail', {
						required: true,
						pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
					})}
					placeholder='Email'
				/>
				{formState.errors.mail && <span>Неверо введен email!</span>}
			</div>

			<Button title='Оставить заявку'></Button>
		</form>
	)
}

export default Form
