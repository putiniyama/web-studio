import { FC } from 'react'

type ButtonProps = {
	title: string
	addClassName?: string
	onClick?: () => void | undefined
}

const Button: FC<ButtonProps> = ({ title, addClassName, onClick }) => {
	return (
		<button onClick={onClick} className={`button ${addClassName}`}>
			{title}
		</button>
	)
}

export default Button
