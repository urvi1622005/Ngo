module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Brown:{
          200: '#705C53',

        },
        brown: {
          400: '#592720  ', 
       },
        gray:{
          200:'#dcdcdc',
        },
        black:{
          200: '#2A2A2A',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins as a custom font family
      },
      letterSpacing: {
        superwide: '0.75em', // Custom letter spacing
        superwide2: '0.35em'
      },
    },
  },
  plugins: [],
};
