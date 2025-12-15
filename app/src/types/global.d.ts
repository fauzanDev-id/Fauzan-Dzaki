// global.d.ts

export { };

// Deklarasi Modul untuk aset (tetap sama)
declare module '*.glb';
declare module '*.png';
declare module '*.css';
declare module '*.scss';

// Deklarasi Modul untuk ekstensi pihak ketiga (tetap sama)
declare module 'meshline' {
    export const MeshLineGeometry: any;
    export const MeshLineMaterial: any;
}

// =======================================================
// ✅ PERBAIKAN UTAMA: Deklarasi Tipe untuk R3F (TextGeometry)
// =======================================================
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
// Import tipe-tipe yang diperlukan dari R3F untuk augmentasi
import { Object3DNode, ThreeElements } from '@react-three/fiber'; 

declare module '@react-three/fiber' {
    // Augmentasi ThreeElements agar tag kustom dikenali JSX
    interface ThreeElements {
        // Tag kustom dari meshline (tetap sama, bisa dipertahankan)
        meshLineGeometry: any;
        meshLineMaterial: any;

        // ✅ TAMBAHAN: Deklarasi TextGeometry
        // Ini memberi tahu TypeScript bahwa tag <textGeometry> valid, 
        // dan ia merujuk pada kelas TextGeometry dari Three.js
        textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>
    }
}
// =======================================================

declare global {
    namespace JSX {
        interface IntrinsicElements {
            // Deklarasi IntrinsicElements global (Opsional, tapi sebaiknya disatukan ke dalam augmentasi R3F di atas)
            // Anda bisa menghapus bagian ini jika semua deklarasi dipindahkan ke `declare module '@react-three/fiber'`
        }
    }
}