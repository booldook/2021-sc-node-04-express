const path = require("path");

const filePath = (name) => {
  const virtualPath = path.join("/uploads/", name.split("_")[0], name);
  const absolutePath = path.join(__dirname, "../storages", name.split("_")[0], name);
  const thumbPath = path.join("/uploads/", name.split("_")[0], "thumb", name);
  console.log(absolutePath);
  console.log(virtualPath);
  console.log(thumbPath);
  return { absolutePath, virtualPath, thumbPath };
};

module.exports = { filePath };
