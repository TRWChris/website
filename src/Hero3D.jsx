import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

function RotatingTorus() {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta * 0.15;
    ref.current.rotation.y += delta * 0.1;
  });
  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1.2, 0.35, 128, 32]} />
      <meshStandardMaterial color="#0ff" roughness={0.25} metalness={0.95} />
    </mesh>
  );
}

const Hero3D = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2 }}
    className="absolute inset-0"
  >
    <Canvas camera={{ position: [0, 0, 6] }} className="w-full h-full">
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        <RotatingTorus />
      </Suspense>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      <OrbitControls enableZoom={false} />
    </Canvas>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight drop-shadow-lg">
        Welcome to <span className="text-teal-300">Your Future</span> of Care
      </h1>
      <p className="mt-6 max-w-2xl text-lg opacity-80">
        Explore preventive, healing, and thriving journeys—all powered by cosmic innovation.
      </p>
    </div>
  </motion.div>
);

export default Hero3D;
