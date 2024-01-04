import Button from '../../../components/Button/Button'
import Typed from 'typed.js'
import { useEffect, useRef } from 'react'
import Title from '../../../components/Title/Title'

const CreateIT = () => {
	const el = useRef(null)

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ['web-приложения', 'it продукты'],
			typeSpeed: 100,
			backSpeed: 100,
			backDelay: 1000,
			loop: true,
		})

		return () => {
			// Destroy Typed instance during cleanup to stop animation
			typed.destroy()
		}
	}, [])

	return (
		<section className='create-it'>
			<div className='container'>
				<div className='create-it__wrapper'>
					<div className='create-it__description'>
						<Title
							text='создаем и продвигаем'
							addClass='title_left title_white'
						></Title>
						<h2 className='subtitle create-it__sub'>
							ваши{' '}
							<span ref={el} className='it'>
								it продукты
							</span>
						</h2>
						<Button title='обсудить проект' addClassName='create-it' />
						<h2 className='subtitle subtitle__create-it'>
							веб-студия анатолия усова
						</h2>
						<div className='create-it__text'>
							<p>разрабатываем техничкески сложные</p>
							<p>
								<span></span>сайты и веб-сервисы<span></span>
							</p>
							<p>для любых бизнес-задач</p>
						</div>
					</div>
					<div className='create-it__image'>
						<img src='image/Obsidian.png' alt='obsidian' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default CreateIT
