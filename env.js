// api키 등 민감한 인증정보는 깃헙과 같은 repository에 올리면 위험하다. 때문에 환경변수에 저장해두고 사용하는 것을 권장한다.
// 여러 환경에 동일한 애플리케이션을 배포하려면 환경변수(environment variable)를 사용한다.
// 환경변수란, 컴퓨터 시스템에서 프로그램이 실행될때 동작을 제어하거나 설정하기 위해 사용되는 값들의 모임이다.
// 환경변수는 반드시 루트 디렉토리에다가 .env 파일을 생성하여 주고, .env에 환경변수들을 작성한다.
// node.js에서는 process.env를 통해 환경변수 접근

// require('dotenv').config() 선언을 통해 .env 파일의 환경변수를 로드하고 process.env 객체를 통해 해당 변수들에 접근할 수 있게 해준다.


// 이렇게 하면 .env의 환경변수를 가져올 수 있다.
// require('dotenv').config();
// const appKey = process.env.APP_KEY;

// console.log(appKey);


// .env 파일을 로드하여 process.env에 환경변수를 설정합니다.
require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/data', (req, res) => {
    const apiKey = process.env.API_KEY;
    res.json({apiKey});
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});