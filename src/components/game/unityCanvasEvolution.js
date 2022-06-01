import React from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';
import '../../styles.scss';

const unityContext = new UnityContext({
  loaderUrl: 'build/Evolution.loader.js',
  dataUrl: 'build/Evolution.data',
  frameworkUrl: 'build/Evolution.framework.js',
  codeUrl: 'build/Evolution.wasm',
});

function UnityCanvasEvolution() {
  return (
    <div className="canvas-wrapper">
      <Unity className="interface" unityContext={unityContext} />
    </div>
  );
}

export default UnityCanvasEvolution;
