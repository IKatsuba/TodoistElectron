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
        
        // 'build/cache/app.js',
        // 'build/cache/package.json',
        // 'build/cache/windows/global-settings.js',
        // 'build/cache/windows/index.css',
        // 'build/cache/windows/index.css.map',
        // 'build/cache/windows/index.html',
        // 'build/cache/windows/index.js',
        // 'build/cache/windows/components',
        // 'build/cache/windows/img',
        // 'build/cache/windows/modules'
    ],
    release: ['build/dist', 'build/cache', 'build/release/dist', 'build/release/bin']
};