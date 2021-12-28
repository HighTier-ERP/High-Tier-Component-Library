import "./styles/high-tier.scss";

import { Accordion } from "./lib";

function App() {
  return (
    <div className="flex flew-row pt-30px">
      <header className="column-4 flex flex-row items-center content-center">
        <img
          className="w-75px mr-20px"
          src="https://uskhpjjjepcdouiydafe.supabase.in/storage/v1/object/sign/high-tier/high-tier_icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoaWdoLXRpZXIvaGlnaC10aWVyX2ljb24uc3ZnIiwiaWF0IjoxNjQwNzExNDk4LCJleHAiOjE5NTYwNzE0OTh9.T39bhQl9VrWFXYcX9Cd4my0LxFWNpu2CY9hjMWy526E"
        />
        <h1 className="f-s-25px">High Tier Component Library</h1>
      </header>
      <div className="column-8">
        <Accordion />
      </div>
    </div>
  );
}

export default App;
