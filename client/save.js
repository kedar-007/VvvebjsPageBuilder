const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");

//app.use(express.json({ limit: "200mb" }));
app.use(express.static("./"));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "200mb",
  })
);

app.post("/save.php", (req, res) => {
  const { file, action, startTemplateUrl, html } = req.body;

  console.log(
    "all data required for the saving file",
    file,
    action,
    startTemplateUrl,
    html
  );

  let result = "File saved!";
  fs.writeFileSync(file, html);

  try {
    fs.writeFileSync(file, html);
  } catch (err) {
    result = "Error saving file!";
    console.error(err);
  }

  res.send(result);
});

app.listen(8080, () => {
  console.log("Started");
});
