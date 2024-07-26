require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>환경변수 테스트</title>
    </head>
    <body>
      <script>
        // 환경 변수 주입
        window._env = {
          APP_KEY: '${process.env.APP_KEY}'
        };
      </script>
      <script src="/main.js"></script>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
