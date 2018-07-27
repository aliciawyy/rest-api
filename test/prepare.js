const mongoose = require('mongoose');

beforeEach (function (done) {
  console.log('before each');
  function clearDatabase () {
    for (let i in mongoose.connection.collections) {
      mongoose.connection.collections[i].remove(() => {});
    }
    return done();
  }
  if (mongoose.connection.readyState === 0) {
    return clearDatabase();
  }
  return done();
});

afterEach (function (done) {
  console.log('after each');
  mongoose.disconnect();
  return done();
});
