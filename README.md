# unscan
The official unscan CLI and a library for Node.js

## Use unscan from the command line
Run the following command to install **unscan** globally.
```bash
npm i -g unscan
```

After installing the **unscan** globally, you can scan for files and links using the `unscan` command.

### Scan for NSFW from the command line
```bash
unscan nsfw ../acid-burn.png
```
Example result:
```
The file has been scanned
{
  "success": true,
  "nsfw": false,
  "scores": {
    "safe": 59,
    "nsfw": 0
  },
  "guess": {
    "safe": true,
    "nsfw": false
  },
  "argumentation": {
    "neutral": 59,
    "drawing": 40,
    "hentai": 0,
    "sexy": 0,
    "porn": 0
  }
}
```

### Scan for malware from the command line
```bash
unscan malware ../crash-override.exe
```
Example result:
```
The file is infected
{
  "success": true,
  "infected": true,
  "malware": [
    "Win.Test.EICAR_HDB-1"
  ]
}
```

### Scan links from the command line
```bash
unscan link http://lord-nikon.online
```
Example result:
```
Link found in database
{
  "success": true,
  "safe": false,
  "tags": [
    "PORN",
    "PHISHING"
  ]
}
```

## Use unscan API
For programmatic use, install **unscan** as a project dependency.
```bash
npm i unscan
```

**Note:** Unscan doesn't require an API key.

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