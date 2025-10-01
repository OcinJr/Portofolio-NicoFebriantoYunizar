"use client"
import Image from "next/image";
import TrueFocus from "./component/textAnimation/TrueFocus/TrueFocus";
import BlurText from "./component/textAnimation/BlurText/BlurText";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[black]">
      <div className="container border mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-6 h-screen">
              <TrueFocus 
                sentence="Open and Ready for Job"
                manualMode={false}
                blurAmount={1}
                borderColor="#9929EA"
                glowColor="#CC66DA"
                animationDuration={1}
                pauseBetweenAnimations={0.5}
                textSize={15}
                // textFamily='"Press Start 2P", system-ui'
              />
              <BlurText
                text="Nico Febrianto Yunizar"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-2xl mb-8"
                fontSize={20}
                fontFamily='"Press Start 2P", system-ui'
                textAlign="center"
              />
          </div>
          <div className="col-span-6 h-screen"></div>
        </div>        
      </div>
    </div>
  );
}
