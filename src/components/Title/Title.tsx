import { FC } from 'react'

import './Title.scss'

type TitleProps = {
	text: string
	addClass?: string
}

const Title: FC<TitleProps> = ({ text, addClass }) => {
	return <h1 className={`title ${addClass}`}>{text}</h1>
}

export default Title
