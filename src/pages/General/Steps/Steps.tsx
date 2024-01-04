import { useEffect, useState } from 'react'
import Button from '../../../components/Button/Button'
import { steps } from '../../../constants/Constants'

const Steps = () => {
	const [cardsActive, setCardsActive] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY
			console.log(scrollY)
			if (scrollY > 3300) {
				setCardsActive(true)
			} else {
				setCardsActive(false)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<section
			className='steps'
			style={{ paddingBottom: !cardsActive ? '717px' : '2212px' }}
		>
			<div className='container'>
				<div className='steps__wrapper'>
					<div className='steps__descriptions'>
						<h3 className='name-block steps__name-block'>
							6 шагов <br /> для реализации вашей идеи
						</h3>
						<Button title='давайте обсуждать' />
					</div>
					<div className='steps__items'>
						{steps.map((step, index) => (
							<div
								key={index}
								className={`steps__bg steps__bg-${index} ${
									cardsActive ? 'active' : ''
								}`}
							>
								<div
									className={`steps__item steps__item-${index} ${
										cardsActive ? 'active' : ''
									}`}
								>
									<div className='steps__number'>{step.num}</div>
									<div className='steps__title'>{step.descr}</div>
									<p className='steps__text'>{step.text}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className='steps__line-bg'>
				<p>НАШИ ТЕХНОЛОГИИ</p>
			</div>
			<div className='steps__line'>
				<p>CSS</p>
				<p>JS</p>
				<p>REACT</p>
				<p>ANGULAR</p>
				<p>OPENCART</p>
				<p>WORDPRESS</p>
				<p>HTML</p>
				<p>CSS</p>
			</div>
		</section>
	)
}

export default Steps
