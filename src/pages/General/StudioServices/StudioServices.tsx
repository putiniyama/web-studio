import Title from '../../../components/Title/Title'

const StudioServices = () => {
	return (
		<section className='studio-services'>
			<div className='container'>
				<div className='studio-services__wrapper'>
					<Title text='наши услуги' addClass='title_center title_small'></Title>
					<div className='studio-services__items'>
						<div className='studio-services__item'>
							<img
								src='image/development.svg'
								className='studio-services__logo'
							></img>
							<div className='studio-services__number'>01</div>
							<p className='studio-services__title'>разработка сайтов</p>
							<div className='studio-services__detail'>
								<span>подробнее</span>
								<span></span>
							</div>
						</div>
						<div className='studio-services__item'>
							<img
								src='image/promotion.svg'
								className='studio-services__logo'
							></img>
							<div className='studio-services__number'>02</div>
							<p className='studio-services__title'>продвижение</p>
							<div className='studio-services__detail'>
								<span>подробнее</span>
								<span></span>
							</div>
						</div>
						<div className='studio-services__item'>
							<img src='image/app.svg' className='studio-services__logo'></img>
							<div className='studio-services__number'>03</div>
							<p className='studio-services__title'>
								разработка мобильных приложений
							</p>
							<div className='studio-services__detail'>
								<span>подробнее</span>
								<span></span>
							</div>
						</div>
						<div className='studio-services__item'>
							<img src='image/CRM.svg' className='studio-services__logo'></img>
							<div className='studio-services__number'>04</div>
							<p className='studio-services__title'>внедрение CRM</p>
							<div className='studio-services__detail'>
								<span>подробнее</span>
								<span></span>
							</div>
						</div>
						<div className='studio-services__item'>
							<img src='image/pen.svg' className='studio-services__logo'></img>
							<div className='studio-services__number'>05</div>
							<p className='studio-services__title'>брендинг</p>
							<div className='studio-services__detail'>
								<span>подробнее</span>
								<span></span>
							</div>
						</div>
						<div className='studio-services__item'>
							<img
								src='image/Social-Media.svg'
								className='studio-services__logo'
							></img>
							<div className='studio-services__number'>06</div>
							<p className='studio-services__title'>Дизайн социальных сетей</p>
							<div className='studio-services__detail'>
								<span>подробнее</span>
								<span></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default StudioServices
