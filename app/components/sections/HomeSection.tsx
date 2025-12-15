import AnimatedContent from "@/components/animation/AnimatedContent";
import RotatingText from "@/components/animation/RotatingText";
import SplitText from "@/components/text/SplitText";
import BlurText from "@/components/animation/BlurText";
import Lanyard from "@/components/3d/Lanyard";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import LogoLoop from "@/components/animation/LogoLoop";

const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

export default function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen scroll-mt-32">
            <div className="container mx-auto h-screen grid grid-cols-12">
                {/* LEFT */}
                <div className="col-span-8 flex items-center px-4">
                    <div className="flex flex-col gap-4 w-full">
                        {/* LOGO LOOP */}
                        <div className="absolute bottom-0 left-0 right-0 h-[200x]">
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

                        {/* TITLE */}
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
                            <h1 className="text-2xl text-white font-bold">
                                I'm Ready For Job
                            </h1>

                            <RotatingText
                                texts={[
                                    "Web Design",
                                    "Web Development",
                                    "Frontend Engineer",
                                    "Front-End Developer",
                                ]}
                                mainClassName="px-3 bg-[#2990E3] text-black rounded-lg text-2xl font-bold inline-flex"
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

                        {/* NAME & ROLE */}
                        <AnimatedContent
                            className="flex flex-col gap-1 items-start"
                            distance={120}
                            direction="horizontal"
                            duration={1.1}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            threshold={0.01}
                            delay={0.4}
                        >
                            <SplitText
                                key="split1"
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
                                key="split2"
                                text="Front-End Developer & Web Developer"
                                className="text-3xl font-bold text-[#2990E3]"
                                delay={75}
                                duration={0.6}
                                ease="power3.out"
                                splitType="words" // WAJIB untuk kalimat panjang
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                            />
                        </AnimatedContent>

                        {/* DESCRIPTION */}
                        <BlurText
                            text="I am a Front-End Developer with a strong focus on building responsive, intuitive, and performant web interfaces. I work with modern web technologies such as HTML, CSS, JavaScript, React, and Next.js to create clean and scalable user experiences.

In addition to front-end development, I have a solid understanding of web application security fundamentals, including protection against XSS, SQL injection, and secure authentication practices. I am highly interested in developing applications that are not only visually appealing but also reliable and secure by design."
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="text-xl mb-8 text-white"
                        />
                    </div>
                </div>

                {/* RIGHT */}
                <div className="col-span-4">
                    <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
                </div>
            </div>
        </section>
    );
}
