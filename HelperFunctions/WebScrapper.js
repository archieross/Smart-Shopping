const { JSDOM } = require("jsdom");
const xpath = require("xpath");
const { DOMParser } = require("xmldom");

async function fetchData(url, xpathExpression) {
  const response = await fetch(url);
  const html = await response.text();

  const dom = new JSDOM(html);
  const doc = dom.window.document;

  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(html, "text/xml");

  const nodes = xpath.select(xpathExpression, xmlDoc);

  nodes.forEach((node) => {
    console.log(node.textContent);
  });
}

let url = "https://www.tesco.com/groceries/en-GB/search?query=carrot";
let xPath =
  '//*[@id="tile-254638565"]/div[2]/div[3]/div/div/form/div/div/div[1]/p[1]';

//First index of each inner array is the main website url - will add the ingredient to it
//Second index is the XPath used for
let supermarkets = [
  [
    //TESCO
    "https://www.tesco.com/groceries/en-GB/search?query=",
    '//*[@id="tile-254638565"]/div[2]/div[3]/div/div/form/div/div/div[1]/p[2]',
  ],
  [
    //ALDI
    "https://groceries.aldi.co.uk/en-GB/Search?keywords=",
    '//*[@id="vueSearchResults|PDP|pg1|pos1"]/div[4]/div[2]/div/div/p/small/span',
  ],
  [
    //Morrisons
    "https://groceries.morrisons.com/search?entry=",
    '//*[@id="main-content"]/div[2]/div[3]/ul/li[1]/div[2]/div[1]/a/div[2]/span[2]',
  ],
  [
    //Sainsbury's
    "https://www.sainsburys.co.uk/gol-ui/SearchResults/",
    '//*[@id="main"]/div[2]/div[2]/ul/li[1]/article/div[2]/div[2]/div[1]/div[2]/div[2]/div[2]/span[2]',
  ],
  [
    // ASDA
    "https://groceries.asda.com/search/",
    "",
  ],
  [
    // WAITROSE
    "https://www.waitrose.com/ecom/shop/search?&searchTerm=carrot",
    "",
  ],
];

fetchData(url, xPath);

// M&S - LIDL -
