import "./lib/styles/high-tier.scss";

import { Accordion } from "./lib";

function App() {
  return (
    <div className="flex flew-row pt-30px">
      <header className="column-3 flex flex-row items-center content-center">
        <img
          className="w-65px mr-20px"
          src="https://uskhpjjjepcdouiydafe.supabase.in/storage/v1/object/sign/high-tier/high-tier_icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoaWdoLXRpZXIvaGlnaC10aWVyX2ljb24uc3ZnIiwiaWF0IjoxNjQwNzExNDk4LCJleHAiOjE5NTYwNzE0OTh9.T39bhQl9VrWFXYcX9Cd4my0LxFWNpu2CY9hjMWy526E"
          alt="High Tier Component Library Logo and WordMark"
        />
        <span className="flex flex-column italic">
          <h1 className="f-s-25px text-uppercase l-h-1_2em">High Tier </h1>
          <h2 className="f-s-16px f-w-500"> Component Library</h2>
        </span>
      </header>
      <div className="column-9">
        <Accordion />
      </div>
    </div>
  );
}

export default App;
