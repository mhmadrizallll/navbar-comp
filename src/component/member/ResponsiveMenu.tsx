import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
}

const ResponsiveMenu: React.FC<Props> = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="fixed w-full top-41 left-0 h-screen z-10"
        >
          <div className="text-xl font-medium bg-linear-45/oklch from-first via-second to-third text-white py-10 rounded-b-xl">
            <ul className="flex flex-col justify-center items-center gap-6">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
