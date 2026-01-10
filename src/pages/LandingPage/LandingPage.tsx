// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from '@components/common/Button';

// export const LandingPage = () => {
//   const [showImages, setShowImages] = useState(true);

//   const handleGetStarted = () => {
//     setShowImages(false);
//   };

//   // Animation variants for top images (swipe up)
//   const topImageVariants = {
//     initial: { y: 0, opacity: 1 },
//     exit: { y: '-100vh', opacity: 0 },
//   };

//   // Animation variants for bottom images (swipe down)
//   const bottomImageVariants = {
//     initial: { y: 0, opacity: 1 },
//     exit: { y: '100vh', opacity: 0 },
//   };

//   // Fade in animation for login page
//   const loginVariants = {
//     initial: { opacity: 0, scale: 0.9 },
//     animate: { opacity: 1, scale: 1 },
//   };

//   return (
//     <div className="relative min-h-screen bg-off-white overflow-hidden">
//       <AnimatePresence mode="wait">
//         {showImages ? (
//           <motion.div
//             key="landing"
//             className="relative min-h-screen"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             className="min-h-screen bg-[#F5F5F0] flex items-center justify-center px-6"
//             exit={{ transition: { staggerChildren: 0.1 } }}
//           >
//             {/* Top Row - Images that swipe UP */}
//             <motion.div
//               className="absolute top-0 left-0 right-0 h-1/2 grid grid-cols-3 gap-4 p-8"
//               variants={topImageVariants}
//               exit="exit"
//               transition={{ duration: 0.8, ease: 'easeInOut' }}
//             >
//               {/* Top Left Image */}
//               <motion.div className="rounded-3xl overflow-hidden bg-gray-200">
//                 <img
//                   src="/public/images/man-sitting-in-red-coat.jpg"
//                   alt="Fashion 1"
//                   className="w-full h-full object-cover"
//                   style={{
//                     position: 'absolute',
//                     top: '8%',
//                     left: '5%',
//                     width: '240px',
//                     height: '280px',
//                   }}
//                 />
//               </motion.div>

//               {/* Top Center Image */}
//               <motion.div className="rounded-3xl overflow-hidden bg-gray-200">
//                 <img
//                   src="public/images/hand-holding-brown-purse.jpg"
//                   alt="Fashion 2"
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>

//               {/* Top Right Image */}
//               <motion.div className="rounded-3xl overflow-hidden bg-gray-200">
//                 <img
//                   src="public/images/girl-in-oversize-white-shirt.jpg"
//                   alt="Fashion 3"
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>
//             </motion.div>

//             {/* Center Content - WEAR FORM Text */}
//             <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
//               <motion.div
//                 className="text-center pointer-events-auto"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3, duration: 0.8 }}
//               >
//                 <div
//                   onClick={handleGetStarted}
//                   className="cursor-pointer group inline-block"
//                 >
//                   <div className="relative">
//                     <h1
//                       className="text-[#0A0A0A] text-7xl md:text-9xl lg:text-[12rem] mb-2 leading-none"
//                       style={{
//                         fontFamily: 'Arial Black, sans-serif',
//                         fontWeight: 900,
//                         transform: 'scaleX(1.2)',
//                       }}
//                     >
//                       WEAR
//                     </h1>
//                     <h1
//                       className="text-[#0A0A0A] text-7xl md:text-9xl lg:text-[12rem] mb-6 leading-none"
//                       style={{
//                         fontFamily: 'Arial Black, sans-serif',
//                         fontWeight: 900,
//                         transform: 'scaleX(1.2)',
//                       }}
//                     >
//                       FORM
//                     </h1>
//                     {/* Animated underline */}
//                     <div className="absolute bottom-0 left-0 w-0 h-1 bg-true-black transition-all duration-300 group-hover:w-full"></div>
//                   </div>
//                 </div>
//                 <p
//                   className="text-[#0A0A0A] text-xl md:text-2xl mb-12"
//                   style={{ fontWeight: 600 }}
//                 >
//                   Dress with less stress.
//                 </p>
//               </motion.div>

//               {/* Red Dot Accent (top right) */}
//               {/* <motion.div
//                 className="absolute top-8 right-12 w-16 h-16 bg-red-500 rounded-full"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 0.9, duration: 0.5, type: 'spring' }}
//               /> */}
//             </div>

//             {/* Bottom Row - Images that swipe DOWN */}
//             <motion.div
//               className="absolute bottom-0 left-0 right-0 h-1/2 grid grid-cols-3 gap-4 p-8"
//               variants={bottomImageVariants}
//               exit="exit"
//               transition={{ duration: 0.8, ease: 'easeInOut' }}
//             >
//               {/* Bottom Left Image */}
//               <motion.div className="rounded-3xl overflow-hidden bg-gray-200">
//                 <img
//                   src="public/images/man-in-red-sweater-dark-denim-pants.jpg"
//                   alt="Fashion 4"
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>

//               {/* Bottom Center Image */}
//               <motion.div className="rounded-3xl overflow-hidden bg-gray-200">
//                 <img
//                   src="public/images/guy-in-lavendar-sweater.jpg"
//                   alt="Fashion 5"
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>
//               <motion.div className="rounded-3xl overflow-hidden bg-gray-200">
//                 <img
//                   src="public/images/guy-in-black-puffer-jacket.jpg"
//                   alt="Fashion 6"
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>

//               {/* Bottom Right Image */}
//               <motion.div className="rounded-3xl overflow-hidden bg-gray-200">
//                 <img
//                   src="public/images/guy-in-camo-jacket-black-hood.jpg"
//                   alt="Fashion 7"
//                   className="w-full h-full object-cover"
//                 />
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         ) : (
//           // Login/Get Started Page
//           <motion.div
//             key="login"
//             className="min-h-screen flex items-center justify-center"
//             variants={loginVariants}
//             initial="initial"
//             animate="animate"
//             transition={{ duration: 0.6, ease: 'easeOut' }}
//           >
//             <div className="max-w-md w-full px-8 space-y-8">
//               <div className="text-center">
//                 <h2 className="text-5xl font-light mb-4">Welcome to FORM</h2>
//                 <p className="text-slate-dark text-lg">
//                   Create your style profile
//                 </p>
//               </div>

//               {/* Login Form Placeholder */}
//               <div className="space-y-4">
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-true-black"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-true-black"
//                 />
//                 <Button variant="primary" size="lg" fullWidth>
//                   Continue
//                 </Button>
//               </div>

//               <p className="text-center text-sm text-slate-dark">
//                 Don't have an account?{' '}
//                 <button className="text-true-black font-medium hover:underline">
//                   Sign up
//                 </button>
//               </p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@components/common/Button';

export const LandingPage = () => {
  const [showImages, setShowImages] = useState(true);

  const handleGetStarted = () => {
    setShowImages(false);
  };
  const fashionImages = [
    {
      src: '/images/man-sitting-in-red-coat.jpg',
      position: 'top',
      style: { top: '8%', left: '5%', width: '240px', height: '280px' },
      alt: 'Fashion 1',
    },
    {
      src: '/images/hand-holding-brown-purse.jpg',
      position: 'top',
      style: { top: '5%', left: '32%', width: '280px', height: '200px' },
      alt: 'Fashion 2',
    },
    {
      src: '/images/girl-in-oversize-white-shirt.jpg',
      position: 'top',
      style: { top: '8%', right: '5%', width: '240px', height: '300px' },
      alt: 'Fashion 3',
    },
    {
      src: '/images/man-in-red-sweater-dark-denim-pants.jpg',
      position: 'bottom',
      style: { bottom: '8%', left: '8%', width: '200px', height: '320px' },
      alt: 'Fashion 4',
    },
    {
      src: '/images/guy-in-lavendar-sweater.jpg',
      position: 'bottom',
      style: { bottom: '12%', left: '28%', width: '220px', height: '300px' },
      alt: 'Fashion 5',
    },
    {
      src: '/images/guy-in-black-puffer-jacket.jpg',
      position: 'bottom',
      style: { bottom: '5%', left: '50%', width: '180px', height: '280px' },
      alt: 'Fashion 6',
    },
    {
      src: '/images/guy-in-camo-jacket-black-hood.jpg',
      position: 'bottom',
      style: { bottom: '8%', right: '8%', width: '240px', height: '300px' },
      alt: 'Fashion 7',
    },
  ];

  // Animation variants for top images (swipe up)
  const topImageVariants = {
    initial: { y: 0, opacity: 1 },
    exit: { y: '-100vh', opacity: 0 },
  };

  // Animation variants for bottom images (swipe down)
  const bottomImageVariants = {
    initial: { y: 0, opacity: 1 },
    exit: { y: '100vh', opacity: 0 },
  };

  // Fade in animation for login page
  const loginVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  };

  const topImages = fashionImages.filter(img => img.position === 'top');
  const bottomImages = fashionImages.filter(img => img.position === 'bottom');

  return (
    <div className="relative min-h-screen bg-off-white overflow-hidden">
      <AnimatePresence mode="wait">
        {showImages ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen bg-[#F5F5F0] flex items-center justify-center px-6"
            exit={{ transition: { staggerChildren: 0.1 } }}
          >
            {/* Top Images - Swipe UP */}
            <motion.div
              className="absolute inset-0"
              variants={topImageVariants}
              exit="exit"
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              {topImages.map((image, index) => (
                <motion.div
                  key={`top-${index}`}
                  className="absolute rounded-3xl overflow-hidden bg-gray-200"
                  style={image.style}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Center Content - WEAR FORM Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <motion.div
                className="text-center pointer-events-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <div
                  onClick={handleGetStarted}
                  className="cursor-pointer group inline-block"
                >
                  <div className="relative">
                    <h1
                      className="text-[#0A0A0A] text-7xl md:text-9xl lg:text-[12rem] mb-2 leading-none"
                      style={{
                        fontFamily: 'Arial Black, sans-serif',
                        fontWeight: 900,
                        transform: 'scaleX(1.2)',
                      }}
                    >
                      WEAR
                    </h1>
                    <h1
                      className="text-[#0A0A0A] text-7xl md:text-9xl lg:text-[12rem] mb-6 leading-none"
                      style={{
                        fontFamily: 'Arial Black, sans-serif',
                        fontWeight: 900,
                        transform: 'scaleX(1.2)',
                      }}
                    >
                      FORM
                    </h1>
                    {/* Animated underline */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-true-black transition-all duration-300 group-hover:w-full"></div>
                  </div>
                </div>
                <p
                  className="text-[#0A0A0A] text-xl md:text-2xl mb-12"
                  style={{ fontWeight: 600 }}
                >
                  Dress with less stress.
                </p>
              </motion.div>

              {/* Optional: Red Dot Accent */}
              {/* <motion.div
                className="absolute top-8 right-12 w-16 h-16 bg-red-500 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5, type: 'spring' }}
              /> */}
            </div>

            {/* Bottom Images - Swipe DOWN */}
            <motion.div
              className="absolute inset-0"
              variants={bottomImageVariants}
              exit="exit"
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              {bottomImages.map((image, index) => (
                <motion.div
                  key={`bottom-${index}`}
                  className="absolute rounded-3xl overflow-hidden bg-gray-200"
                  style={image.style}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
            <div className="absolute inset-0 bg-[#F5F5F0] opacity-40 z-[5]" />
          </motion.div>
        ) : (
          // Login/Get Started Page
          <motion.div
            key="login"
            className="min-h-screen flex items-center justify-center"
            variants={loginVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="max-w-md w-full px-8 space-y-8">
              <div className="text-center">
                <h2 className="text-5xl font-light mb-4">Welcome to FORM</h2>
                <p className="text-slate-dark text-lg">
                  Create your style profile
                </p>
              </div>

              {/* Login Form */}
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-true-black"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-true-black"
                />
                <Button variant="primary" size="lg" fullWidth>
                  Continue
                </Button>
              </div>

              <p className="text-center text-sm text-slate-dark">
                Don't have an account?{' '}
                <button className="text-true-black font-medium hover:underline">
                  Sign up
                </button>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
