module.exports = {
    build: [
        'build/cache',
        'build/dist/app.js',
        'build/dist/package.json',
        'build/dist/windows/bower.json',
        'build/dist/windows/global-settings.js',
        'build/dist/windows/index.css',
        'build/dist/windows/index.css.map',
        'build/dist/windows/index.html',
        'build/dist/windows/index.js',
        'build/dist/windows/components',
        'build/dist/windows/img',
        'build/dist/modules'
    ],
    release: ['build/dist', 'build/cache', 'build/release/dist', 'build/release/bin']
};