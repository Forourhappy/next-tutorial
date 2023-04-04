## API Routes

대부분의 페이지는 사용자의 요청이 있을 때 HTML만을 제공하지 않음.
사용자의 요청은 웹페이지에서 제공되는 서비스를 통해 데이터로 변환되어 DB에 저장됨.
API Routes는 특수한 형태의 URL로 일반적으로 HTML을 전달하지 않고,
데이터를 DB에 저장하고 원하는 형태의 데이터로 내려주는 방식.

#### 방법

pages 폴더 아래 api 폴더를 만들면, next는 그 하위 모든 파일을 특수한 방식으로 처리.
이곳의 파일들은 react 컴포넌트를 생성하고 내보내지 않음.
대신 req와 res를 받는 함수를 내보냄.

```js
const handler = (req, res) => {
  // 성공(200)하면 JSON형식의 파일을 반환.
  res.status(200).json({message: 'This works!'});

}

export default handler;
```