import conectaSymbol from './assets/symbols/conecta-symbol.png';
import dashboardSymbol from './assets/symbols/dashboard-symbol.png';
import novoConectaSymbol from './assets/symbols/novo-conecta-symbol.png';
import gameVaultSymbol from './assets/symbols/game-vault-symbol.png';
import unitySymbol from './assets/symbols/RPG-symbol.png';

import co1 from './assets/conecta_ongs-1.png';
import co2 from './assets/conecta_ongs-2.png';
import co3 from './assets/conecta_ongs-3.png';
import co4 from './assets/conecta_ongs-4.png';

import wb1 from './assets/WB-1.png';
import wb2 from './assets/WB-2.png';
import wb3 from './assets/WB-3.png';

import nco1 from './assets/CO-1.png';
import nco2 from './assets/CO-2.png';
import nco3 from './assets/CO-3.png';
import nco4 from './assets/CO-4.png';
import nco5 from './assets/CO-5.png';

import gv1 from './assets/GV-1.png';
import gv2 from './assets/GV-2.png';
import gv3 from './assets/GV-3.png';
import gv4 from './assets/GV-4.png';
import gv5 from './assets/GV-5.png';
import gv6 from './assets/GV-6.png';

import u1 from './assets/u1.png';
import u2 from './assets/u2.png';
import u3 from './assets/u3.png';

import unityLoader from '/unity-build/build-webgl.loader.js?url';
import unityData from '/unity-build/build-webgl.data?url';
import unityFramework from '/unity-build/build-webgl.framework.js?url';
import unityWasm from '/unity-build/build-webgl.wasm?url';

export const projects = [
  {
    id: 1,
    layoutType: 'default',
    symbol: conectaSymbol,
    title: 'proj1_title',
    shortDescription: 'proj1_shortDesc',
    longDescription: 'proj1_longDesc',
    images: [
      co1,
      co2,
      co3,
      co4
    ],
    githubLink: 'https://github.com/TheAwesomeCake/Conecta-ONGS-Frontend',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 2,
    layoutType: 'default',
    symbol: dashboardSymbol,
    title: 'proj2_title',
    shortDescription: 'proj2_shortDesc',
    longDescription: 'proj2_longDesc',
    images: [
      wb1,
      wb2,
      wb3
    ],
    githubLink: 'https://github.com/TheAwesomeCake/Acessoria-Dashboard',
    technologies: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 3,
    layoutType: 'default',
    symbol: novoConectaSymbol,
    title: 'proj3_title',
    shortDescription: 'proj3_shortDesc',
    longDescription: 'proj3_longDesc',
    images: [
      nco1,
      nco2,
      nco3,
      nco4,
      nco5
    ],
    githubLink: 'https://github.com/TheAwesomeCake/Novo-Conecta-ONGS',
    technologies: ['React', 'Node.js', 'MySQL', 'JavaScript']
  },
  {
    id: 4,
    layoutType: 'default',
    symbol: gameVaultSymbol,
    title: 'proj4_title',
    shortDescription: 'proj4_shortDesc',
    longDescription: 'proj4_longDesc',
    images: [
      gv1,
      gv2,
      gv3,
      gv4,
      gv5,
      gv6
    ],
    githubLink: 'https://github.com/TheAwesomeCake/Game-Vault',
    technologies: ['React Native', 'JavaScript', 'CSS']
  },
  {
    id: 5,
    layoutType: 'horizontal',
    symbol: unitySymbol,
    title: 'proj5_title',
    shortDescription: 'proj5_shortDesc',
    longDescription: 'proj5_longDesc',
    unityConfig: {
      loaderUrl: unityLoader,
      dataUrl: unityData,
      frameworkUrl: unityFramework,
      codeUrl: unityWasm,
      companyName: "Lucas",
      productName: "RPG Simples",
      productVersion: "1.0",
    },
    githubLink: 'https://github.com/TheAwesomeCake/Unity-RPG',
    technologies: ['Unity', 'C#']
  },
  {
    id: 6,
    layoutType: 'default',
    symbol: unitySymbol,
    title: 'proj6_title',
    shortDescription: 'proj6_shortDesc',
    longDescription: 'proj6_longDesc',
    images: [
      u1,
      u2,
      u3
    ],
    githubLink: 'https://github.com/TheAwesomeCake/Unity-RPG',
    technologies: ['Unity', 'C#']
  },

  
];