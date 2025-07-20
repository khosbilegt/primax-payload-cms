'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import type { Page } from '@/payload-types'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import './AnimatedText.css'

const Particle = ({
  origin,
  index,
  isFloater,
  totalCount,
}: {
  origin: THREE.Vector3
  index: number
  isFloater: boolean
  totalCount: number
}) => {
  const ref = useRef<THREE.Mesh>(null)
  const direction = useMemo(() => origin.clone().normalize(), [origin])
  const speed = 2 + Math.random() // control how fast this particle oscillates

  // Determine if this particle should evaporate - now cycles continuously
  const evaporationCycleTime = useMemo(() => 8 + Math.random() * 6, []) // 8-14 second cycles
  const evaporationOffset = useMemo(() => Math.random() * evaporationCycleTime, []) // stagger start times

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    // Siri-like breathing cycle - slow, gentle pulsing
    const breathingCycle = 6 // 6-second breathing cycle
    const breathingPhase = (t % breathingCycle) / breathingCycle // 0 to 1

    // Create smooth breathing curve: inhale -> pause -> exhale -> pause
    const breathingCurve = (Math.sin(breathingPhase * Math.PI * 2 - Math.PI / 2) + 1) / 2 // 0 to 1 smooth

    // Base sphere position - use original random positions but normalize to sphere
    const normalizedOrigin = origin.clone().normalize()
    const phi = Math.acos(normalizedOrigin.z)
    const theta = Math.atan2(normalizedOrigin.y, normalizedOrigin.x)

    // Siri-like radius pulsing - gentle breathing effect
    const baseRadius = 2
    const breathingIntensity = 0.3 // how much the sphere expands/contracts
    const currentRadius = baseRadius + breathingCurve * breathingIntensity

    // Add gentle wave distortions like Siri's surface ripples
    const waveFreq1 = t * 0.8 + index * 0.1
    const waveFreq2 = t * 1.2 + index * 0.15
    const waveFreq3 = t * 0.5 + index * 0.08

    // Multiple wave layers for organic feeling
    const wave1 = Math.sin(waveFreq1) * 0.08
    const wave2 = Math.cos(waveFreq2) * 0.06
    const wave3 = Math.sin(waveFreq3) * 0.04

    const totalWave = wave1 + wave2 + wave3

    // Final radius with breathing and waves
    const finalRadius = currentRadius + totalWave

    // Calculate sphere position
    const spherePos = new THREE.Vector3(
      finalRadius * Math.sin(phi) * Math.cos(theta),
      finalRadius * Math.sin(phi) * Math.sin(theta),
      finalRadius * Math.cos(phi),
    )

    // Gentle formation animation - particles slowly move to their positions
    const formationTime = Math.min(1, t / 3) // 3 seconds to form
    let finalPos = origin.clone().lerp(spherePos, formationTime)

    // Continuous evaporation cycle - particles evaporate and regenerate
    const cycleProgress = ((t + evaporationOffset) % evaporationCycleTime) / evaporationCycleTime
    const isInEvaporationPhase = cycleProgress > 0.7 && cycleProgress < 0.95 // evaporate for 25% of cycle

    if (isInEvaporationPhase) {
      // Evaporation phase - particle floats away
      const evaporationProgress = (cycleProgress - 0.7) / 0.25 // 0 to 1 within evaporation phase
      const evaporationHeight = evaporationProgress * 2 // float up
      const evaporationSway = Math.sin(t * 1.5 + index) * 0.2 // gentle sway

      // Start from the breathing sphere position and float away
      finalPos.y += evaporationHeight
      finalPos.x += evaporationSway
      finalPos.z += Math.cos(t * 1.2 + index) * 0.15

      // Fade out the particle as it evaporates
      const opacity = 1 - evaporationProgress

      if (ref.current) {
        const material = ref.current.material as THREE.MeshStandardMaterial
        material.opacity = opacity
        material.transparent = true
        ref.current.visible = opacity > 0.1
      }
    } else {
      // Normal breathing sphere behavior
      if (ref.current) {
        const material = ref.current.material as THREE.MeshStandardMaterial
        material.opacity = 1
        material.transparent = false
        ref.current.visible = true
      }
    }

    if (ref.current) {
      ref.current.position.copy(finalPos)
    }
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.01, 6, 6]} />
      <meshStandardMaterial color={[0, 0, 0]} />
    </mesh>
  )
}

const ParticleField = ({ count = 600 }) => {
  const particles = useMemo(() => {
    const result: { origin: THREE.Vector3; isFloater: boolean }[] = []
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1)
      const theta = 2 * Math.PI * Math.random()
      const r = 2 // base sphere radius
      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi)
      result.push({
        origin: new THREE.Vector3(x, y, z),
        isFloater: Math.random() < 0.1, // ~10% floaters
      })
    }
    return result
  }, [count])

  return (
    <>
      {particles.map(({ origin, isFloater }, i) => (
        <Particle key={i} origin={origin} index={i} isFloater={isFloater} totalCount={count} />
      ))}
    </>
  )
}

const ResponsiveCanvas = () => {
  useEffect(() => {
    const handleResize = () => {
      window.dispatchEvent(new Event('resize'))
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <ParticleField count={2000} />
    </>
  )
}

const texts = [
  'Where human intent meets property intelligence',
  'What is extra 3.5 GR worth to your development?',
]

export const HomePageHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  const gradientRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [_, setAnimating] = useState(false)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const target = gradientRef.current
    let deg = 0

    const gradientInterval = setInterval(() => {
      if (!target) return
      target.style.background = `linear-gradient(${deg}deg, #F68522 15%, #A52C01 35.11%, #77270B 55.8%, #532314 65.51%, #38211A 75.23%, #281F1E 83.97%, #231F20 87.76%)`
      deg = deg === 360 ? 0 : deg + 2 // rotation speed
    }, 30) // rotation interval

    // Initialize first text animation
    if (textRef.current) {
      textRef.current.classList.add('enter')
    }

    const textInterval = setInterval(() => {
      if (textRef.current) {
        textRef.current.classList.remove('enter')
        textRef.current.classList.add('exit')

        setAnimating(true)

        setTimeout(() => {
          setIndex((prev) => (prev + 1) % texts.length)
          textRef.current?.classList.remove('exit')
          textRef.current?.classList.add('enter')

          setAnimating(false)
        }, 600) // Match CSS animation duration
      }
    }, 3000)

    return () => {
      clearInterval(gradientInterval)
      clearInterval(textInterval)
    }
  }, [])

  return (
    <div className="flex flex-col lg:flex-row h-screen items-center">
      <div ref={gradientRef} className="absolute inset-0 opacity-60 z-10" />

      <div
        className="w-full lg:w-full lg:order-2 relative h-[60%] lg:h-full lg:h-2/3"
        data-theme="dark"
      >
        <Canvas
          camera={{ position: [0, 0, 6], fov: 75 }}
          resize={{ scroll: false, debounce: { scroll: 50, resize: 0 } }}
        >
          <ResponsiveCanvas />
        </Canvas>
      </div>

      <div className="w-full lg:w-full lg:order-1 px-8 lg:px-0 flex items-center justify-center text-white relative lg:h-1/3 flex items-center">
        <div className="text-wrapper relative z-20 text-3xl lg:text-4xl xl:text-5xl">
          <div ref={textRef} className="text">
            {texts[index]}
          </div>
        </div>
      </div>
    </div>
  )
}
