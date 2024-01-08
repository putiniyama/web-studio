import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import Button from '../../../components/Button/Button'
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
		<section className='create'>
			<div className='container'>
				<div className='create__wrapper'>
					<div className='create__description'>
						<Title
							text='создаем и продвигаем'
							addClass='title_left title_white'
						></Title>
						<h2 className='create__sub'>
							ваши{' '}
							<span ref={el} className='it'>
								it продукты
							</span>
						</h2>
						<Button title='обсудить проект' addClassName='create' />
						<h2 className='subtitle subtitle__create'>
							веб-студия анатолия усова
						</h2>
						<div className='create__text'>
							<p>разрабатываем техничкески сложные</p>
							<p>
								<span></span>сайты и веб-сервисы<span></span>
							</p>
							<p>для любых бизнес-задач</p>
						</div>
					</div>
					<div className='create__image'>
						<img src='image/Obsidian.png' alt='obsidian' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default CreateIT
