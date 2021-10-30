const unscan = require('../../src/index')

async function pornLinkExample()  {
    const results = await unscan.link.scan('pornhub.com')
    console.log(results)
    
}

pornLinkExample()