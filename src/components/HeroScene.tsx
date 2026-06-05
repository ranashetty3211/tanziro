import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import { useMemo, useRef, Suspense } from "react";
import * as THREE from "three";

function Particles({ count = 1500 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.04;
    ref.current.rotation.x += delta * 0.01;
    const pos = ref.current.geometry.attributes.position as THREE.BufferAttribute;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      pos.array[i * 3 + 1] += Math.sin(t + i) * 0.0008;
    }
    pos.needsUpdate = true;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#7dd3fc"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.85}
      />
    </Points>
  );
}

function WaterOrb() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.15;
    ref.current.rotation.x = Math.sin(t * 0.3) * 0.15;
    const s = 1 + Math.sin(t * 1.2) * 0.02;
    ref.current.scale.setScalar(s);
  });
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={ref} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.4, 4]} />
        <meshPhysicalMaterial
          color="#0ea5b7"
          roughness={0.05}
          metalness={0.2}
          transmission={0.92}
          thickness={1.4}
          ior={1.5}
          clearcoat={1}
          clearcoatRoughness={0.05}
          emissive="#155e75"
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

function Rings() {
  const g = useRef<THREE.Group>(null);
  useFrame((s, d) => {
    if (g.current) g.current.rotation.z += d * 0.05;
  });
  return (
    <group ref={g} position={[0, 0, 0]}>
      {[1.9, 2.4, 3.0].map((r, i) => (
        <mesh key={r} rotation={[Math.PI / 2 + i * 0.2, i * 0.4, 0]}>
          <torusGeometry args={[r, 0.005, 16, 200]} />
          <meshBasicMaterial color="#7dd3fc" transparent opacity={0.35 - i * 0.08} />
        </mesh>
      ))}
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 5], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 4, 5]} intensity={1.2} color="#a5f3fc" />
        <pointLight position={[-3, -2, 2]} intensity={1.5} color="#0ea5b7" />
        <pointLight position={[0, 0, 3]} intensity={0.8} color="#ffffff" />
        <WaterOrb />
        <Rings />
        <Particles />
      </Suspense>
    </Canvas>
  );
}