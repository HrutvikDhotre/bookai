/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : 'class',
  theme: {
    extend: {
      boxShadow: {
        'custom': 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
        'customNav' : 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
      },
      colors: {
        'primary': '#6366f1',   
        'lightPrimary' : '#4245f0', 

        'secondary': '#a5b4fc', 
        'lightSecondary' : '#748bfd', 
            
        'backgroundColor': '#0f172a',    
        'text': '#e2e8f0',          
        'hoverColor' : '#22d3ee',
        'buttonColor': '#22d3ee',        
        'code-background': '#1e293b', 
        // 'section-background': '#1e293b', 
        // border: '#334155',         
      },
    },
  },
  plugins: [],
}