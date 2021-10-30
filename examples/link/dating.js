const unscan = require('../../src/index')

async function datingLinkExample()  {
    const results = await unscan.link.scan('tinder.com')
    console.log(results)
    
}

datingLinkExample()