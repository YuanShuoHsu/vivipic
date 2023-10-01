let express = require("express");
let app = express();
let port = 80;

app.use(express.static("public"));

app.post("/upload", (req, res) => {
  let randomValue = Math.random();

  if (randomValue < 1 / 2) {
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ success: false });
  }
});

app.post("/polling", (req, res) => {
  let randomValue = Math.random();

  if (randomValue < 1 / 3) {
    res.status(202).json({ status: 0 });
  } else if (randomValue < 2 / 3) {
    res.status(200).json({ status: 1 });
  } else {
    res.status(500).json({ status: -1 });
  }
});

app.listen(port, () => {
  console.log(`服務器正在監聽端口：${port}`);
});
