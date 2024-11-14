import { motion } from 'framer-motion';
import heroImg from '/assets/pic1.png';

const Hero = () => {
  return (
    <div className="lg:min-h-screen sm:h-[100vh]">
      <main className="relative mx-auto">
        {/* Outer div with staggered animation for child elements */}
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
            hidden: { opacity: 0 },
            exit: { opacity: 0, transition: { duration: 0.5 } },
          }}
          className="relative overflow-hidden h-[100vh]"
        >
          {/* Background Image */}
          <motion.img
            src={heroImg}
            alt="Children smiling"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="w-full h-[100vh] object-cover"
          />

          {/* Text Container */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-4">
            {/* Smaller Text - Claim the chance to */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 0.8, y: 0, transition: { duration: 1, ease: "easeOut" } },
              }}
              className="font-poppins tracking-superwide text-sm mb-2 lg:text-2xl sm:text-lg lg:mb-2"
            >
              Claim the chance to
            </motion.p>

            {/* Main Heading - MAKE A DIFFERENCE */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 0.9, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },
              }}
              className="font-poppins lg:text-6xl text-6xl w-[100vw] font-bold leading-tight"
            >
              MAKE A DIFFERENCE
            </motion.h1>

            {/* Smaller Text - experience working with us */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 0.6, y: 0, transition: { duration: 1, ease: "easeOut" } },
              }}
              className="font-poppins tracking-superwide2 text-sm lg:text-2xl sm:text-md lg:mb-2"
            >
              experience working with us
            </motion.p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Hero;
