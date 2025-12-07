import Squares from "@/components/background/Squares";

export default function BackgroundSection() {
    return (
        <div className="absolute inset-0 w-full h-full">
            <Squares
                speed={0.2}
                squareSize={40}
                direction="diagonal"
                borderColor="#435663"
                hoverFillColor="#79a5d0"
            />
        </div>
    );
}
