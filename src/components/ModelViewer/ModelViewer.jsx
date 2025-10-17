
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF, Html } from '@react-three/drei';
import './ModelViewer.css';


function Model({ modelPath, ...props }) {

  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} {...props} />;
}

const ModelViewer = ({ modelPath }) => {

  useGLTF.preload(modelPath);
  return (
    <div className="model-viewer-container">
      <Canvas dpr={[1, 2]} camera={{ fov: 45 }}>
        <Suspense fallback={<Html center>Carregando...</Html>}>

          <Stage environment="city" intensity={0.6}>
            <Model modelPath={modelPath} />
          </Stage>
        </Suspense>

        <OrbitControls autoRotate />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
