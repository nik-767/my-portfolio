import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Environment, Float, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const DarkMatterBlob = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.2;
    
    // Intense, smooth Parallax tracking 
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, state.mouse.x * 2, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, state.mouse.y * 2, 0.05);
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      {/* The Core: A massively reflective, undulating Dark Matter Blob */}
      <Sphere ref={meshRef} args={[2.5, 128, 128]} position={[0, 0, 0]}>
        <MeshDistortMaterial 
          color="#020202" // Absolute Vantablack 
          attach="material" 
          distort={0.4} // Menacing continuous wave distortion
          speed={1.5} // Undulating speed
          roughness={0.05} // Glass-like gloss
          metalness={1} // 100% reflective mirror
          clearcoat={1} // Auto-paint clearcoat layers
          clearcoatRoughness={0.1}
          envMapIntensity={2} // Extremely high environment reflection
        />
      </Sphere>
      
      {/* The Aura: Massive subtle neon cage surrounding the dark matter */}
      <Sphere scale={[1.08, 1.08, 1.08]} args={[2.5, 32, 32]} position={[0, 0, 0]}>
         <meshBasicMaterial 
           color="var(--accent-color, #00FFAA)" 
           wireframe 
           transparent 
           opacity={0.06} 
         />
      </Sphere>
    </Float>
  );
};

const MainAttraction3D = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 8] }} dpr={[1, 2]}>
        {/* Pure studio reflections to make the blob look like liquid mirror */}
        <Environment preset="studio" /> 
        <ambientLight intensity={0.1} />
        
        {/* Elite Cinematic Rim Lighting designed to specifically highlight the edges of the dark blob */}
        <spotLight position={[10, 10, 10]} intensity={4} color="var(--accent-color, #00FFAA)" penumbra={1} />
        <spotLight position={[-10, -10, -10]} intensity={3} color="#FF1E50" penumbra={1} />
        <spotLight position={[0, 15, 0]} intensity={2} color="#FFFFFF" penumbra={1} />
        
        {/* The Star Effect! Deep space stars combined with floating neon sparks */}
        <Stars radius={50} depth={50} count={3500} factor={4} saturation={0} fade speed={1.5} />
        <Sparkles count={150} scale={15} size={3} speed={0.5} opacity={0.3} color="#00FFAA" />
        
        <DarkMatterBlob />
      </Canvas>
      {/* Heavy gradients to melt the 3D canvas gracefully so your giant typography stays perfectly readable */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50vh', background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)', pointerEvents: 'none' }} />
    </div>
  );
};

export default MainAttraction3D;
