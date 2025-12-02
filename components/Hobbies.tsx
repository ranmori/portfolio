
import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Book, Brush } from 'lucide-react';
import { HOBBIES } from '../constants';

const Hobbies: React.FC = () => {
  // Workaround for framer-motion type inference issues
  const MotionDiv = motion.div as any;

  return (
    <div className="h-full overflow-y-auto pr-2 pb-10">
       {/* Header */}
       <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Creative Pursuits</h2>
        <p className="opacity-60">Fueling the mind and soul beyond the code.</p>
      </div>

      {/* Paintings Section */}
      <div className="mb-12">
         <div className="flex items-center gap-2 mb-6 opacity-80">
            <Palette size={20} className="text-primary" />
            <h3 className="text-xl font-bold">Art Gallery</h3>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HOBBIES.paintings.map((art, index) => (
               <MotionDiv
                 key={art.id}
                 initial="rest"
                 whileHover="hover"
                 animate="rest"
                 variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.02 }
                 }}
                 transition={{ duration: 0.3 }}
                 className="group relative rounded-2xl overflow-hidden shadow-lg h-64 border border-white/10 cursor-pointer bg-base-200"
               >
                  <img src={art.image} alt={art.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px] group-hover:opacity-60" />
                  
                  {/* Overlay Info */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-xl font-bold text-base-content mb-1 drop-shadow-md">{art.title}</h4>
                      <span className="text-xs font-mono text-primary bg-base-100/80 backdrop-blur px-2 py-1 rounded border border-primary/20">{art.style}</span>
                  </div>

                  {/* Floating Brush Effect */}
                  <MotionDiv
                    className="absolute top-1/2 left-1/2 text-primary pointer-events-none z-20 drop-shadow-2xl"
                    variants={{
                        rest: { opacity: 0, x: -20, y: -20, rotate: -45 },
                        hover: { 
                            opacity: 1, 
                            x: [0, 40, -40, 0], 
                            y: [0, -15, 15, 0],
                            rotate: [-45, -30, -60, -45],
                            transition: { 
                                duration: 2.5, 
                                repeat: Infinity, 
                                ease: "easeInOut",
                                opacity: { duration: 0.2 }
                            }
                        }
                    }}
                  >
                     <Brush size={56} className="fill-primary/20 stroke-[3px]" />
                  </MotionDiv>
               </MotionDiv>
            ))}
         </div>
      </div>

      {/* Books Section */}
       <div>
         <div className="flex items-center gap-2 mb-6 opacity-80">
            <Book size={20} className="text-secondary" />
            <h3 className="text-xl font-bold">Reading List</h3>
         </div>
         
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HOBBIES.books.map((book, index) => (
                <MotionDiv 
                   key={book.id}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2 + (index * 0.1) }}
                   className="card flex-row bg-base-100/50 hover:bg-base-100 border border-white/10 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
                >
                    <div className="w-16 bg-base-300 flex items-center justify-center border-r border-white/10 relative overflow-hidden group">
                       <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                       <Book size={24} className="opacity-40" />
                    </div>
                    <div className="card-body p-4 justify-center">
                        <h4 className="font-bold text-sm line-clamp-1">{book.title}</h4>
                        <p className="text-xs opacity-60 font-mono">{book.author}</p>
                        <div className="mt-2 flex">
                            <span className="badge badge-xs badge-ghost opacity-70">{book.category}</span>
                        </div>
                    </div>
                </MotionDiv>
            ))}
         </div>
      </div>
    </div>
  );
};

export default Hobbies;
