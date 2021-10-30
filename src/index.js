const request = require("request-promise");
const fs = require("fs");

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
    const res = await request.post({
      url: "https://api.unscan.co/link",
      json: {
        "link": url
      }
    });

    if (!res.success) {
      throw new Error(res.message);
    }

    return res;
  }
}

/**
 * This method uploads the file to the API and returns the result
 * @param {*} content
 * @param {string} endpoint
 * @returns
 */
async function uploadFile(content, endpoint) {
  const res = await request.post({
    url: "https://api.unscan.co/" + endpoint,
    formData: {
      file: content,
    },
  });

  const json = JSON.parse(res);

  if (!json.success) {
    throw new Error(json.message);
  }

  return json;
}

exports.nsfw = new nsfw();
exports.malware = new malware();
exports.link = new link();
