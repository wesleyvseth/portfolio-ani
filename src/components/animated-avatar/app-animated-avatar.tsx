import { motion } from "framer-motion";
import { useState } from "react";
import pfp from "../../assets/pfp.png";
import portret from "../../assets/portret.png";

interface AppAnimatedAvatarParams {
  setBackground: (background: string) => void;
  background: string;
}

const AppAnimatedAvatar: React.FC<AppAnimatedAvatarParams> = ({ setBackground, background }) => {
  const size = 100;
  const sizeStyle = { width: `${size}px`, height: `${size}px` };

  const handleClick = () => {
    setBackground(background ? "formal" : "informal");
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center justify-center overflow-hidden"
      style={sizeStyle}
    >
      <div
        className="rounded-full overflow-hidden relative border-[3px] border-white bg-slate-200"
        style={sizeStyle}
      >
        <motion.div
          initial={{ x: 0, rotate: 360 }}
          animate={background === "formal" ? { x: 0, rotate: 360 } : { x: 200, rotate: 320 }}
          transition={{ duration: 0.2, type: "spring", stiffness: 80, delay: background === "formal" ? 0 : 0.2 }}
          className="absolute rounded-full overflow-hidden"
        >
          <img
            src={portret}
            alt="Portret pic"
          />
        </motion.div>
        <motion.div
          initial={{ x: -200 }}
          animate={background === "informal" ? { x: 0, rotate: 360 } : { x: -200, rotate: 320 }}
          transition={{ duration: 0.2, type: "spring", stiffness: 80, delay: background === "informal" ? 0 : 0.2 }}
          className="absolute rounded-full flex items-end overflow-hidden bg-[#f87e58]"
          style={sizeStyle}
        >
          <img
            className="w-[90%] h-[90%]"
            src={pfp}
            alt="Profile pic"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AppAnimatedAvatar;
