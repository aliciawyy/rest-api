const fs = require('fs');
const path = require('path');

function readCatalogSync () {
  let file = path.join(__dirname, '../data/catalog.json');
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
