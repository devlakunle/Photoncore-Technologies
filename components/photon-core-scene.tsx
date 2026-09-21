'use client'

import { Canvas } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei'

export function PhotonCoreScene() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <Sparkles count={110} scale={7} size={1.4} speed={0.2} color="#8bc8ff" />
      </Canvas>
    </div>
  )
}
