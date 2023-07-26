import React, { forwardRef, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const Emitter = forwardRef((props, forwardRef) => {
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/public/ex1.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }));
  const meshRef = useRef();

  useEffect(() => {
    video.play().catch(console.error);
    return () => video.pause();
  }, [video]);

  return (
    <mesh ref={(ref) => {
      meshRef.current = ref;
      if (forwardRef) {
        if (typeof forwardRef === 'function') forwardRef(ref);
        else forwardRef.current = ref;
      }
    }} {...props}>
      <planeGeometry args={[8, 8]} /> {/* Use planeGeometry for flat surface */}
      <meshBasicMaterial>
        <videoTexture attach="map" args={[video]} />
      </meshBasicMaterial>
    </mesh>
  );
});

export default Emitter;
