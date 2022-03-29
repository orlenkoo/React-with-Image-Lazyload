import React from "react";
import { createGlobalStyle } from "styled-components";
// OSWALD
import OswaldWoff2 from "./oswald/Oswald.woff2";
import OswaldWoff from "./oswald/Oswald.woff";
import Oswaldttf from "./oswald/Oswald.ttf";

// BEBAS NEUE
import BNWoff2 from "./bebas_neue/bebasneue.woff2";
import BNWoff from "./bebas_neue/bebasneue.woff";
import BNttf from "./bebas_neue/bebasneue.ttf";

// MONERD
import MNBWoff2 from "./monerd/Monerd-Bold.woff2";
import MNBWoff from "./monerd/Monerd-Bold.woff";
import MNWoff2 from "./monerd/monerd-solid.woff2";
import MNwoff from "./monerd/monerd-solid.woff";

// BREUCHE
import BreucheWoff2 from "./breuche/breuche.woff2";
import BreucheWoff from "./breuche/breuche.woff";

export const GlobalFonts = createGlobalStyle`
@font-face {
  font-family: 'Oswald';
  src:  local('OswaldWoff2'),
   url("fonts/Oswald.woff2") format('woff2');
   src:  local('OswaldWoff'),
  url("fonts/Oswald.woff") format('woff');  
  src:  local('Oswaldttf'),
  url("fonts/Oswald.ttf") format('truetype'); 
  font-weight: normal;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: 'BN';
  src: local('BNwoff'), 
  url("fonts/bebasneue.woff2") format('woff2');
  src: local('BNwoff2'),
  url("fonts/bebasneue.woff") format('woff');  
  src: local('BNttf'),
  url("fonts/bebasneue.ttf") format('truetype'); 
  font-weight: normal;
  font-style: normal;
  font-display: auto;
}

// Monerd Solid
@font-face {
  font-family: 'MN';
  src: local('MNwoff'),
  url("fonts/monerd-solid.woff") format('woff');   
  src: local('MNWoff2'), 
  url("fonts/monerd-solid.woff2") format('woff2');
  font-weight: normal;
  font-style: normal;
  font-display: auto;
}

// Monerd Bold
@font-face {
  font-family: 'MNB';
  src: local('MNBWoff2'), 
  url("fonts/Monerd-Bold.woff2") format('woff2');
  src: local('MNBWoff'),
  url("fonts/Monerd-Bold.woff") format('woff');  
  font-weight: bold;
  font-style: normal;
  font-display: auto;
}


// Breuche
@font-face {
  font-family: 'BR';
  src: local('BreucheWoff2'), 
  url("fonts/breuche.woff2") format('woff2');
  src: local('BreucheWoff'),
  url("fonts/breuche.woff") format('woff');  
  font-weight: normal;
  font-style: normal;
  font-display: auto;
}
`;
