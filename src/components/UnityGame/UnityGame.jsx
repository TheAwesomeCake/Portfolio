import React, { useCallback } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import './UnityGame.css';

function UnityGame({ unityConfig, width = "100%", height = "600px" }) {
  const { unityProvider, isLoaded, loadingProgression, requestFullscreen } = useUnityContext(unityConfig);

  const handleOnClickFullscreen = useCallback(() => {
    requestFullscreen(true);
  }, [requestFullscreen]);

  const loadingPercentage = Math.round(loadingProgression * 100);

  return (
    <div className="unity-game-container">
      {!isLoaded && (
        <div className="loading-overlay">
          <p>Carregando... ({loadingPercentage}%)</p>
        </div>
      )}
      <Unity unityProvider={unityProvider} style={{ width, height }} />
    </div>
  );
}

export default UnityGame;