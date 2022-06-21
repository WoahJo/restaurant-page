const path = require('path'); 

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js', 
        home: './src/home.js',
        menu: './src/menu.js',
        contact: './src/contact.js',
    }, 
    output : {
        filename: '[name].bundle.js', 
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|svg|jpeg|gif)$/i, 
                type: 'asset/resource',
            },
        ],
    }, 
}