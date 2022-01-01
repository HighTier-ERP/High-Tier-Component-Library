// Components
/*----------------------------------------------------------------------------*/
// Export for library components
/*----------------------------------------------------------------------------*/

import Accordion from './components/accordion-component/Accordion';
import Calendar from './components/calendar-component/Calendar';
import Loading from './components/loading-component/Loading';
import Input from './components/input-component/Input';
import MotionDiv from './components/motion-div-component/MotionDiv';
import SiteLogo from './components/site-logo-component/SiteLogo';
import TextArea from './components/text-area-component/TextArea';

export { Accordion, Calendar, Input, Loading, MotionDiv, SiteLogo, TextArea };

// Flags - Hooks and Components
/*----------------------------------------------------------------------------*/
// Export for environment hooks and components
/*----------------------------------------------------------------------------*/
export {
	NotInProduction,
	OnlyInProduction,
	OnlyInStaging,
	OnlyInLocal,
	useIsNotProduction,
	useIsProduction,
	useIsStaging,
	useIsLocal
} from './components/environment-component/Environments';
