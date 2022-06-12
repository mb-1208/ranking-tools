const basePath = process.cwd();
const fs = require("fs");
const fetch = require("node-fetch");

const getRarity = () => {
  processRarity(1);
  console.log('FINISHED');
};

const everything = async (i) => {
    const response = await fetch(
        "https://api-v2-mainnet.paras.id/token/asac.near::" + i
    );
    var json = await response.json();
    return json;
};


async function processRarity(limit) {
    var resultJson = [];
    for (var i = limit; i < limit + 100; i++) {
        let res = await everything(i);
        console.log(res);
        resultJson.push(res);
    }
    fs.writeFileSync(`${basePath}/build/project_metadata/_metadata_(PROJECT_NAME).json`, JSON.stringify(resultJson, null, 2));
}

getRarity();
