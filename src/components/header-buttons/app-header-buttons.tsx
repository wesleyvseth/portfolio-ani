import { motion } from "framer-motion";
import { delayedBackgroundAtom, instantBackgroundAtom } from "../../store";
import { useAtom } from "jotai";
import { useRef } from "react";

const AppHeaderButtons: React.FC = () => {
  const [instantBackground, setInstantBackground] = useAtom(instantBackgroundAtom);
  const timeoutRef = useRef<number | null>(null);
  const [delayedBackground, setdDelayedBackground] = useAtom(delayedBackgroundAtom);

  const handleClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set the transition state immediately
    setInstantBackground(delayedBackground === "formal" ? "informal" : "formal");

    // Set a new timeout to change the background after the transition to ensure background color is not removed before the transition is complete
    timeoutRef.current = window.setTimeout(() => {
      setdDelayedBackground(delayedBackground === "formal" ? "informal" : "formal");
    }, 1000);
  };

  return (
    <div className={`flex flex-1 w-[550px] z-10  border-b-[3px] border-white font-medium`}>
      <button
        onClick={handleClick}
        className="bg-[#f87e58] text-white p-4 grow flex justify-center items-center border-r-[1.5px] border-white flex flex-col"
      >
        Projects
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={instantBackground === "informal" ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.2, type: "spring" }}
          className="bg-white w-[32px] h-[5px] rounded"
        ></motion.div>
      </button>
      <button
        onClick={handleClick}
        className="bg-[#f87e58] text-white p-4 grow flex justify-center items-center border-l-[1.5px] border-white flex flex-col"
      >
        Experience
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={instantBackground === "formal" ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.2, type: "spring" }}
          className="bg-white w-[32px] h-[5px] rounded"
        ></motion.div>
      </button>
    </div>
  );
};
export default AppHeaderButtons;
