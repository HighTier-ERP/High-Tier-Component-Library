import './lib/styles/high-tier-css.scss';

import { Accordion } from './lib';

function App() {
	return (
		<div className="flex flew-row">
			<aside className="column-3 flex flex-row items-center content-center b-r-default p-30px h-100vh">
				<img
					className="w-65px mr-10px"
					src="https://uskhpjjjepcdouiydafe.supabase.in/storage/v1/object/sign/high-tier/high-tier_icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoaWdoLXRpZXIvaGlnaC10aWVyX2ljb24uc3ZnIiwiaWF0IjoxNjQwNzExNDk4LCJleHAiOjE5NTYwNzE0OTh9.T39bhQl9VrWFXYcX9Cd4my0LxFWNpu2CY9hjMWy526E"
					alt="High Tier Component Library Logo and WordMark"
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
			<div className="column-9 bg-gray-2">
				<Accordion accordionType="single" />
			</div>
		</div>
	);
}

export default App;
