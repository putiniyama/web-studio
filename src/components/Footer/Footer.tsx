import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className='container'>
				<div className={styles.footer__wrapper}>
					<a className='logo logo__footer'>USOV.</a>

					<div className={styles.footer__items}>
						<div className={styles.footer__contact}>
							<a className={styles.footer__phone}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='22'
									height='22'
									viewBox='0 0 22 22'
									fill='none'
								>
									<path
										d='M20.8881 15.9553V18.9553C20.8892 19.2338 20.8322 19.5094 20.7206 19.7646C20.6091 20.0198 20.4454 20.2488 20.2402 20.4371C20.035 20.6254 19.7927 20.7687 19.5289 20.858C19.265 20.9472 18.9855 20.9803 18.7081 20.9553C15.631 20.6209 12.6751 19.5694 10.0781 17.8853C7.66194 16.3499 5.61345 14.3014 4.07812 11.8853C2.38809 9.27646 1.33636 6.30625 1.00812 3.21525C0.983127 2.93872 1.01599 2.66001 1.10462 2.39688C1.19324 2.13374 1.33569 1.89194 1.52288 1.68687C1.71008 1.48181 1.93792 1.31796 2.19191 1.20578C2.44589 1.09359 2.72046 1.03551 2.99812 1.03525H5.99812C6.48342 1.03048 6.95391 1.20233 7.32188 1.51879C7.68985 1.83524 7.93019 2.2747 7.99812 2.75525C8.12474 3.71532 8.35957 4.65798 8.69812 5.56525C8.83266 5.92318 8.86178 6.31217 8.78202 6.68613C8.70227 7.0601 8.51698 7.40336 8.24812 7.67525L6.97812 8.94525C8.40167 11.4488 10.4746 13.5217 12.9781 14.9453L14.2481 13.6753C14.52 13.4064 14.8633 13.2211 15.2372 13.1413C15.6112 13.0616 16.0002 13.0907 16.3581 13.2253C17.2654 13.5638 18.2081 13.7986 19.1681 13.9253C19.6539 13.9938 20.0975 14.2385 20.4146 14.6127C20.7318 14.987 20.9003 15.4648 20.8881 15.9553Z'
										stroke='#121212'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									/>
								</svg>

								<a href='tel:+79117197192'>+7 911 719-71-92</a>
							</a>
							<a
								className={styles.footer__mail}
								href='mailto:usov.online@gmail.com'
							>
								usov.online@gmail.com
							</a>
						</div>

						<ul className={styles.footer__item}>
							<li>
								<a href='#'>О компании</a>
							</li>
							<li>
								<a href='#'>Главная</a>
							</li>
							<li>
								<a href='#'>О нас</a>
							</li>
							<li>
								<a href='#'>Портфолио</a>
							</li>
						</ul>

						<ul className={styles.footer__item}>
							<li>
								<a href='#'>Услуги</a>
							</li>
							<li>
								<a href='#'>Разработка сайтов</a>
							</li>
							<li>
								<a href='#'>Продвижение сайтов</a>
							</li>
							<li>
								<a href='#'>Разработка приложений</a>
							</li>
							<li>
								<a href='#'>Брендинг</a>
							</li>
							<li>
								<a href='#'>Внедрение CRM</a>
							</li>
							<li>
								<a href='#'>Упаковка социальных сетей</a>
							</li>
						</ul>

						<ul className={styles.footer__item}>
							<li>
								<a href='#'>Дополнительно</a>
							</li>
							<li>
								<a href='#'>Оставить заявку</a>
							</li>
							<li>
								<a href='#'>Контакты</a>
							</li>
						</ul>
					</div>

					<div className={styles.footer__bottom}>
						<div className={styles.footer__bottom_item}>Usov, 2023</div>
						<div className={styles.footer__bottom_item}>Оферта</div>
						<div className={styles.footer__bottom_item}>
							Политика обработки персональных данных
						</div>
						<div className={styles.footer__bottom_item}>
							Пользовательское соглашение
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
