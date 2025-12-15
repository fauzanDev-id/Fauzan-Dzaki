import Squares from "@/components/background/Squares";

export default function BackgroundSection() {
    return (
        <div className="absolute inset-0 w-full h-full">
            <Squares
                speed={0.2}
                squareSize={40}
                direction="diagonal"
                borderColor="#496F8D"
                hoverFillColor="#2990E3"
            />
        </div>
    );
}
