// // module.exports = {
// //   mode: 'jit',
// //   purge: [
    
// //     './**/*.{js,ts,jsx,tsx}',  // Include pages directory
// //     './components/**/*.{js,ts,jsx,tsx}',  // Include components directory
// //   ],
// //   darkMode: false, 
// //   theme: {
// //     extend: {},
// //   },
// //   variants: {
// //     extend: {},
// //   },
// //   plugins: [],
// // };

// module.exports = {
//   mode: 'jit',  // Optional, JIT mode is enabled by default in Tailwind v3
//   content: [  // Use 'content' instead of 'purge'
//     './**/*.{js,ts,jsx,tsx}',  // Include all directories with relevant file extensions
//     './components/**/*.{js,ts,jsx,tsx}',  // Include components directory
//   ],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',  // Optional, JIT mode is enabled by default in Tailwind v3
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',  // Include all files in the pages directory
    './components/**/*.{js,ts,jsx,tsx}',  // Include all files in the components directory
    './app/**/*.{js,ts,jsx,tsx}',  // Include all files in the app directory
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};