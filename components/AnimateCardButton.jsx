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
      className="relative w-80 h-96 lg:w-96 rounded-3xl bg-white/80"
    >
      {/* animated background */}
      <div
        style={{
          transform: "translatez(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 flex shrink-0 flex-col items-center justify-center rounded-2xl bg-black bg-[url('/test.gif')] bg-cover bg-center bg-no-repeat shadow-2xl cursor-grab"
      ></div>
    </motion.div>
  );
};

export default AnimateCardButton;
