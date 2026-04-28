import { motion } from "framer-motion";

function Section({ children, title, para, id }) {
  return (
    <motion.section
      id={id}
      dir="rtl"

      initial={{ opacity: 0, y: 40 }}

      whileInView={{ opacity: 1, y: 0 }}

      viewport={{ once: true, amount: 0.1 }}

      transition={{ 
        duration: 0.7, 
        ease: "easeOut" 
      }}
      className="w-[95%] md:w-[90%] mx-auto font-Playpen bg-primary/20 p-6 md:p-10 my-6 rounded-3xl md:rounded-4xl overflow-hidden"
    >
      {title && (
        <div className="text-center mb-6 text-black">
          <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
        </div>
      )}

      <div className="flex flex-wrap justify-center items-stretch gap-4">
        {children ? (
          children
        ) : (
          <p className="text-lg md:text-xl text-center text-black/80 leading-relaxed max-w-3xl">
            {para}
          </p>
        )}
      </div>
    </motion.section>
  );
}

export default Section;