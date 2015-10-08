var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'fragmenttest'
    },
    port: 3000,
    db: 'mysql://root:root@localhost/fragmenttest-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'fragmenttest'
    },
    port: 3000,
    db: 'mysql://root:root@localhost/fragmenttest-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'fragmenttest'
    },
    port: 3000,
    db: 'mysql://root:root@localhost/fragmenttest-production'
  }
};

module.exports = config[env];
