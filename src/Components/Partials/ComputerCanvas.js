import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { CanvasLoader } from "./CanvasLoader"

export const ComputerCanvas = () => {

  const Computers = () => {
    const computer = useGLTF('/assets/models/desktop.glb', true)
    return (
      <mesh>
        <hemisphereLight 
          intensity={2.15}
          groundColor={"black"} 
        />
        <pointLight intensity={1} />
        <spotLight 
          position={[ -20, 60, 10 ]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <primitive 
          object={computer.scene}
          scale={0.9} 
          position={[ 0, -2.25, -1.0 ]}
          rotation={[ -0.01, -0.2, -0.1 ]}
        />
      </mesh>
    )
  }

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [35, 4, 10], fov: 35, zoom: 1.3, near: 1, far: 1000 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.3}
          minPolarAngle={Math.PI / 2.3}
          
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
