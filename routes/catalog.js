const express = require('express');
const url = require('url');
const catalog = require('../modules/catalog');
const router = express.Router();

function findIndex (index, res) {
  let indexInfo = catalog.findIndex(index);
  if (indexInfo) {
    res.json(indexInfo);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
}

/*
* e.g. /catalog or /catalog?index=CRC3
* */
router.get('/', (req, res) => {
  let params = url.parse(req.url, true).query;
  if (Object.keys(params).length === 0) {
    res.json(catalog.readCatalogSync());
  } else {
    findIndex(params.index, res);
  }
});

/*
* e.g. /catalog/CRC3
* */
router.get('/:index', (req, res) => {
  findIndex(req.params.index, res);
});

module.exports = router;
