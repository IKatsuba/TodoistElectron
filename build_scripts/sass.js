var files = [{
    expand: true,
    cwd: 'source/',
    src: ['**/**.scss', '!windows/components/**/*.scss'],
    dest: 'build/dist',
    ext: '.css'
}];

var components_files = [{
    expand: true,
    cwd: 'source/',
    src: ['windows/components/**/*.scss'],
    dest: 'build/cache',
    ext: '.css'
}];

var release_options = {
    sourcemap: 'none',
    style: 'compressed'
};

module.exports = {
    components_dev: {
        files: components_files
    },
    dev: {
        files: files
    },
    components_release: {
        files: components_files,
        options: release_options
    },
    release: {
        files: files,
        options: release_options
    }
};