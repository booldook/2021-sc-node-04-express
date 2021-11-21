const multer = require("multer");
const path = require("path");
const fs = require("fs-extra");
const moment = require("moment");
const { v4: uuidv4 } = require("uuid"); // ES6 -> import { v4 as uuidv4 } from 'uuid';

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    try {
      const folder = path.join(__dirname, "../storages", moment().format("YYYYMMDDHH"));
      await fs.ensureDir(folder);
      cb(null, folder);
    } catch (err) {
      cb(err);
    }
  },
  filename: (req, file, cb) => {
    try {
      const folder = moment().format("YYYYMMDDHH");
      const ext = path.extname(file.originalname).toLowerCase(); // jpg(x) .jpg(o)
      const filename = folder + "_" + uuidv4() + ext;
      cb(null, filename);
    } catch (err) {
      cb(err);
    }
  },
});

module.exports = multer({ storage });
