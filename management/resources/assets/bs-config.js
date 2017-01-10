module.exports = function(bs) {

    return {
        injectChanges:true,
        server: {
            baseDir: './',
            middleware: {
                // overrides the second middleware default with new settings
                1: require('connect-history-api-fallback')({
                    index: '/index.html',
                    verbose: true
                })
            }
        }
    };

};