// Components
/*----------------------------------------------------------------------------*/
// Export for library components
/*----------------------------------------------------------------------------*/

import Accordion from './components/accordion-component/Accordion';
import Calendar from './components/calendar-component/Calendar';
import DynamicIcon from './components/dynamic-icon-component/DynamicIcon';
import Loading from './components/loading-component/Loading';
import Input from './components/input-component/Input';
import MotionDiv from './components/motion-div-component/MotionDiv';
import SiteLogo from './components/site-logo-component/SiteLogo';
import TextArea from './components/text-area-component/TextArea';

export {
	Accordion,
	Calendar,
	DynamicIcon,
	Input,
	Loading,
	MotionDiv,
	SiteLogo,
	TextArea
};

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

export {
	ArrowCircleIcon,
	Calculator,
	ChatIcon,
	CheckIcon,
	CarIcon,
	ClockIcon,
	CloseIcon,
	CloudIcon,
	CogIcon,
	CompanyIcon,
	CirclePlusIcon,
	CreditCardIcon,
	DocumentPlusIcon,
	DocumentSearchIcon,
	DocumentTextIcon,
	DotsCircleIcon,
	DownIcon,
	EmailIcon,
	EyeIcon,
	PrintIcon,
	ReturnIcon,
	ExclamationIcon,
	GlobeIcon,
	GridIcon,
	KeyIcon,
	HomeIcon,
	FacebookIcon,
	GiftIcon,
	InboxIcon,
	LeftIcon,
	LogoutIcon,
	MailOpenIcon,
	MobileDeviceIcon,
	MenuIcon,
	MoonIcon,
	OfficeIcon,
	RightIcon,
	RemoteIcon,
	ReportIcon,
	ScaleIcon,
	SadIcon,
	SearchIcon,
	ServerIcon,
	ShoppingCartIcon,
	SparklesIcon,
	StarIcon,
	SaveIcon,
	SunIcon,
	UserAddIcon,
	UpIcon,
	UsCurrencyIcon,
	UserIcon,
	UserGroupIcon,
	TemplateIcon,
	TrashIcon
} from './icons';
