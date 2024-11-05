import { motion } from "framer-motion";

const RetroButton = ({ label, onpress, disabled }) => {
  return (
    <motion.button
      onClick={onpress}
      disabled={disabled}
      whileTap={{
        scale: 0.975,
      }}
      className={`group relative overflow-hidden rounded-none py-2 px-4 bg-stone-300 text-lg uppercase  text-black transition-colors border-black hover:border-black border-2 translate-y-[-2px] shadow-[4px_4px_0px_#000] hover:shadow-[0px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] active:translate-x-[0px] active:translate-y-[0px]`}
    >
      <div className="relative z-10 flex items-center gap-2">
        <span>{label}</span>
      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125  opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};

export default RetroButton;
