"use client";
import { useState, useRef, Suspense, FC } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm.js";

interface StarBackgroundProps {
  color?: string;
  size?: number;
  radius?: number;
}

const StarBackground: FC<StarBackgroundProps> = ({
  color = "#fff",
  size = 0.002,
  radius = 1.2,
}) => {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius }),
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const RelativeStars: FC = () => (
  <div
    className="w-full h-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
   inset-0 -z-29"
  >
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default RelativeStars;
