import * as React from 'react'
import { Canvas } from '@react-three/fiber'
import { Stage, MeshReflectorMaterial, OrbitControls, PresentationControls } from '@react-three/drei'
import { Model } from './TARDIS.jsx';

export default function App() {
  return (
    <Canvas>
      <color attach="background" args={["#101010"]} />
      <fog attach="fog" args={["#101010", 10, 20]} />
      {/* <PresentationControls
        speed={1.5}
        global={true}
        config={{ mass: 1, tension: 170, friction: 13 }}
        polar={[-0.1, Math.PI / 4]}
        cursor={false}
      > */}
      <OrbitControls/>
        <Stage adjustCamera={2} intensity={0} castShadow={true} environment={null} >
          <Model/>
        </Stage>
        <pointLight position={[0, 0, 5]} intensity={0.65}/>
        <pointLight position={[0, 0, -5]} intensity={0.65}/>
        <pointLight position={[5, 0, 0]} intensity={0.65}/>
        <pointLight position={[-5, 0, 0]} intensity={0.65}/>
        <mesh position={[0, -1.36, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[400, 100]}
            resolution={1024}
            mixBlur={1}
            mixStrength={15}
            depthScale={1}
            minDepthThreshold={0.40}
            color="#151515"
            metalness={0.6}
            roughness={1}
          />
        </mesh>
      {/* </PresentationControls> */}
    </Canvas>
  )
}