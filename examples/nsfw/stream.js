const fs = require('fs');
const unscan = require('../../src/index')
const path = require('path')

const streamToBeUploaded = fs.createReadStream(path.join(__dirname, 'landscape.jpg'));


async function streamExample()  {
    const results = await unscan.nsfw.stream(streamToBeUploaded)
    console.log(results)
    
}

streamExample()