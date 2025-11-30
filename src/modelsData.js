import buildingModel from './assets/models/building.glb?url';
import calliburnModel from './assets/models/Calliburn.glb?url';
import buildingSymbol from './assets/symbols/building-symbol.png';
import swordSymbol from './assets/symbols/sword-symbol.png';

export const models = [
  {
    id: 1,
    symbol: buildingSymbol,
    title: 'model1_title',
    shortDescription: 'model1_shortDesc',
    longDescription: 'model1_longDesc',
    modelPath: buildingModel,
    technologies: ['Blender'],
    details: [
      'model1_detail1',
      'model1_detail2'
    ]
  },
  {
    id: 2,
    symbol: swordSymbol,
    title: 'Calliburn',
    shortDescription: 'model2_shortDesc',
    longDescription: 'model2_longDesc',
    modelPath: calliburnModel,
    technologies: ['Blender'],
    details: [
      'model2_detail1',
      'model1_detail2'
    ]
  },
  
];