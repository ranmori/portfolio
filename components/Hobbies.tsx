// src/components/Hobbies.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Book as BookIcon, Brush } from 'lucide-react';
import { HOBBIES } from '../constants';

/*  1. local art  */
import art1 from '../assets/images/whale.webp';
import art2 from '../assets/images/penguin.webp';
import art3 from '../assets/images/fishes.webp';
import art4 from '../assets/images/digital.webp';
const artImages = [art1, art2, art3, art4];

/*  2. local book covers  */
/*  local book covers  */
const covers = import.meta.glob('../assets/images/*.@(jpg|jpeg|png|webp|avif)', {
  eager: true,
  query: '?url',
  import: 'default'
});
const getCover = (file?: string) =>
  file ? covers[`../assets/images/${file}`] : 'https://picsum.photos/260/400';

const Hobbies: React.FC = () => {
  const MotionDiv = motion.div as any;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="h-full overflow-y-auto pr-2 pb-10 custom-scrollbar">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Creative Pursuits</h2>
        <p className="opacity-60">Fueling the mind and soul beyond the code.</p>
      </div>

      <MotionDiv variants={containerVariants} initial="hidden" animate="visible">
        {/* -----------  ART GALLERY  ----------- */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6 opacity-80">
            <Palette size={20} className="text-primary" />
            <h3 className="text-xl font-bold">Art Gallery</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HOBBIES.paintings.map((art, i) => (
              <MotionDiv
                key={art.id}
                variants={itemVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="group relative rounded-2xl overflow-hidden shadow-lg h-64 border border-white/10 cursor-pointer bg-base-200"
              >
                <MotionDiv
                  variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="w-full h-full"
                >
                  <img
                    src={artImages[i]}
                    alt={art.title}
                    width={600}
                    height={400}
                    sizes="(max-width: 640px) 400px, 800px"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:blur-[2px] group-hover:opacity-70"
                  />
                </MotionDiv>

                {/* Overlay Info */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-xl font-bold text-base-content mb-1 drop-shadow-md bg-base-100/50 backdrop-blur-sm px-4 py-1 rounded-full">
                    {art.title}
                  </h4>
                  <span className="text-xs font-mono text-primary bg-base-100/80 backdrop-blur px-2 py-1 rounded border border-primary/20 mt-2">
                    {art.style}
                  </span>
                </div>

                {/* Floating Brush Icon */}
                <MotionDiv
                  className="absolute top-1/2 left-1/2 text-primary pointer-events-none z-20 drop-shadow-2xl origin-bottom-left"
                  variants={{
                    rest: { opacity: 0, x: -50, y: -50, rotate: -45, scale: 0.8 },
                    hover: {
                      opacity: 1,
                      scale: 1,
                      x: [-20, 20, -20, 0],
                      y: [-10, 10, -5, 0],
                      rotate: [-45, -25, -55, -45],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        opacity: { duration: 0.2 },
                      },
                    },
                  }}
                >
                  <Brush size={64} className="fill-primary/20 stroke-[3px]" />
                </MotionDiv>
              </MotionDiv>
            ))}
          </div>
        </div>

        {/* -----------  READING LIST  ----------- */}
        <div>
          <div className="flex items-center gap-2 mb-6 opacity-80">
            <BookIcon size={20} className="text-secondary" />
            <h3 className="text-xl font-bold">Reading List</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HOBBIES.books.map((book) => (
              <MotionDiv
                key={book.id}
                variants={itemVariants}
                className="card flex-row bg-base-100/50 hover:bg-base-100 border border-white/10 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden group h-32"
              >
                <div className="w-24 h-full bg-base-300 flex-shrink-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-transparent transition-colors" />
                  <img
                    src={getCover(book.coverFile)}
                    alt={book.title}
                    width={260}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="card-body p-4 justify-center flex-1 min-w-0">
                  <h4 className="font-bold text-sm line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                    {book.title}
                  </h4>
                  <p className="text-xs opacity-60 font-mono mt-1">{book.author}</p>
                  <div className="mt-auto pt-2 flex">
                    <span className="badge badge-xs badge-ghost opacity-70 border-base-content/10">
                      {book.category}
                    </span>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </MotionDiv>
    </div>
  );
};

export default Hobbies;