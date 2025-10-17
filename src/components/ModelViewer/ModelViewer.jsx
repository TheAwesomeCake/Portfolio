// src/components/ModelViewer/ModelViewer.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF, Html } from '@react-three/drei';
import './ModelViewer.css';

// Componente que carrega e renderiza o modelo.
// É melhor defini-lo fora do ModelViewer para evitar recriações.
function Model({ modelPath, ...props }) {
  // useGLTF é um hook da 'drei' que facilita o carregamento de modelos .glb
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} {...props} />;
}

const ModelViewer = ({ modelPath }) => {
  // Pré-carrega o modelo para uma experiência mais fluida.
  // A chamada de preload deve ser feita aqui para garantir que execute no contexto do React.
  useGLTF.preload(modelPath);
  return (
    <div className="model-viewer-container">
      <Canvas dpr={[1, 2]} camera={{ fov: 45 }}>
        <Suspense fallback={<Html center>Carregando...</Html>}>
          {/* Stage adiciona um chão e iluminação padrão para apresentar o modelo */}
          <Stage environment="city" intensity={0.6}>
            <Model modelPath={modelPath} />
          </Stage>
        </Suspense>
        {/* OrbitControls permite que o usuário rotacione, dê zoom e mova o modelo */}
        <OrbitControls autoRotate />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
