import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sky } from '@react-three/drei';

const MinimalShape = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      {/* Positioned slightly to the right to balance the text */}
      <mesh ref={meshRef} position={[2.5, -0.5, -3]}>
        {/* A simple Icosahedron (radius 3, detail 0 for sharp flat faces). Represents a classic, minimal engineering aesthetic */}
        <icosahedronGeometry args={[2.5, 0]} />
        {/* 
          Using emissive ensures the lines physically emit light in the scene 
          and guarantees the shape is 100% visible against the dark background. 
        */}
        <meshStandardMaterial 
          color="var(--accent-color, #00FFAA)" 
          emissive="var(--accent-color, #00FFAA)"
          emissiveIntensity={0.4}
          wireframe={true}
          transparent
          opacity={0.7} 
          roughness={0}
        />
      </mesh>
    </Float>
  );
};

const Minimalist3D = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'auto' }}>
      <Canvas camera={{ position: [0, 0, 6] }} dpr={[1, 2]}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <MinimalShape />
      </Canvas>
      {/* Soft gradient fade for the bottom edge */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '30vh', background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)', pointerEvents: 'none' }} />
    </div>
  );
};

export default Minimalist3D;
