'use strict';

module.exports = {
    components_dev: {
        src: ['source/app.ts', 'source/windows/**/*.ts', 'source/windows/components/**/*.ts'],
        dest: 'build/cache/',
        options: {
            sourceMap: true,
            target: 'es6',
            experimentalDecorators: true
        }
    },
    dev: {
        src: ['source/app.ts', 'source/windows/**/*.ts', '!source/windows/components/**/*.ts'],
        dest: 'build/dist/',
        options: {
            sourceMap: true,
            target: 'es6',
            experimentalDecorators: true
        }
    },
    release: {
        src: ['source/app.ts', 'source/windows/**/*.ts'],
        dest: 'build/dist/',
        options: {
            sourceMap: false,
            target: 'es6',
            removeComments: true,
            experimentalDecorators: true
        }
    }
};