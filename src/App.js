import './lib/styles/high-tier-css.scss';

import { useState } from 'react';
import { Accordion, Calendar, SiteLogo } from './lib';

const ComponentDocumentCard = ({
	children,
	componentTitle,
	componentSummary
}) => {
	return (
		<section className="pt-30px">
			<div className="card-header pb-30px">
				<p className="f-s-1_5rem f-w-700 l-s-4_5px l-h-3em">
					{componentTitle}
				</p>
				<p className="f-s-1rem">{componentSummary}</p>
			</div>
			{children}
			<div className="card-footer pt-50px flex flex-row justify-between">
				<div className="column-4 pl-0">
					<p>Version:</p>
					<p>1.0.0</p>
				</div>
				<div className="column-4 flex flex-column items-center justify-center">
					<p>Date Published:</p>
					<p>12/30/2021</p>
				</div>
				<div className="column-4 pr-0 flex flex-column items-end justify-end">
					<p>Last Update:</p>
					<p>12/30/2021</p>
				</div>
			</div>
		</section>
	);
};

function App() {
	const [activeId, setActiveId] = useState('accord1');
	return (
		<div className="flex flex-row">
			<aside className="column-3 fixed top-0 z-1000 flex flex-row items-center content-center b-r-default p-30px h-100vh">
				<SiteLogo isSVG={false} 
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
			<div className="column-9 bg-gray-2 absolute right-0 pb-50px">
				<ComponentDocumentCard
					componentTitle="Accordions"
					componentSummary={`The accordion component is a graphical control element that
					can be used to display FAQ information, vertically or
					horizonial list items, and be in a group or as a single
					dropdown element. Each item can "expand" or hide and show
					content that is associated with a particular accodorion
					element.`}
				>
				<div className="card p-30px">
					<p className="mb-20px f-w-500">
						{' '}
						Ex. 1 - Single Accordion{' '}
					</p>
					<br/>
					<Accordion
						accordionType="single"
						accordionTitleText="This is an example of a single accordion"
						accordionActionPosition="left"
					>
						<div className="w-full pt-20px pl-1rem pointer">
							<p>Hide / Show Operation</p>
							<p>
								The accordion component has an expansion
								function that hides and shows content.
							</p>
						</div>
					</Accordion>
				</div>
					<br />
					<div className="card p-30px">
					<p className="mb-20px f-w-500"> Ex. 2 - Accordion Group </p>
					<br/>
					<Accordion
						accordionType="group"
						accordionTitleText="This is an example of an accordion group"
						accordionActionPosition="left"
						accordId="accord1"
						activeId={activeId}
						setActiveId={setActiveId}
					>
						<p className="pt-20px pl-1rem">
							Accordion expanded content for the first item{' '}
						</p>
					</Accordion>
					<Accordion
						accordionType="group"
						accordionTitleText="This is an example of an accordion group"
						accordionActionPosition="left"
						accordId="accord2"
						activeId={activeId}
						setActiveId={setActiveId}
					>
						<p className="pt-20px pl-1rem">
							Accordion expanded content for the second item{' '}
						</p>
					</Accordion>
					<Accordion
						accordionType="group"
						accordionTitleText="This is an example of an accordion group"
						accordionActionPosition="left"
						accordId="accord3"
						activeId={activeId}
						setActiveId={setActiveId}
					>
						<p className="pt-20px pl-1rem">
							Accordion expanded content for the third item{' '}
						</p>
					</Accordion>
				 </div>
				</ComponentDocumentCard>
				<ComponentDocumentCard
					componentTitle="Calendar"
					componentSummary={`test...`}
				>
					<Calendar />
				</ComponentDocumentCard>
			</div>
		</div>
	);
}

export default App;
