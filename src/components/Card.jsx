function Card({ children, para, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col justify-center items-center 
                 w-full sm:w-[45%] lg:w-[22%] 
                 text-center bg-gradient-to-r from-gray-500/60 to-gray-500/30 
                 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all 
                 cursor-pointer active:scale-95" 
    >
      <div className="text-black/80">{children}</div>
      <p className="mt-4 font-medium text-black/90">{para}</p>
    </div>
  );
}

export default Card;