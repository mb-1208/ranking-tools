const basePath = process.cwd();
const fs = require("fs");
const fetch = require("node-fetch");

const getRarity = () => {
  processRarity(1); // START FROM TOKEN ID NUMBER
};

const everything = async (i) => {
    const response = await fetch(
        "https://api-v2-mainnet.paras.id/token/thebullishbulls.near::" + i
    );
    var json = await response.json();
    return json;
};


async function processRarity(limit) {
    var resultJson = [];
    for (var i = limit; i < limit + 2; i++) { // END FROM TOKEN ID NUMBER
        let res = await everything(i);
        console.log(res);
        resultJson.push(res);
    }
    fs.writeFileSync(`${basePath}/build/project_metadata/_metadata_(PROJECT_NAME).json`, JSON.stringify(resultJson, null, 2));
    console.log('');
    console.log('FINISHED');
    console.log('');
}

getRarity();
