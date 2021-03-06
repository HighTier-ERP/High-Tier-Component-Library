import './lib/styles/high-tier-css.scss';

import { useState } from 'react';
import {
	Accordion,
	AccordionGroup,
	Calendar,
	SiteLogo,
	CheckBox,
	RadioBtn,
	DocumentCard,
	HtclLayout
} from './lib';

function App() {
	const [activeId, setActiveId] = useState('accord1');
	const [showPassword, setShowPassword] = useState(false);
	const [step] = useState(1);
	const [stepValue, setStepValue] = useState(null);
	return (
		<HtclLayout
			layoutVariant=""
			childrenA={
				<aside className="column-3 fixed top-0 z-1000 flex flex-row items-center content-center b-r-default p-30px h-100vh">
					<SiteLogo
						isSVG={false}
						logoImgRef="https://uskhpjjjepcdouiydafe.supabase.in/storage/v1/object/sign/high-tier/high-tier_icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoaWdoLXRpZXIvaGlnaC10aWVyX2ljb24uc3ZnIiwiaWF0IjoxNjQwNzExNDk4LCJleHAiOjE5NTYwNzE0OTh9.T39bhQl9VrWFXYcX9Cd4my0LxFWNpu2CY9hjMWy526E"
						classes="w-65px mr-10px"
						imgAltText="High Tier Component Library Logo and WordMark"
					/>
					<span className="flex flex-column italic">
						<h1 className="f-s-20px text-uppercase f-w-700 l-h-1_2em l-s-3_5px">
							High Tier{' '}
						</h1>
						<h2 className="f-s-12px f-w-500 text-uppercase l-s-1px">
							{' '}
							Component Library
						</h2>
					</span>
				</aside>
			}
			childrenB={
				<div className="column-9 bg-gray-2 absolute right-0 pb-50px">
				<DocumentCard
					componentTitle="Accordions"
					componentSummary={`The accordion component is a graphical control element that
					can be used to display FAQ information, vertical or
					horizonial list items, in a grouping of common elements or as a single
					dropdown element. Each item can "expand" or hide and show
					content that is associated with a particular accordion
					element.`}
				>
					<div className="card p-30px">
						<p className="mb-20px f-w-500">
							{' '}
							Ex. 1 - Single Accordion List Item{' '}
						</p>
						<br />
						<Accordion
							titleText="This is an example of a single accordion"
							actionPosition="left"
							accordId="accord0"
						>
							<div className="w-full pt-20px pl-1rem pointer">
								<p>Hide / Show Operation</p>
								<p>
									The accordion component has an expansion
									action that hides and shows content
								</p>
							</div>
						</Accordion>
					</div>
					<br />
					<div className="card p-30px">
						<p className="mb-20px f-w-500">
							{' '}
							Ex. 2 - Styled Accordion Items{' '}
						</p>
						<br />
						<Accordion
							titleText="This is an example of a single accordion"
							actionPosition="left"
							accordId="accord0"
						>
							<div className="w-full pt-20px pl-1rem pointer">
								<p>Hide / Show Operation</p>
								<p>
									The accordion component has an expansion
									action that hides and shows content
								</p>
							</div>
						</Accordion>
					</div>
					<br />
					<div className="card p-30px">
						<p className="mb-20px f-w-500">
							{' '}
							Ex. 3 - Accordion Group{' '}
						</p>
						<br />
						<AccordionGroup 
							title="This is a test of a group title"
							subTitle="This is a test of a group subtitle. It is a muted color by default"
						>
							<Accordion
								type="group"
								titleText="This is an example of an accordion group"
								actionPosition="left"
								accordId="accord1"
								activeId={activeId}
								setActiveId={setActiveId}
							>
								<p className="pt-20px pl-1rem">
									Accordion expanded content for the first item{' '}
								</p>
							</Accordion>
							<Accordion
								type="group"
								titleText="This is an example of an accordion group"
								actionPosition="left"
								accordId="accord2"
								activeId={activeId}
								setActiveId={setActiveId}
							>
								<p className="pt-20px pl-1rem">
									Accordion expanded content for the second item{' '}
								</p>
							</Accordion>
							<Accordion
								type="group"
								titleText="This is an example of an accordion group"
								actionPosition="left"
								accordId="accord3"
								activeId={activeId}
								setActiveId={setActiveId}
							>
								<p className="pt-20px pl-1rem">
									Accordion expanded content for the third item{' '}
								</p>
							</Accordion>
						</AccordionGroup>
					</div>
				</DocumentCard>
				<DocumentCard
					componentTitle="Calendar"
					componentSummary={`test...`}
				>
					<Calendar />
				</DocumentCard>
				<DocumentCard
					componentTitle="CheckBox"
					componentSummary={`test...`}
				>
					<CheckBox
						text="Show Password"
						classes="mx-auto pointer max-w-200px f-s-14px outline-none text-body"
						checkBoxClasses="bg-white"
						name="showPassword"
						selected={showPassword}
						onChange={() => setShowPassword(!showPassword)}
					/>
				</DocumentCard>
				<DocumentCard
					componentTitle="Radio Button"
					componentSummary={`test...`}
				>
					<div className="flex flex-row">
						<div className="mb-2rem">
							<RadioBtn
								value={step.input1Value}
								selected={stepValue}
								text={step.input1Label}
								onChange={() => setStepValue(step.input1Value)}
								groupName="radios"
							/>
						</div>
						<div className="mb-2rem">
							<RadioBtn
								value={step.input2Value}
								selected={stepValue}
								text={step.input2Label}
								onChange={() => setStepValue(step.input2Value)}
								groupName="radios"
							/>
						</div>
						<div className="mb-2rem">
							<RadioBtn
								value={step.input3Value}
								selected={stepValue}
								text={step.input3Label}
								onChange={() => setStepValue(step.input3Value)}
								groupName="radios"
							/>
						</div>
						<div className="mb-2rem">
							<RadioBtn
								value={step.input4Value}
								selected={stepValue}
								text={step.input4Label}
								onChange={() => setStepValue(step.input4Value)}
								groupName="radios"
							/>
						</div>
					</div>
				</DocumentCard>
			</div>
			}
		>
		</HtclLayout>
	);
}

export default App;
