// app/components/3d/Text3DLogo.tsx
'use client';
// ✅ PERBAIKAN: Impor SEMUA hook yang diperlukan dari React
import React, { useRef, useMemo, useLayoutEffect } from 'react';
import { useFrame, useLoader, extend } from '@react-three/fiber';
import { FontLoader, TextGeometry } from 'three-stdlib';
import * as THREE from 'three';

// Daftarkan TextGeometry agar dikenali oleh JSX R3F
extend({ TextGeometry });

// Catatan: Interface sudah Anda definisikan dengan benar, 
// error 'Cannot find name Text3DLogoProps' mungkin karena typo atau lokasi impor.
interface Text3DLogoProps {
    text: string;
    scaleFactor: number;
    rotationSpeed: number;
    color?: string;
}

export function Text3DLogo({ text, scaleFactor, rotationSpeed, color = "#79a5d0" }: Text3DLogoProps) {
    const meshRef = useRef<THREE.Mesh>(null!);

    // ✅ PERBAIKAN PATH FONT: Mengacu pada public/fonts/
    const font = useLoader(FontLoader, '/assets/fonts/helvetiker_bold.typeface.json');

    // ✅ PERBAIKAN useMemo: Dependencies dimasukkan ([font])
    const textOptions = useMemo(
        () => ({
            font: font,
            size: 0.5,
            height: 0.1,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5,
        }),
        [font] // Array dependencies untuk useMemo
    );

    // ✅ PERBAIKAN useLayoutEffect: Sudah diimpor dan digunakan
    useLayoutEffect(() => {
        if (meshRef.current) {
            meshRef.current.geometry.computeBoundingBox();
            meshRef.current.geometry.center();
        }
    }, [textOptions, text]); // Array dependencies untuk useLayoutEffect

    // ✅ useFrame: Sudah diimpor dan digunakan
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * rotationSpeed;
        }
    });

    return (
        <mesh ref={meshRef} scale={scaleFactor} castShadow>
            <textGeometry args={[text, textOptions]} />
            <meshPhongMaterial color={color} specular="#ffffff" shininess={100} />
        </mesh>
    );
}