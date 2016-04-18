module.exports = {
    components_dev: {
        files: [{
            expand: true,
            cwd: 'source/',
            src: ['windows/components/**/*.scss'],
            dest: 'build/cache',
            ext: '.css'
        }]
    },
    dev: {
        files: [{
            expand: true,
            cwd: 'source/',
            src: ['**/**.scss', '!windows/components/**/*.scss'],
            dest: 'build/dist',
            ext: '.css'
        }]
    },
    release: {
        files: [{
            expand: true,
            cwd: 'source/',
            src: ['**/**.scss'],
            dest: 'build/cache',
            ext: '.css'
        }],
        options: {
            sourcemap: 'none',
            style: 'compressed'
        }
    }
};