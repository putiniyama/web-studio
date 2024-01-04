import Title from '../../../components/Title/Title'
import Form from '../../../components/Form/Form'

const Ideas = () => {
	return (
		<section className='ideas'>
			<img src='/image/Obsidian.png' className='ideas__photo'></img>
			<div className='container'>
				<div className='ideas__wrapper'>
					<Title
						text='Поможем реализовать ваши идеи'
						addClass='title_white'
					></Title>
					<Form></Form>
				</div>
			</div>
		</section>
	)
}

export default Ideas
