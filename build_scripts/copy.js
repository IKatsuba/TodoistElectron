module.exports = {
    dev: {
        files: [
            {
                expand: true,
                cwd: 'source/',
                src: [
                    '**/*',
                    '**/.*',
                    '!**/*.pug',
                    '!**/*.scss',
                    '!**/*.ts',
                    '!node_modules/**/*',
                    '!node_modules/**/.*',
                    '!windows/bower_components/**/*',
                    '!windows/bower_components/**/.*'
                ],
                dest: 'build/dist'
            }
        ]
    },
    lib: {
        files: [
            {
                expand: true,
                cwd: 'source/',
                src: [
                    'node_modules/**/*',
                    'node_modules/**/.*',
                    'windows/bower_components/**/*',
                    'windows/bower_components/**/.*'
                ],
                dest: 'build/dist'
            }
        ]
    },
    release: {
        files: [
            {
                expand: true,
                cwd: 'source/',
                src: [
                    '**/*',
                    '**/.*',
                    '!**/*.scss',
                    '!**/*.ts',
                    '!**/*.pug',
                    '!windows/bower_components/**/demo/*',
                    '!windows/bower_components/**/test/*',
                    '!windows/bower_components/**/.bower.json',
                    '!windows/bower_components/**/bower.json',
                    '!windows/bower_components/**/.travis.yml',
                    '!windows/bower_components/**/CONTRIBUTING.md',
                    '!windows/bower_components/**/README.md',
                    '!windows/bower_components/**/.gitignore'
                ],
                dest: 'build/dist'
            }
        ]
    },
    html_release: {
        files: [
            {
                expand: true,
                cwd: 'source/',
                src: ['windows/index.html', 'window/components/**/*.html'],
                dest: 'build/cache/'
            }
        ]
    },
    pug: {
        files: [{
            expand: true,
            cwd: 'source/',
            src: ['**/*.pug'],
            dest: 'build/cache/'
        }]
    }
};