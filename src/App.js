import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import { Physics, useBox } from '@react-three/cannon';
import './styles.css';

function World() {
    const [ref] = useBox(() => ({ mass: -1 }));
    return (
        <mesh ref={ref} position={[0, 2, 0]}>
            <sphereBufferGeometry attach='geometry' />
            <meshLambertMaterial attach='material' color='hotpink' />
        </mesh>
    )
}

function World1(props) {
    const [ref, api] = useBox(() => ({ mass: 1, position: [0, 10, 0] }));
    return (
        <mesh onClick={() => {
            api.velocity.set(20, 10, 29)
        }} ref={ref} position={[0, -2, 0]}>
            <boxBufferGeometry attach='geometry' />
            <meshLambertMaterial attach='material' color='hotpink' />
        </mesh>
    )
}

function Plane() {
    return (
        <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach='geometry' args={[3, 3]} />
            <meshLambertMaterial attach='material' color='lightblue' />s
        </mesh>
    )
}

export default function App() {
    return <Canvas>
        <PerspectiveCamera />
        <OrbitControls />
        <ambientLight intesity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Stars />
        <Physics>
            <World />
            <World1 />
            <Plane />
        </Physics>

    </Canvas>
}