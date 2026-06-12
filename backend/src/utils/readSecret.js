const fs = require("fs");

function readSecret(secretName, envName) {
  const secretPath = `/run/secrets/${secretName}`;

  if (fs.existsSync(secretPath)) {
    return fs.readFileSync(secretPath, "utf8").trim();
  }

  return process.env[envName];
}

module.exports = readSecret;
