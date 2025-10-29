import conectaSymbol from './assets/symbols/conecta-symbol.png';
import dashboardSymbol from './assets/symbols/dashboard-symbol.png';
import novoConectaSymbol from './assets/symbols/novo-conecta-symbol.png';
import gameVaultSymbol from './assets/symbols/game-vault-symbol.png';

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

import unityLoader from '/unity-build/build-webgl.loader.js?url';
import unityData from '/unity-build/build-webgl.data?url';
import unityFramework from '/unity-build/build-webgl.framework.js?url';
import unityWasm from '/unity-build/build-webgl.wasm?url';

export const projects = [
  {
    id: 1,
    layoutType: 'default',
    symbol: conectaSymbol,
    title: 'Conecta ONGS - Frontend',
    shortDescription: 'Frontend de uma plataforma para conectar ONGs a voluntários.',
    longDescription: 'Projeto Interdisciplinar do segundo semestre da faculdade de Desenvolvimento de Software Multiplataforma. Trabalhei no front-end e sua conexão com o backend.',
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
    title: 'Dashboard de Assessoria',
    shortDescription: 'Dashboard para assessoria a imigrantes, com integração entre frontend e backend.',
    longDescription: 'Projeto Interdisciplinar do terceiro semestre da faculdade de Desenvolvimento de Software Multiplataforma, tendo um Backend robusto em spring, em que trabalhei no frontend e sua interação com o backend.',
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
    title: 'Novo Conecta ONGS',
    shortDescription: 'Reimaginação do Conecta ONGS, com stack fullstack em Node.JS e React.',
    longDescription: 'Projeto Interdisciplinar do quarto semestre da faculdade de Desenvolvimento de Software Multiplataforma, Projeto esse o qual trabalhei fullstack, com Node.JS e React, o qual é uma reconstrução do projeto do segundo semestre.',
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
    title: 'Game Vault',
    shortDescription: ' Loja mobile de chaves de jogos, utilizando a API da IGDB.',
    longDescription: 'Projeto Interdisciplinar do quinto semestre da faculdade de Desenvolvimento de Software Multiplataforma. Projeto o qual trabalhei no Frontend, com React Native. Também trabalhei utilizando a API da IGDB para ter facil acesso aos dados dos jogos.',
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
    symbol: gameVaultSymbol,
    title: 'RPG simples',
    shortDescription: 'Pequena demonstração de umRPG desenvolvido por mim na Unity',
    longDescription: 'Jogo desenvolvido na Unity, onde você pode explorar um pequeno mapa, interagir e enfrentar inimigos em batalhas por turnos. Foi um projeto pessoal para desenvolver minhas habilidades em desenvolvimento de jogos.',
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

  
];