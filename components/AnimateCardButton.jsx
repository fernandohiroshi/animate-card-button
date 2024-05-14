import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import React from "react";

const AnimateCardButton = () => {
  // Initialize motion values for mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create spring animations for mouse position
  const mouseXSpring = useSpring(mouseX);
  const mouseYSpring = useSpring(mouseY);

  // Set up rotation transforms based on mouse position
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["40deg", "-40deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-40deg", "40deg"]);

  // Handle mouse move event to update mouse position values
  const handleMouseMove = (event) => {
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();

    const mouseXPos = event.clientX - left;
    const mouseYPos = event.clientY - top;

    const xPercentage = mouseXPos / width - 0.5;
    const yPercentage = mouseYPos / height - 0.5;

    // Update motion values for mouse position
    mouseX.set(xPercentage);
    mouseY.set(yPercentage);
  };

  // Reset mouse position values on mouse leave event
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    // Use Framer Motion's motion.div for interactive animations
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
      className="relative h-56 w-56 md:h-72 md:w-72 lg:h-96 lg:w-96 rounded-full bg-white/80"
    >
      {/* Create a link with animated background */}
      <Link
        href="/projects"
        title="Projects"
        style={{
          transform: "translatez(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-8 flex shrink-0 flex-col items-center justify-center rounded-full bg-black bg-[url('/animate.gif')] bg-contain bg-center bg-no-repeat shadow-2xl animate-pulse hover:animate-none duration-700 ease-in-out"
      ></Link>
    </motion.div>
  );
};

export default AnimateCardButton;
