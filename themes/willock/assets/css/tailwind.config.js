module.exports = {
  theme: {
	fontFamily: {
		'display': [
			'-apple-system', 'BlinkMacSystemFont', 'avenir next', 'avenir',
			'segoe ui', 'helvetica neue', 'helvetica', 'Cantarell', 'Ubuntu',
			'roboto', 'noto', 'arial', 'sans-serif'
		],
		'body': [
			'Iowan Old Style', 'Apple Garamond', 'Baskerville', 'Times New Roman',
			'Droid Serif', 'Times', 'Source Serif Pro', 'serif', 'Apple Color Emoji',
			'Segoe UI Emoji', 'Segoe UI Symbol'
		]
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
					h3: {
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