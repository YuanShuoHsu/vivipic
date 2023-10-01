let express = require("express");
let app = express();
let port = 5500;

app.use(express.static("public"));

app.post("/upload", (req, res) => {
  let randomValue = Math.random();

  if (randomValue < 0.5) {
    res.status(200).json({ message: "上傳照片：成功" });
  } else {
    res.status(400).json({ message: "上傳照片：失敗" });
  }
});

app.post("/polling", (req, res) => {
  let response = {
    status: Math.floor(Math.random() * 3),
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`服務器正在監聽端口：${port}`);
});
