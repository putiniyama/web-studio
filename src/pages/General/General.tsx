import NavMenu from './NavMenu/NavMenu'
import CreateIT from './CreateIT/CreateIT'
import Platform from './Platform/Platform'
import MySite from './MySite/MySite'
import StudioServices from './StudioServices/StudioServices'
import Steps from './Steps/Steps'
import Portfolio from './Portfolio/Portfolio'
import FeedbackSwiper from './FeedbackSwiper/FeedbackSwiper'
// import Form from '../../components/Form/Form'
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
		</>
	)
}
