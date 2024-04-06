import { useAnimations, useGLTF } from "@react-three/drei";
import planeScene from "../assets/3d/plane.glb";
import { useEffect, useRef } from "react";

const Plane = ({ isRotating, ...props }: any) => {
  const planeRef = useRef();
  const { scene, animations } = useGLTF(planeScene) as any;
  const { actions } = useAnimations(animations, planeRef);

  useEffect(() => {
    if (isRotating) {
      actions && actions["Take 001"] && actions["Take 001"].play();
    } else {
      actions && actions["Take 001"] && actions["Take 001"].stop();
    }
  }, [actions, isRotating]);
  return (
    <mesh {...props} ref={planeRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
