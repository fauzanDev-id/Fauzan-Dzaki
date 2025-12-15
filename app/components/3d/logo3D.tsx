// components/3d/Logo3D.tsx
'use client';
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

interface Logo3DProps {
    // Properti untuk mengontrol animasi dari luar
    scaleFactor: number;
    rotationSpeed: number;
}

export function Logo3D({ scaleFactor, rotationSpeed }: Logo3DProps) {
    const meshRef = useRef<THREE.Mesh>(null!);

    // Menggunakan logo Anda sebagai tekstur
    const logoTexture = useTexture('/logoUcenk.png');

    // Animasi berputar pada setiap frame
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * rotationSpeed;
        }
    });

    return (
        <mesh ref={meshRef} scale={scaleFactor} castShadow>
            {/* Menggunakan geometry Dodecahedron (12 sisi) sebagai bentuk logo */}
            <dodecahedronGeometry args={[1, 0]} />

            {/* MeshPhongMaterial memberikan pantulan, cocok untuk efek kilauan */}
            <meshPhongMaterial
                map={logoTexture}
                color="#79a5d0" // Warna dasar objek
                specular="#ffffff" // Warna pantulan (kilauan)
                shininess={100} // Intensitas kilauan
            />
        </mesh>
    );
}