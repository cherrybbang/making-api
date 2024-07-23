// express 기반으로 웹 서버 구축하기
// express : node.js 기반으로 웹서버를 구축해주는 모듈
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// port 3001 띄우기
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

// 특정 url path 서버로 호출했을때 시스템에 있는 데이터를 사용자에게 전달해주는 프로그램 내용
app.get('/api/user/:type', async (req, res) => {
    res.send('connect.');
});