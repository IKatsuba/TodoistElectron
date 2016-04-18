var packager = require('../node_modules/electron-packager');
var opts = {
    dir: __dirname + '/../build/dist',
    name: 'Todoist',
    platform: 'win32',
    arch: 'x64',
    version: '0.37.6',
    asar: true,
    out: __dirname + '/../build/release/dist',
    'version-string': {
        CompanyName: 'Academy',
        FileDescription: 'Todoist',
        ProductName: 'Todoist',
        LegalCopyright: 'Academy',
        OriginalFilename: 'Todoist',
        FileVersion: require('./../source/package.json').version,
        ProductVersion: require('./../source/package.json').version,
        InternalName: 'Todoist'
    }
};
console.log('pack is begin');

packager(opts, function done(err, appPath) {
    if (!err) console.log('pack is done');
    else console.error(err);
});
