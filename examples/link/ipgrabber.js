const unscan = require('../../src/index')

async function ipGrabberLinkExample()  {
    const results = await unscan.link.scan('grabify.link')
    console.log(results)
    
}

ipGrabberLinkExample()