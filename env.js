// api키 등 민감한 인증정보는 깃헙과 같은 repository에 올리면 위험하다. 때문에 환경변수에 저장해두고 사용하는 것을 권장한다.
// 여러 환경에 동일한 애플리케이션을 배포하려면 환경변수(environment variable)를 사용한다.
// node.js에서는 process.env를 통해 환경변수 접근