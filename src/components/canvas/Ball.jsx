import REact, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'



const Ball = (props) => {
    const [decal] = useTexture([props.imgUrl])
    return (
        <div>Ball</div>
    )
}

export default Ball