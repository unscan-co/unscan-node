const unscan = require('../../src/index')

async function fileLocationExample()  {
    const results = await unscan.nsfw.file(__dirname + '/landscape.jpg')
    console.log(results)
    
}

fileLocationExample()