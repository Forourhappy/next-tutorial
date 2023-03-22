import React from 'react';
import {GetStaticPathsResult, GetStaticPropsContext, InferGetStaticPropsType} from 'next';
import path from 'path';
import fs from 'fs/promises';

type FetchData = {
  products: {
    id: string,
    title: string,
    description: string
  }[]
}

const ProductDetailPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {

  const {loadedProduct} = props;

  return (
    <>
      <h1>{loadedProduct && loadedProduct.title}</h1>
      <p>{loadedProduct && loadedProduct.description}</p>
    </>
  );
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const {params} = context;

  const productId = params?.pid;

  const filePath = path.join(process.cwd(), 'data-practice', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath, {encoding: 'utf8'});
  const data: FetchData = JSON.parse(jsonData);

  const product = data.products.find(product => product.id === productId);

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

  return {
    // paths의 매개변수에 따라 페이지를 생성.
    // 지금의 경우는 3개의 페이지를 생성한다.
    paths: [
      {params: {pid: 'p1'}},
      {params: {pid: 'p2'}},
      {params: {pid: 'p3'}}
    ],
    fallback: false
  };
};
export default ProductDetailPage;
