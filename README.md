# unscan
The official unscan library for Node.js

## Installation
The installation of the library is really easy. Simply run the following command and everything will be installed. Unscan doesn't require an API key.
```
npm i unscan
```

## Documentation
It's a fairly simple library. You just have to import the libray and you can start using it as following:

### Scan for NSFW
The following code shows how the library can be used to scan for nsfw content in a file. Check the `examples` folder for more examples.
```js
const unscan = require('unscan')

// Check a file location
unscan.nsfw.file('./localFile.png')

// Check a stream
unscan.nsfw.stream(streamHere)
```
### Scan for Malware
The following code shows how the library can be used to scan for malware content in a file. Check the `examples` folder for more examples.
```js
const unscan = require('unscan')

// Check a file location
unscan.malware.file('./localFile.exe')

// Check a stream
unscan.malware.stream(streamHere)
```

### Scan links
The following code shows how the library can be used to scan links and give them a tag. This allows you to check if a website is, for example,a dating site or an adult themed site. Check the `examples` folder for more examples.
```js
const unscan = require('unscan')

// Check a link
unscan.link.scan('lngzl.nl')

```
## Notes
The code isn't the cleanest and has to be more organized in the future but it does it's thing.

## License
The library is licensed under the MIT license.