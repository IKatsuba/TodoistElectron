module.exports = function (grunt) {
    
    require('load-grunt-tasks')(grunt);

    var config = {};
    var configPath = `${__dirname}/build_scripts`;
    var fs = require('fs');
    var tasks = fs
        .readdirSync(configPath)
        .filter(function (item) {
            return !/^_/.test(item);
        })
        .map(function (item) {
            return item.replace(/\.js$/, '');
        });

    tasks.forEach(function (item) {
        config[item] = require(`${configPath}/${item}.js`);
    });

    grunt.initConfig(config);
    grunt.registerTask('build', ['clean:build', 'sass:dev', 'sass:components_dev', 'typescript:dev', 'typescript:components_dev', 'copy:dev','copy:pug', 'pug:dev']);
    grunt.registerTask('release', ['clean:release', 'sass:dev', 'sass:components_dev', 'typescript:dev', 'typescript:components_dev', 'copy:dev','copy:pug', 'pug:dev', 'copy:lib']);

    // grunt.registerTask('release', ['clean:release', 'sass:release', 'typescript:release', 'copy:release']);
    grunt.registerTask('lib', ['clean:release', 'copy:lib']);
};