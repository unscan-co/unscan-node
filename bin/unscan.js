#!/usr/bin/env node

const { nsfw, malware, link } = require("../src/index");
const { program } = require("commander");

async function scan(scanner, arg) {
  try {
    const result = await scanner(arg);

    const { message, ...details } = result;

    console.log(message);
    console.log(JSON.stringify(details, null, '  '))
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

program.addHelpText(
  "before",
  "Scan for files and links for unwanted content"
);

program.version(process.env.npm_package_version);

program
  .command("nsfw <path>")
  .description("scan for nsfw content in a file")
  .action(async (path) => await scan(nsfw.file, path));

program
  .command("malware <path>")
  .description("scan for malware content in a file")
  .action(async (path) => await scan(malware.file, path));

program
  .command("link <url>")
  .description("scan for unwanted links")
  .action(async (url) => await scan(link.scan, url));

program.addHelpText(
  "after",
  [
    "",
    "Website: https://unscan.co",
    "GitHub:  https://github.com/unscan-co",
  ].join("\n")
);

program.parse(process.argv);
