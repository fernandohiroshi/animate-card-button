import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import React from "react";

const ProjectButton = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(mouseX);
  const mouseYSpring = useSpring(mouseY);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["40deg", "-40deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-40deg", "40deg"]);

  const handleMouseMove = (event) => {
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();

    const mouseXPos = event.clientX - left;
    const mouseYPos = event.clientY - top;

    const xPercentage = mouseXPos / width - 0.5;
    const yPercentage = mouseYPos / height - 0.5;

    mouseX.set(xPercentage);
    mouseY.set(yPercentage);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
      className="relative h-56 w-56 md:h-72 md:w-72 lg:h-96 lg:w-96 rounded-full bg-white/80"
    >
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

export default ProjectButton;
