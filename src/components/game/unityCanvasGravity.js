import React from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';
import '../../styles.scss';

const unityContext = new UnityContext({
  loaderUrl: 'build/Gravity.loader.js',
  dataUrl: 'build/Gravity.data',
  frameworkUrl: 'build/Gravity.framework.js',
  codeUrl: 'build/Gravity.wasm',
});

function UnityCanvasGravity() {
  return (
    <div className="canvas-wrapper">
      <Unity className="interface" unityContext={unityContext} />
    </div>
  );
}

export default UnityCanvasGravity;
