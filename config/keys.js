const express = require("express");
const app = express();

if (process.env.NODE_ENV === "production") {
  module.exports = require("./keys_prod");
} else {
  module.exports = require("./keys_dev");
}

