import React from "react";
import { motion } from "framer-motion";

const NavBanner = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="bg-primary text-sm text-center font-semibold p-1 hidden lg:block relative"
      >
        Connecting Learners with the Right Tutors for Success!
        <a href="#" className="text-secondary ml-2">
          Talk to us
        </a>
        <div
          className="absolute top-1/2 right-10 cursor-pointer -translate-y-1/2"
          onClick={() => setIsOpen(false)}
        >
          X
        </div>
      </motion.div>
    )
  );
};

export default NavBanner;
