import { useGLTF } from "@react-three/drei";
import skyScene from "../assets/3d/sky.glb";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

interface SkyProps {
  isRotating: boolean;
}

const Sky = ({ isRotating }: SkyProps) => {
  const sky = useGLTF(skyScene) as any;
  const skyRef = useRef() as any;

  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  // It ensures smooth animations by making the rotation frame rate-independent.
  // 'delta' represents the time in seconds since the last frame.
  useFrame((_, delta) => {
    if (isRotating) {
      (skyRef.current as any).rotation.y += 0.15 * delta; // Adjust the rotation speed as needed
    }
  });

  return (
    <mesh ref={skyRef}>
      {/* use the primitive element when you want to directly embed a complex 3D model or scene */}
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;