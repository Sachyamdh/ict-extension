import { motion } from "framer-motion";

const LoadingIndicator: React.FC = () => {
  return (
    <>
      <motion.div
        style={{
          width: "16px",
          height: "16px",
          border: "2px solid #D1D5DB", // Equivalent to Tailwind's border-gray-300
          borderTop: "2px solid #3B82F6", // Equivalent to Tailwind's border-t-blue-500
          borderRadius: "50%",
          display: "inline-block",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <motion.span
        style={{
          color: "black",
          fontSize: "12px",
          marginLeft: "8px", // Space between icon and text
        }}
        animate={{ y: ["0%", "-10%", "0%"] }} // Bouncing effect
        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
      >
        Loading...
      </motion.span>
    </>
  );
};

export default LoadingIndicator;
