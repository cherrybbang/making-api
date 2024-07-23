// 3. [기본 서버 코드 작성]
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());  // JSON 현식의 데이터 파싱
app.use(bodyParser.urlencoded({extended : true}));  // URL-encoded 형식의 데이터 파싱

app.get('/', (req, res) => {
    res.send('Welcome to the RESTful API server!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// 4. [RESTful API 라우트 생성]
app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name : 'Alice' },
        { id: 2, name : 'Bob' },
        { id: 3, name : 'Charlie' }
    ];

    if(!users) {
        return res.status(400).json({error : 'No JSON data provided.'});
    }

    res.json(users);
})

// 5. [서버 실행]
// node index.js



// 1. [RESTful API Server 프로젝트 초기 설정]
// Node.js 설치여부 확인   >   node -v
// 새로운 프로젝트 폴더 생성   >   mkdir 폴더이름
// 생성한 폴더로 이동   >   cd 폴더이름


// 2. [패키지 관리 및 필요 라이브러리 설치]
// package.json 파일 초기화   >   npm init -y
// Express와 함께 필요한 패키지 설치   >   npm install express body-parser


// 미들웨어란?
// 클라이언트에 요청이 오고 그 요청을 보내기 위해 응답을 하려면 중간에서 목적에 맞게 처리를 해야한다. 미들웨어는 목적에 맞는 처리를 하기 위해 거쳐가는 함수라고 생각하면 된다.
// 미들웨어 함수는 req(요청)객체, res(응답)객체, 어플리케이션 요청-응답 사이킅 도중 그 다음의 미들웨어 함수에 대한 액세스 권한을 갖는 함수이다.
// 한마디로, 요청을 처리하기 전에 중간에서 도와주는 역할

// body-parser란?
// Express 애플리케이션의 요청본문을 해석하고 파싱하는 미들웨어. 
// 클라이언트로부터 전송된 JSON, URL-encoded 및 기타 형식의 데이터를 해석하여 JS 객체로 변환한다. 이를 통해 서버 쪽 코드에서 요청본문에 포함된 데이터에 쉽게 접근할 수 있다.
// 여러 미들웨어가 존재한다. ex. cookie-session, session, cors 등...