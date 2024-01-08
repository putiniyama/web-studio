import CreateIT from './CreateIT/CreateIT'
import FeedbackSwiper from './FeedbackSwiper/FeedbackSwiper'
import MySite from './MySite/MySite'
import NavMenu from './NavMenu/NavMenu'
import Platform from './Platform/Platform'
import Portfolio from './Portfolio/Portfolio'
import Steps from './Steps/Steps'
import StudioServices from './StudioServices/StudioServices'
// import Form from '../../components/Form/Form'

import Footer from '../../components/Footer/Footer'
import Ideas from './Ideas/Ideas'

export const General = () => {
	return (
		<>
			<NavMenu />
			<CreateIT />
			<Platform />
			<MySite />
			<StudioServices />
			<Steps />
			<Portfolio />
			<FeedbackSwiper />
			<Ideas />
			<Footer />
		</>
	)
}
