const assert = require('assert');
const sinon = require('sinon');
const hello = require('../rest-api/hello');
let mock = sinon.mock(hello);

describe('handle request', function () {
  it('GET', function () {
    mock.expects('handleRequest').once().withArgs('xyv').returns('abx');
    assert.strictEqual(hello.handleRequest('xyv'), 'abx');
    mock.verify();
  });
});
