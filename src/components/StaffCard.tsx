import Image from "next/image";
import { motion } from "motion/react";

interface StaffCardProps {
  name: string;
  role: string;
  image: string;
  delay?: number;
}

export default function StaffCard({ name, role, image, delay = 0 }: StaffCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(30,58,95,0.08)] group"
    >
      <div className="relative w-full h-64 overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
          <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
             <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-colors">
               <i className="fi fi-rr-envelope"></i>
             </button>
             <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-colors">
               <i className="fi fi-rr-phone-call"></i>
             </button>
          </div>
        </div>
      </div>
      
      <div className="p-8 text-center relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
           <div className="w-8 h-8 rounded-full bg-accent/20 text-primary flex items-center justify-center">
             <i className="fi fi-rr-user text-sm"></i>
           </div>
        </div>
        <h3 className="font-bold text-primary text-xl mb-1 group-hover:text-accent transition-colors duration-300">{name}</h3>
        <p className="text-text-muted text-sm font-medium uppercase tracking-wider">{role}</p>
      </div>
    </motion.div>
  );
}
