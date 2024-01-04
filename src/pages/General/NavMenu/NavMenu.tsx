const NavMenu = () => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header__wrapper'>
					<a className='logo'>USOV.</a>
					<nav className='menu'>
						<a className='menu__items i-1 active' href='#'>
							Главная
						</a>
						<a className='menu__items i-2 ' href='#'>
							Услуги
						</a>
						<a className='menu__items i-3 ' href='#'>
							Портфолио
						</a>
						<a className='menu__items i-4' href='#'>
							Контакты
						</a>
					</nav>
					<a href='tel:+79117197192' className='phone'>
						<img src='/icons/phone.svg' alt='phone' />
						<p className='phone__number'>+7 911 719-71-92</p>
					</a>
				</div>
			</div>
		</header>
	)
}

export default NavMenu
