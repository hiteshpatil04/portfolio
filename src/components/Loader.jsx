import { motion, AnimatePresence } from "framer-motion";
import "./Loader.css";

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            className="loader-mark"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span>HP</span>
          </motion.div>
          <div className="loader-bar">
            <motion.div
              className="loader-fill"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
