import { motion } from "framer-motion";

function Card({ children, para, onClick, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1, 
        type: "spring", 
        stiffness: 100 
      }}
      
      whileHover={{ 
        scale: 1.05, 
        translateY: -5,
        boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" 
      }}
      whileTap={{ scale: 0.95 }}
      
      onClick={onClick}
      className="flex flex-col justify-center items-center 
                 w-full sm:w-[45%] lg:w-[22%] 
                 text-center bg-gradient-to-r from-primary/60 to-primary/30 
                 p-6 rounded-2xl shadow-sm cursor-pointer" 
    >
      <div className="text-black/80">{children}</div>
      <p className="mt-4 font-medium text-black/90">{para}</p>
    </motion.div>
  );
}

export default Card;