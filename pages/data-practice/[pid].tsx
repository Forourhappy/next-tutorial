import React from 'react';
import {GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, InferGetStaticPropsType} from 'next';
import path from 'path';
import fs from 'fs/promises';

type Product = {
  id: string,
  title: string,
  description: string
}

type FetchData = {
  products: Product[];
}

type StaticResultProp = {
  loadedProduct: Product;
}

const getData = async () => {
  const filePath = path.join(process.cwd(), 'data-practice', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath, {encoding: 'utf8'});
  const data: FetchData = JSON.parse(jsonData);

  return data;
};

const ProductDetailPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {

  const {loadedProduct} = props;

  // fallback 상태 리턴
  if (!loadedProduct) {
    return <p>로딩중...</p>;
  }

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
};

export const getStaticProps = async (context: GetStaticPropsContext): Promise<GetStaticPropsResult<StaticResultProp>> => {
  const {params} = context;

  const productId = params?.pid;

  const data = await getData();

  const product = data.products.find(product => product.id === productId);

  if (!product) {
    return {notFound: true};
  }

  return {
    props: {
      loadedProduct: product
    }
  };
};

// url param에 따라서 어떤 페이지를 동적으로 렌더링할지 정해줄 수 있는 함수
// getStaticPaths를 사용한 뒤, 브라우저의 네트워크 탭에서 확인해보면
// 매개변수에 대한 json 파일을 미리 사전페칭하는 것을 확인할 수 있다.
export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const data = await getData();

  const ids = data.products.map(product => product.id);

  const pathsWithParams = ids.map(id => ({params: {pid: id}}));

  return {
    // paths의 매개변수에 따라 페이지를 생성.
    // 지금의 경우는 3개의 페이지를 생성한다.
    paths: pathsWithParams,
    // {params: {pid: 'p2'}},
    // {params: {pid: 'p3'}}

    // 일부 페이지만 사전 렌더링할 때 사용
    // fallback을 true로 해놓으면 paths에 포함되지 않는 페이지도 요청 가능(404페이지를 띄우지 않음)
    // 단, 이 경우에는 페이지 요청이 서버에 도달되는 시점에 생성.
    // 또한 링크를 클릭하지 않고 URL에 직접 주소를 입력했을 경우 에러.(동적 사전 생성이 즉시 끝나는 것이 아니기 때문.)
    // => 컴포넌트에서 fallback 상태를 반환할 수 있도록 해줘야 함.
    //    fallback에 'blocking' 값을 설정할 경우 자동으로 페이지 생성을 기다림
    fallback: false
  };
};
export default ProductDetailPage;
