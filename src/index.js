const fs = require("fs");
const fetch = require("node-fetch");
const FormData = require("form-data");

async function _stream(stream, scanType) {
  return await uploadFile(stream, scanType);
}

async function _file(fileLocation, scanType) {
  if (!fileLocation) throw new Error("nsfw.file() expects a file location");
  return await uploadFile(fs.createReadStream(fileLocation), scanType);
}

class nsfw {
  async stream(stream) {
    return await _stream(stream, "nsfw");
  }
  async file(fileLocation) {
    return await _file(fileLocation, "nsfw");
  }
}

class malware {
  async stream(stream) {
    return await _stream(stream, "malware");
  }
  async file(fileLocation) {
    return await _file(fileLocation, "malware");
  }
}

class link {
  async scan(url) {
    const response = await fetch("https://api.unscan.co/link", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "link": url
      })
    });

    const result = await response.json();

    if (!result.success) {
      const error = new Error(result.message);      
    }

    return result;
  }
}

/**
 * This method uploads the file to the API and returns the result
 * @param {*} content
 * @param {string} endpoint
 * @returns
 */
async function uploadFile(content, endpoint) {
  const form = new FormData();

  form.append("file", content)

  const response = await fetch("https://api.unscan.co/" + endpoint, {
    method: "POST",
    body: form,
  });

  const result = await response.json();

  if (!result.success) {
    console.log(result)
    throw new Error("err " + result.message);
  }

  return result;
}

exports.nsfw = new nsfw();
exports.malware = new malware();
exports.link = new link();
