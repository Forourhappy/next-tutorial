## Next Build

1. Standard Build

- package.json에 정의되어 있는 'next build' 명령어로 실행 가능
- 정적 페이지를 빌드하거나 서버 사이드 렌더링을 위해 사용
- API Routes나 revalidation, SSR, SSG 등을 위해 Node 서버 필요
- revalidation을 설정해 놓지 않았다면, 코드 변경이 있을 때마다 다시 빌드 필요

2. Full Static Build

- 'next export'로 실행 가능
- Node 서버 불필요(오직 HTML, CSS, JS로 구성)
- 100% 정적인 앱을 생성하기 때문에 API Routes나 서버 사이드 페이지에서는 적용 불가
- 코드 변경 뿐만 아니라 콘텐츠가 바뀔 대마다 다시 빌드 필요(revalidation 사용 불가)

#### 배포 전 고려 사항

1. 코드 정리

- 모든 페이지, 제목, 디스크립션에 메타 데이터를 추가했는지 확인
- 불필요한 디버그 코드 삭제(console.log)
- 불필요한 의존성 삭제

2. 구성 확인

- 개발과 프로덕션의 환경 확인
- 환경변수를 사용한다면 쉽게 컨트롤 가능

3. 빌드 테스트

- 오류는 없는지 확인
- 파일 크기나 번들 크기 확인