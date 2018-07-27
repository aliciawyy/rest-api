require('should');
require('./prepare');

const model = require('../modules/model');
const CryptoIndex = model.CryptoIndex;

describe('CryptoIndex', function () {
  it('create', function (done) {
    let index = {
      'indexName': 'CRC2',
      'indexAssets': ['BTC', 'ETH'],
      'Description': 'Crypto risk control with two assets',
      'Allocation': [0.2, 0.8],
    };
    let cryptoIndex = new CryptoIndex(index);
    cryptoIndex.indexName.should.equal('CRC2');
    cryptoIndex.indexAssets[0].should.equal('BTC');
    cryptoIndex.indexAssets[1].should.equal('ETH');
    cryptoIndex.Allocation[0].should.equal(0.2);
    cryptoIndex.Allocation[1].should.equal(0.8);
    done();
  });
});
