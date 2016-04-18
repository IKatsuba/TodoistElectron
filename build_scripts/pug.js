'use strict';

function getPathDep(key) {
    return `./../source/windows/bower_components/${key}`;
}

function getBowerHeadScript() {
    var dep = require('./../source/windows/bower.json').dependencies;
    var arrDep = [];
    var depType = [];
    var scriptBasePath = `bower_components`;

    function addDep(dep) {
        Object.keys(dep).forEach(function (key) {
            var config = require(getPathDep(key) + '/bower.json');

            var main = config.main instanceof Array ? config.main[0] : config.main;
            var scriptPath = `${scriptBasePath}/${key}/${main}`;

            addDep(config.dependencies || {});
            if (arrDep.indexOf(scriptPath) === -1) {
                depType.push(/\.html$/g.test(main) ? 'import' : 'script');
                arrDep.push(scriptPath);
            }
        });
    }

    addDep(dep);

    return arrDep.map(function (item, i) {
        return {
            type: depType[i],
            src: item
        }
    });
}

function getComponents() {
    var components = fs.readdirSync('./source/windows/components');
    return components.map(function (component) {
        return `components/${component}/index.html`;
    })
}

function getModules() {
    return require('./../source/windows/modules/_dependencies.json');
}

var fs = require('fs');

module.exports = {
    dev: {
        options: {
            data(){
                return {
                    headScript: getBowerHeadScript(),
                    components: getComponents(),
                    modules: getModules()
                };
            },

            pretty: true
        },
        files: [{
            expand: true,
            cwd: 'build/cache/',
            src: ['**/*.pug'],
            dest: 'build/dist/',
            ext: '.html'
        }]
    },
    release: {
        options: {
            data(){
                return {
                    headScript: getBowerHeadScript(),
                    components: getComponents(),
                    modules: getModules()
                };
            },

            pretty: false
        },
        files: [{
            expand: true,
            cwd: 'build/cache/',
            src: ['**/*.pug'],
            dest: 'build/dist/',
            ext: '.html'
        }]
    }
};