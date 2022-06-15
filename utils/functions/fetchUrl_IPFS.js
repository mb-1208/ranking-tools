const basePath = process.cwd();
const fs = require("fs");
// const mediaCol = require(`${basePath}/build/project_metadata/_metadata_asac.json`);

const getUrl = () => {
  const rawdata = fs.readFileSync(`${basePath}/build/project_metadata/_metadata_bulls.json`);
  const nfts = JSON.parse(rawdata);
  processGet(nfts);
  console.log('FINISHED');
};

async function processGet(data) {
    var resultJson = [];
    console.log('total media : ' + data.length);
    for (var i = 0, l = data.length; i < l; i++) {
        let node = await data[i].metadata.media;
        console.log(node);
        resultJson.push(node);
    }
    fs.writeFileSync(`${basePath}/fetchUrl.json`, JSON.stringify(resultJson, null, 2));
}

getUrl();
