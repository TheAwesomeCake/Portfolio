import buildingModel from './assets/models/building.glb?url';
import calliburnModel from './assets/models/Calliburn.glb?url';
import buildingSymbol from './assets/symbols/building-symbol.png';
import swordSymbol from './assets/symbols/sword-symbol.png';

export const models = [
  {
    id: 1,
    symbol: buildingSymbol,
    title: 'Prédio 3D',
    shortDescription: 'Um modelo 3D simples de um prédio',
    longDescription: 'Este é um modelo 3D prédio, criado com Blender. Feito para estudar e aprender a tecnologia de modelagem 3D.',
    modelPath: buildingModel,
    technologies: ['Blender'],
    details: [
      'Modelado e texturizado no Blender.',
      'Otimizado para renderização em tempo real.'
    ]
  },
  {
    id: 2,
    symbol: swordSymbol,
    title: 'Calliburn',
    shortDescription: 'Modelo 3D de espada baseada em jogo medieval',
    longDescription: 'Recriação da espada lendária Calluburn, e sua versão feita em Sonic and the Black Knight. Modelo 3D criado no Blender para estudo e prática de modelagem 3D.',
    modelPath: calliburnModel,
    technologies: ['Blender'],
    details: [
      'Modelado no Blender.',
      'Otimizado para renderização em tempo real.'
    ]
  },
  
];