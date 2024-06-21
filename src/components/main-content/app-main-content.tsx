import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { instantBackgroundAtom, delayedBackgroundAtom } from "../../store";
import AppFormalContent from "../formal-content/app-formal-content";
import AppInformalContent from "../informal-content/app-informal-content";

const AppMainContent = () => {
  const [instantBackground] = useAtom(instantBackgroundAtom);
  const [delayedBackground] = useAtom(delayedBackgroundAtom);

  return (
    <div className={`w-full mt-[250px]`}>
      {instantBackground === "informal" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={instantBackground === "informal" ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2, delay: delayedBackground === "informal" ? 0 : 0.8 }}
        >
          <AppInformalContent />
        </motion.div>
      )}
      {instantBackground === "formal" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={instantBackground === "formal" ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.2, delay: delayedBackground === "formal" ? 0 : 0.8 }}
        >
          <AppFormalContent />
        </motion.div>
      )}
    </div>
  );
};

export default AppMainContent;
