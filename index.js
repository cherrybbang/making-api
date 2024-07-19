// 3. [기본 서버 코드 작성]
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

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
