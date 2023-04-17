import Document, {Head, Html, Main, NextScript} from 'next/document';

// HTML 문서를 커스터마이징
// Next의 구성 요소 확장을 위해서 class 컴포넌트를 사용
class MyDocument extends Document {
  return() {
    return (
      <Html lang="ko">
        <Head/>
        <body id="overlays">
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;