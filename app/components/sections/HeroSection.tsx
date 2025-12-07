import AnimatedContent from "@/components/animation/AnimatedContent";
import RotatingText from "@/components/animation/RotatingText";
import SplitText from "@/components/text/SplitText";
import BlurText from "@/components/animation/BlurText";
import Lanyard from "@/components/3d/Lanyard";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import LogoLoop from "@/components/animation/LogoLoop";
const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

export default function HeroSection() {
    return (
        <div className="container mx-auto h-screen grid grid-cols-12">

            <div className="col-span-8 flex items-center px-4">
                <div className="flex flex-col gap-4 w-full">
                    <div className="absolute bottom-0 left-0 right-0 h-[200x] ">
                        <LogoLoop
                            logos={techLogos}
                            speed={100}
                            direction="left"
                            logoHeight={48}
                            gap={40}
                            hoverSpeed={0}
                            scaleOnHover
                            fadeOut
                            fadeOutColor="#ffffff"
                            ariaLabel="Technology partners"
                        />
                            </div>

                        <AnimatedContent
                            className="flex items-start gap-2"
                            distance={150}
                            direction="horizontal"
                            duration={1.2}
                            ease="bounce.out"
                            initialOpacity={0.2}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                            delay={0.3}
                        >
                            <h1 className="text-2xl text-white font-bold">I'm Ready For Job</h1>

                            <RotatingText
                                texts={["Web Design", "Web Development", "Web Programming", "Cybersecurity"]}
                                mainClassName="px-3 bg-[#79a5d0] text-black rounded-lg text-2xl font-bold inline-flex"
                                staggerFrom="last"
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-1"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={2000}
                            />
                        </AnimatedContent>

                        <AnimatedContent
                            className="flex flex-col gap-1 items-start"
                            distance={120}
                            direction="horizontal"
                            duration={1.1}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            threshold={0.2}
                            delay={0.4}
                        >
                            <SplitText
                                text="Hello I'am Fauzan Dzaki Ardyan!"
                                className="text-3xl font-bold text-white"
                                delay={50}
                                duration={0.6}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                            />

                            <SplitText
                                text="Front-End Developer & Cyber Security Enthusiast"
                                className="text-3xl font-bold text-[#79a5d0]"
                                delay={75}
                                duration={0.6}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                            />
                        </AnimatedContent>

                        <BlurText
                            text="Saya adalah seorang programmer yang berfokus pada pengembangan Front End dan Cyber Security, dengan kemampuan dalam membangun antarmuka web yang responsif, intuitif, dan aman. Saya terbiasa menggunakan teknologi modern seperti HTML, CSS, JavaScript, React, dan Next.js, serta memahami prinsip keamanan aplikasi web seperti perlindungan dari XSS, SQL Injection, dan manajemen autentikasi yang aman. Saya memiliki ketertarikan besar pada pengembangan sistem yang tidak hanya menarik secara visual, tetapi juga kuat dari sisi keamanan."
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="text-xl mb-8 text-white"
                        />
                    </div>
                </div>

                <div className="col-span-4">
                    <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
                </div>

            </div>
            );
}