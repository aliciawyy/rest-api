const fs = require('fs');

function readCatalogSync () {
  let file = '../data/catalog.json';
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file);
    return JSON.parse(content);
  }
}

function findIndex (index) {
  let catalog = readCatalogSync();
  return catalog[index];
}

module.exports = { readCatalogSync, findIndex };
