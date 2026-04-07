import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';

const AbstractShape = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={meshRef} position={[2.5, -0.5, -3]}>
        <torusKnotGeometry args={[1.5, 0.4, 128, 32]} />
        <meshStandardMaterial 
          color="#00FFAA" 
          roughness={0.2} 
          metalness={0.8} 
          wireframe={true}
          transparent
          opacity={0.25}
        />
      </mesh>
    </Float>
  );
};

const WireframeGlobe = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        {/* Adds an incredibly beautiful reactive starfield */}
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        <AbstractShape />
      </Canvas>
    </div>
  );
};

export default WireframeGlobe;
