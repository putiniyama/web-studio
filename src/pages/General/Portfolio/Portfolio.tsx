import { useState } from 'react'
import Button from '../../../components/Button/Button'
import { skillsArr } from '../../../constants/Constants'

const Portfolio = () => {
	const spans = document.querySelectorAll('.portfolio__friends-skills span')

	const [skills, setSkills] = useState(skillsArr)
	//const [name, setName] = useState()

	const handleClick = (index: number) => {
		const updatedSkills = skills.map((skill, i) => {
			if (i === index) {
				return { ...skill, isActive: true }
			} else {
				return { ...skill, isActive: false }
			}
		})

		spans.forEach((span, i) => {
			i === index
				? span.classList.add('active')
				: span.classList.remove('active')
		})

		setSkills(updatedSkills)
	}

	return (
		<section className='portfolio'>
			<div className='container'>
				<div className='portfolio__wrapper'>
					<div className='portfolio__description'>
						<div className='portfolio__description-left'>
							<h2 className='title title_small'>портфолио</h2>
							<p className='portfolio__number'>353</p>
							<p className='portfolio__text'>
								наших партнёра увеличили продажи и рекомендуют нас
							</p>
							<Button title='больше работ' addClassName='white' />
						</div>
						<div className='portfolio__description-right'>
							<div className='portfolio__blocks'>
								<div className='portfolio__block'>
									<div className='portfolio__block-text'>Сайт-визитка</div>
								</div>
								<div className='portfolio__block'>
									<div className='portfolio__block-text'>Интернет-магазин</div>
								</div>
								<div className='portfolio__block'>
									<div className='portfolio__block-text'>
										Корпоративный сайт
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='portfolio__friends'>
						<h2 className='title title_center title_small'>наша команда</h2>
						<div className='portfolio__friends-wrapper'>
							<div className='portfolio__friends-descr'>
								<h2 className='portfolio__friends-name'>
									{skills.map(skill => (skill.isActive ? skill.name : ''))}
								</h2>
								<p className='portfolio__friends-text'>
									{skills.map(skill =>
										skill.isActive ? skill.description : ''
									)}
								</p>
								<div className='portfolio__friends-skills'>
									<span className='active'>Продвижение</span>
									<span>UX/UI</span>
									<span>Вёрстка</span>
								</div>
							</div>
							<div className='portfolio__friends-items'>
								{skills.map((skill, index) => (
									<div
										onClick={() => handleClick(index)}
										className={`portfolio__friends-item ${
											skill.isActive ? 'active' : ''
										}`}
										key={index}
									>
										<p>{skill.skill}</p>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className='portfolio__feedback'>
						<h2 className='portfolio__feedback-title'></h2>
						<div className='portfolio__feedback-items'>
							<div className='portfolio__feedback-item'></div>
							<div className='portfolio__feedback-item'></div>
							<div className='portfolio__feedback-item'></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Portfolio
