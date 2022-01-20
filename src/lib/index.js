// Components
/*----------------------------------------------------------------------------*/
// Export for library components
/*----------------------------------------------------------------------------*/

import Accordion from './components/utilities/accordion-component/Accordion';
import Avatar from './components/identity/avatar-component/Avatar';
import AvatarSupabase from './components/identity/avatar-supabase-component/AvatarSupabase';
import Auth from './components/auth/auth-component/Auth';
import Onboarding from './components/auth/onboarding-component/Onboarding';
import Button from './components/utilities/button-component/Button';
import Calendar from './components/utilities/calendar-component/Calendar';
import CheckBox from './components/inputs/checkbox-component/CheckBox';
import DocumentCard from './components/documentation/document-card-component/DocumentCard';
import DynamicIcon from './components/visual-communication/dynamic-icon-component/DynamicIcon';
import Loading from './components/utilities/loading-component/Loading';
import DateInput from './components/inputs/date-input-component/DateInput';
import Input from './components/inputs/input-component/Input';
import ElementWithBg from './components/layout/element-with-bg-component/ElementWithBg';
import Marquee from './components/visual-communication/marquee-component/Marquee';
import MotionDiv from './components/layout/motion-div-component/MotionDiv';
import PackageLogo from './components/identity/package-logo-component/PackageLogo';
import RadioBtn from './components/inputs/radio-btn-component/RadioBtn';
import Select from './components/inputs/select-component/Select';
import SiteLogo from './components/identity/site-logo-component/SiteLogo';
import TextArea from './components/inputs/text-area-component/TextArea';
import ToggleSwitch from './components/inputs/toggle-switch-component/ToggleSwitch';

export {
	Auth,
	Onboarding,
	Accordion,
	Avatar,
	AvatarSupabase,
	Button,
	Calendar,
	CheckBox,
	DocumentCard,
	DynamicIcon,
	DateInput,
	ElementWithBg,
	Input,
	Loading,
	Marquee,
	MotionDiv,
	PackageLogo,
	SiteLogo,
	TextArea,
	RadioBtn,
	Select,
	ToggleSwitch
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
} from './components/utilities/environment-component/Environments';

export {
	ShowForMediumAndUp,
	ShowForSmallAndDown,
	ShowForLargeAndUp,
	ShowForLargeAndDown,
	ShowForMediumAndDown,
	ShowForCustomLarge,
	ShowForCustomLargeDown
} from './components/utilities/responsive-component/Responsive';

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

export { useInput } from './hooks/useInput';
export { useToggle } from './hooks';
