import React from "react";


import { Button } from "../../shared/components/Buttons"


const HomePage: React.FC = (props) => {
  function cookie() {
    console.log("Test mode", process.env.MODE);
  }



  return (
    <div ><p className="heading" >Home component!!!</p>
      <Button> GLOBALFONTS</Button>
      <p className="font" >Click the button?</p>
      {/* <div ><p className="heading" style={ {color: "red"}}>Home component!!!</p> */}

      {/* <div > <img src={ddr} alt="Ecourbanhub" className="ddr" /></div> */}
      {/* <div > <img src={ddr} alt="Ecourbanhub" className="ddr" /></div> */}
      <button onClick={() => cookie()}>Press me!</button>
    </div>
  );
};

export default { component: HomePage };
