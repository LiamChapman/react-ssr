module.exports = {
    plugins: {
        'postcss-browser-reporter': {},
        'postcss-import': {},
        'postcss-easy-media-query': {
            breakpoints: {
                iphone6: '374px',
                mobile: '400px',
                iphone6Plus: '413px',
                tablet: '650px',
                desktop: '768px',
                xlDesktop: '992px',
                xllDesktop: '1200px'
            }
        },
        'postcss-url': {},        
        'postcss-css-variables': {},
        'postcss-for': {},
        'postcss-nested': {},
        'cssnano': {},                
    }
};