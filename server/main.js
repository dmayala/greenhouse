require('babel/register')({ stage: 0 });
// Delete the `BROWSER` env variable if it's present
// https://github.com/iam4x/isomorphic-flux-boilerplate/issues/16
delete process.env.BROWSER;

// Tell `require` calls to look into `/app` also
// it will avoid `../../../../../` require strings
require('app-module-path').addPath(__dirname + '/../app');

// Start the server
require('./server.js');
