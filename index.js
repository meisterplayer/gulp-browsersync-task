const browserSync = require('browser-sync');
const merge = require('lodash.merge');

function createConfig(baseDir, open = false, port = 3000, middleware = [], options = {}) {
    const defaultOptions = {
        server: {
            baseDir,
            middleware,
        },
        open,
        port,
    };

    return merge({}, defaultOptions, options);
}

function createServer(config) {
    return function startServer(done) {
        browserSync(config);
    }
}

function reload() {
    browserSync.reload();
}

module.exports = {
    createConfig,
    createServer,
    reload,
};
