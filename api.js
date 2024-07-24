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
// : 이 있는 path에는 어떤 값이든 들어올 수 있다.
// :type .에 들어오는 값을 파라미터로 받을 수 있다.
app.get('/api/user/:type', (req, res) => {
    // res.send('connect.');

    let {type} = req.params;

    // type = 'jeju';

    // if(type == 12) {
    //     res.send('hahahahahaha');
    // }
    // console.log(type);
    // res.send('okkkkk');

    if(type == 'seoul') {

        // console.log(111);

        let data = [
            {
                name : "홍길동",
                city : "seoul"
            },
            {
                name : "김철수",
                city : "seoul"
            }
        ];

        res.send(data);
    } else if (type == 'jeju') {
        let data  = [
            {
                name : "임꺽정",
                city : "jeju"
            }
        ];

        res.send(data);
    } else {
        console.log(`'${type}' 없음!`);
        res.status(404).send('Data not found');  
    }
});