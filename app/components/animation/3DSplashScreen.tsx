/* eslint-disable react/no-unknown-property */
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import gsap from 'gsap';
import { Text3DLogo as AnimatedText3D } from '@/components/3d/Text3DLogo';
import * as THREE from 'three';

interface SplashProps {
    onFinish?: () => void;
    duration?: number;
}

/* ------------------------------------------------------------
   CAMERA ZOOM COMPONENT
-------------------------------------------------------------*/
function CameraZoom({ targetPosition, onFinish }: any) {
    const cam = useThree((state) => state.camera);

    useEffect(() => {
        if (!targetPosition) return;

        const tween = gsap.to(cam.position, {
            x: targetPosition.x,
            y: targetPosition.y,
            z: targetPosition.z,
            duration: 1.4,
            ease: 'power3.in',
            onComplete: () => onFinish && onFinish(),
        });

        // Cleanup aman untuk TypeScript
        return () => {
            tween.kill();
        };
    }, [targetPosition, onFinish]);


    return null;
}

/* ------------------------------------------------------------
   MAIN SPLASH SCREEN COMPONENT
-------------------------------------------------------------*/
export default function ThreeDSplashScreen({ onFinish, duration = 2.8 }: SplashProps) {
    const [show, setShow] = useState(true);

    const [scale, setScale] = useState(0.1);
    const [rotationSpeed, setRotationSpeed] = useState(0.6);
    const [startZoom, setStartZoom] = useState(false);

    const targetRef = useRef<THREE.Mesh>(null!);
    const [targetPos, setTargetPos] = useState(new THREE.Vector3(0, 0, 0));

    /* --------------------------------------------------------
        ANIMASI MASUK (SCALE + ROTATION SLOWDOWN)
    ---------------------------------------------------------*/
    useEffect(() => {
        const tl = gsap.timeline();

        // Scale text dari kecil → normal
        tl.to(
            {},
            {
                duration: 1.6,
                onUpdate: () => setScale((prev) => Math.min(prev + 0.015, 1)),
                ease: 'power3.out',
            }
        );

        // Kurangi kecepatan rotasi
        tl.to(
            {},
            {
                duration: 1.8,
                onUpdate: () => setRotationSpeed((prev) => Math.max(prev - 0.015, 0.15)),
                ease: 'power2.out',
            },
            '-=1.2'
        );

        // Setelah durasi splash → start zoom
        const delayed = gsap.delayedCall(duration, () => {
            if (targetRef.current) {
                const pos = new THREE.Vector3();
                targetRef.current.getWorldPosition(pos);
                setTargetPos(pos);
            }
            setStartZoom(true);
        });

        // Cleanup
        return () => {
            tl.kill();
            delayed.kill();
        };
    }, [duration]);

    /* --------------------------------------------------------
        FADE OUT & FINISH
    ---------------------------------------------------------*/
    const handleFinish = () => {
        const container = document.querySelector('.splash-container') as HTMLElement;

        if (container) {
            container.style.opacity = '0';
        }

        setTimeout(() => {
            setShow(false);
            onFinish && onFinish();
        }, 600);
    };

    if (!show) return null;

    /* --------------------------------------------------------
        RENDER SPLASH SCREEN 3D
    ---------------------------------------------------------*/
    return (
        <div className="fixed inset-0 bg-black splash-container opacity-100 transition-opacity duration-700 flex items-center justify-center overflow-hidden z-50">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={0.7} />
                <spotLight position={[5, 5, 10]} intensity={1.2} castShadow />
                <pointLight position={[-5, -5, -5]} intensity={0.8} />

                <group>
                    <AnimatedText3D
                        text="MY PORTOFOLIO"
                        scaleFactor={scale}
                        rotationSpeed={rotationSpeed}
                        color="#79a5d0"
                    />

                    {/* Titik target huruf — sekarang huruf “P” */}
                    <mesh ref={targetRef} position={[2.2, 0, 0]}>
                        <sphereGeometry args={[0.01, 8, 8]} />
                        <meshBasicMaterial transparent opacity={0} />
                    </mesh>
                </group>

                {startZoom && (
                    <CameraZoom
                        targetPosition={{
                            x: targetPos.x,
                            y: targetPos.y,
                            z: targetPos.z - 0.3, // kamera masuk ke dalam huruf
                        }}
                        onFinish={handleFinish}
                    />
                )}

                <Environment preset="city" />
            </Canvas>

            {/* Loading text */}
            <p className="absolute bottom-10 text-white opacity-50 tracking-widest text-sm animate-pulse">
                Loading Experience...
            </p>
        </div>
    );
}
