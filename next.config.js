const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 환경변수 값
  env: {
    server_id: 'test',
    server_pw: '1234',
    server_db: 'testdb',
  },
};

module.exports = (phase) => {
  // 개발 환경과 다른 환경에 따라 다른 설정 가능
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return nextConfig;
  }
};


// Vercel에 배포할 때는 이 파일이 최상단에 있어야 함.
// 즉, 보안에 취약해진다.
// 보안에 신경쓴다면 Vercel에서 제공하는 환경변수를 이용하는 것이 좋다.