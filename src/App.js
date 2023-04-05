import * as React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Stage, Grid, OrbitControls, Environment } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import tardisModel from '../public/tardis.glb';


function Text({ children, position, ...props }) {
  const ref = useRef();

  return (
    <mesh position={position} {...props}>
      <textGeometry ref={ref} args={[children, {size: 1,
  height: 41,
  curveSegments: 12,
  bevelEnabled: true,
  color: 'black',
  bevelThickness: 0.3,
  bevelSize: 0.2,
  bevelOffset: 0,
  bevelSegments: 5,
  flair: 0.5}]} />
      
    </mesh>
  );
}
export default function App() {
  return (
    <Canvas gl={{ logarithmicDepthBuffer: true }} shadows camera={{ position: [-15, 0, 10], fov: 25 }}>
      <fog attach="fog" args={['black', 15, 21.5]} />
      <Stage intensity={0.1} shadows={{ type: 'accumulative', bias: -0.0001 }} adjustCamera={true}>
        <Model />
      </Stage>
      <Grid renderOrder={-1} position={[0, -1.85, 0]} infiniteGrid cellSize={0.6} cellThickness={0.6} sectionSize={3.3} sectionThickness={1.5} sectionColor={[0.5, 0.5, 10]} fadeDistance={30} />
      <OrbitControls autoRotate autoRotateSpeed={0.05} enableZoom={true} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={1} mipmapBlur />
      </EffectComposer>
      <Environment background preset="sunset" blur={0.2} />
    </Canvas>
  )
}

const obj = {
  bottom_hinge: { material: 'gold', position: [-1.11, 0.16, 1.67], scale: [0.56, 1, 0.56] },
  top_hinge: { material: 'gold', position: [-1.11, 0.75, 1.67], scale: [0.56, 1, 0.56] },
  Cylinder: { material: 'gold', position: [0.21, 0.6, 1.6], rotation: [Math.PI / 2, 0, 0] },
  door_handle: { material: 'lead', position: [0.21, 0.14, 1.75], scale: 0.83 },
  panelhandle: { material: 'lead', position: [-0.37, 0.47, 1.71], scale: 0.46 },
  Frontpanel: { material: 'frontpanel', position: [-0.72, 0.45, 1.63], scale: [0.36, 0.45, 0.04] },
  interiorlamp: { material: 'brightlight', position: [0, 2.94, 0], rotation: [1.47, -0.01, 0] },
  toplamp: { material: 'brightlight', position: [0, 4.37, 0], rotation: [1.47, -0.01, 0] },
  lamphousing: { material: 'flatglass', position: [0, 4.37, 0], scale: [1.11, 1.08, 1.11] },

}

const lom = Object.keys(obj)


export function Model(props) {
  const { nodes, materials } = useGLTF(tardisModel)
  console.log(nodes, materials)
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.tardis.geometry} material={materials['blue paintwork']} position={[0, 3.59, 0]}>

        {lom.map((key) => {
          <><Text
            key={key}
            position={obj[key].position}
          >
            Hasadsadsadsad
          </Text>
            <mesh geometry={nodes[key].geometry} material={obj[key].material} position={obj[key].position} scale={obj[key].scale} />
          </>

        })

        }
        {/* <mesh geometry={nodes.bottom_hinge.geometry} material={materials.gold} position={[-1.11, 0.16, 1.67]} scale={[0.56, 1, 0.56]} />
        <mesh geometry={nodes.top_hinge.geometry} material={materials.gold} position={[-1.11, 0.75, 1.67]} scale={[0.56, 1, 0.56]} />
        <mesh geometry={nodes.Cylinder.geometry} material={materials.gold} position={[0.21, 0.6, 1.6]} rotation={[Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.door_handle.geometry} material={materials.lead} position={[0.21, 0.14, 1.75]} scale={0.83} />
        <mesh geometry={nodes.panelhandle.geometry} material={materials.lead} position={[-0.37, 0.47, 1.71]} scale={0.46} />
        <mesh geometry={nodes.Frontpanel.geometry} material={materials.frontpanel} position={[-0.72, 0.45, 1.63]} scale={[0.36, 0.45, 0.04]} />
        <mesh geometry={nodes.interiorlamp.geometry} material={materials.brightlight} position={[0, 2.94, 0]} rotation={[1.47, -0.01, 0]} />
        <mesh geometry={nodes.toplamp.geometry} material={materials.brightlight} position={[0, 4.37, 0]} rotation={[1.47, -0.01, 0]} />
        <mesh geometry={nodes.lamphousing.geometry} material={materials.flatglass} position={[0, 4.37, 0]} scale={[1.11, 1.08, 1.11]} /> */}
        <mesh geometry={nodes.sign.geometry} material={materials.flatglass} />
        <mesh geometry={nodes.sign001.geometry} material={materials.flatglass} />
        <mesh geometry={nodes.windows.geometry} material={materials.flatglass} />
      </mesh>
      <mesh geometry={nodes.lighting2.geometry} material={materials.brightlight} position={[-8.78, 2.78, -22.07]} rotation={[1.54, 0.23, -1.71]} />
      <mesh geometry={nodes.lighting1.geometry} material={materials.brightlight} position={[3.91, 7.36, 16.81]} rotation={[1.2, 0.16, -0.9]} />
    </group>
  )
}

useGLTF.preload(tardisModel)
