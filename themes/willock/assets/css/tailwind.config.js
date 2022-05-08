module.exports = {
  theme: {
	fontFamily: {
		'display': ['Clash Grotesk', 'Helvetica', 'Arial', 'serif'],
		'body': ['Zodiak', 'Helvetica', 'Arial', 'sans-serif']
	},
    extend: {
    	typography: (theme) => ({
    		DEFAULT: {
    			css: {
    				color: theme('colors.white'),
    				h1: {
          				color: theme('colors.white'),
          			},
          			h2: {
          				color: theme('colors.white'),
          			},
          			a: {
          				color: theme('colors.white'),
                  '&:hover': {
                'text-decoration': 'line-through',
              }
          			},
          			'figure figcaption': {
          				color: theme('colors.white'),
          			},
    			}
    		}
    	})
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ]
}