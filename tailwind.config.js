/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         fontFamily: {
            openSauce: 'Open-sanse',
         },
         fontSize: {
            'font-sm': '14px',
         },
         colors: {
            'black-lite': '#727272',
         },
      },
   },
   plugins: [],
};
