// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css/bundle'

import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import Title from '../../../components/Title/Title'
import { feedbacks } from '../../../constants/Constants'
import './FeedbackSwiper.scss'

const FeedbackSwiper = () => {
	// const breakpoints = {
	// 	// Конфигурация для разрешения экрана шириной менее 768px
	// 	768: {
	// 		slidesPerView: 2,
	// 	},
	// 	// Конфигурация для разрешения экрана шириной 768px и более
	// 	1024: {
	// 		slidesPerView: 3,
	// 	},
	// }

	return (
		<section className='feedback'>
			<div className='container'>
				<div className='feedback__wrapper'>
					<Title text={'Отзывы'} addClass={'title_small title_center'} />
					<Swiper
						modules={[Navigation, Pagination, Scrollbar, A11y]}
						// breakpoints={breakpoints}
						spaceBetween={0}
						slidesPerView={3}
						pagination={{ clickable: true }}
						// onSlideChange={() => console.log('slide change')}
						// onSwiper={swiper => console.log(swiper)}
					>
						{feedbacks.map((feedback, i) => (
							<SwiperSlide key={i}>
								<div className='feedback__item'>
									<div className='feedback__title'>{feedback.title}</div>
									<div className='feedback__name'>{feedback.name}</div>
									<div className='feedback__descr'>{feedback.description}</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					{/* <Swiper
						modules={[Navigation, Pagination, Scrollbar, A11y]}
						// breakpoints={breakpoints}
						spaceBetween={0}
						slidesPerView={3}
						navigation
						// pagination={{ clickable: true }}
						// scrollbar={{ draggable: true }}
						onSlideChange={() => console.log('slide change')}
						onSwiper={swiper => console.log(swiper)}
					>
						<SwiperSlide>dfgfdg</SwiperSlide>
						<SwiperSlide>fdgfdg</SwiperSlide>
						<SwiperSlide>dfgfdg</SwiperSlide>
						<SwiperSlide>dfgfd</SwiperSlide>
					</Swiper> */}
				</div>
			</div>
		</section>
	)
}

export default FeedbackSwiper
