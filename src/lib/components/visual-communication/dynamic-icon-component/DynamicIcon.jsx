//PACKAGE IMPORTS
import React from 'react';

//INTERNAL IMPORTS
import {
	Calculator,
	ChatIcon,
	CheckIcon,
	CarIcon,
	CloseIcon,
	CloudIcon,
	CirclePlusIcon,
	CogIcon,
	CreditCardIcon,
	ClockIcon,
	CompanyIcon,
	DownIcon,
	DocumentPlusIcon,
	DocumentSearchIcon,
	DocumentTextIcon,
	HomeIcon,
	EmailIcon,
	EyeIcon,
	FacebookIcon,
	PrintIcon,
	ReturnIcon,
	ExclamationIcon,
	GlobeIcon,
	GridIcon,
	InboxIcon,
	LeftIcon,
	KeyIcon,
	MailOpenIcon,
	MenuIcon,
	MobileDeviceIcon,
	OfficeIcon,
	RightIcon,
	RemoteIcon,
	ReportIcon,
	ScaleIcon,
	SadIcon,
	SaveIcon,
	SearchIcon,
	ShoppingCartIcon,
	SunIcon,
	SparklesIcon,
	UpIcon,
	UsCurrencyIcon,
	TemplateIcon,
	TrashIcon,
	UserGroupIcon,
	UserAddIcon
} from '../../../icons';

//COMPONENT DESCRIPTION
/*----------------------------------------------------------------------------*/
// Dynamic setting of icon. Use cases is for navigation returned from cms
/*----------------------------------------------------------------------------*/
const DynamicIcon = (props) => {
	switch (props.name) {
		case 'Calculator':
			return <Calculator />;
		case 'CarIcon':
			return <CarIcon style={props.style} />;
		case 'ChatIcon':
			return <ChatIcon />;
		case 'CheckIcon':
			return <CheckIcon />;
		case 'CloseIcon':
			return <CloseIcon />;
		case 'ClockIcon':
			return <ClockIcon />;
		case 'CogIcon':
			return <CogIcon />;
		case 'CloudIcon':
			return <CloudIcon />;
		case 'CirclePlusIcon':
			return <CirclePlusIcon />;
		case 'CreditCardIcon':
			return <CreditCardIcon />;
		case 'CompanyIcon':
			return <CompanyIcon />;
		case 'DocumentPlusIcon':
			return <DocumentPlusIcon />;
		case 'DocumentSearchIcon':
			return <DocumentSearchIcon />;
		case 'DocumentTextIcon':
			return <DocumentTextIcon />;
		case 'EmailIcon':
			return <EmailIcon />;
		case 'EyeIcon':
			return <EyeIcon />;
		case 'FacebookIcon':
			return <FacebookIcon />;
		case 'PrintIcon':
			return <PrintIcon />;
		case 'ReturnIcon':
			return <ReturnIcon />;
		case 'DownIcon':
			return <DownIcon />;
		case 'ExclamationIcon':
			return <ExclamationIcon />;
		case 'GlobeIcon':
			return <GlobeIcon strokeWidth={props.strokeWidth} />;
		case 'GridIcon':
			return <GridIcon />;
		case 'HomeIcon':
			return <HomeIcon />;
		case 'InboxIcon':
			return <InboxIcon />;
		case 'KeyIcon':
			return <KeyIcon />;
		case 'LeftIcon':
			return <LeftIcon />;
		case 'MailOpenIcon':
			return <MailOpenIcon style={props.style} />;
		case 'MenuIcon':
			return <MenuIcon />;
		case 'MobileDeviceIcon':
			return <MobileDeviceIcon />;
		case 'OfficeIcon':
			return <OfficeIcon />;
		case 'RightIcon':
			return <RightIcon />;
		case 'RemoteIcon':
			return <RemoteIcon />;
		case 'ReportIcon':
			return <ReportIcon />;
		case 'ScaleIcon':
			return <ScaleIcon />;
		case 'SadIcon':
			return <SadIcon />;
		case 'SaveIcon':
			return <SaveIcon />;
		case 'SearchIcon':
			return <SearchIcon />;
		case 'ShoppingCartIcon':
			return <ShoppingCartIcon />;
		case 'SparklesIcon':
			return <SparklesIcon />;
		case 'SunIcon':
			return <SunIcon />;
		case 'TrashIcon':
			return <TrashIcon />;
		case 'UpIcon':
			return <UpIcon />;
		case 'UsCurrencyIcon':
			return <UsCurrencyIcon />;
		case 'UserAddIcon':
			return <UserAddIcon />;
		case 'UserGroupIcon':
			return <UserGroupIcon strokeWidth={props.strokeWidth} />;
		case 'TemplateIcon':
			return <TemplateIcon />;
		default:
			return false;
	}
};

export default DynamicIcon;
