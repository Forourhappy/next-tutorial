import React from 'react';
import {InferGetStaticPropsType} from 'next';
import * as fs from 'fs/promises';
import path from 'path';

// JSON의 타입을 설정
// JSON의 파일을 import해서 불러오는 방법도 있지만, 이를 위해서는 'resolveJsonModule' 옵션을 true로 바꿔야 함.
// TypeScript에서는 JSON의 데이터를 전부 불러오면 많은 메모리가 소모되므로 기본적으로는 false임.
type FetchData = {
  products: { id: string, title: string }[]
}

const HomePage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {products} = props;
  return (
    <ul>
      {products.map(
        product => <li key={product.id}>{product.title}</li>
      )}
    </ul>
  );
};

export default HomePage;

// getStaticProps는 페이지에만 추가할 수 있으며 export해야 한다.
// 그리고 페이지마다 한 개씩만 생성 가능
// 이 함수가 존재하면 이 페이지가 사전에 생성되어야 하는 페이지임을 Next에 알려준다.

// Next는 기본적으로 모든 페이지를 사전 렌더링하지만, 처음에만 적용.
// 이후에는 React처럼 CSR로 작동한다.
// getStaticProps는 이 페이지가 계속 사전 렌더링 될 수 있도록 유지시켜준다.
export const getStaticProps = async () => {
  console.log('리렌더링 중...');
  const filePath = path.join(process.cwd(), 'data-practice', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath, {encoding: 'utf8'});
  const data: FetchData = JSON.parse(jsonData);
  return {
    props: {
      products: data.products
    },
    // 마지막으로 생성되고 revalidate 값만큼 지나면, 이 페이지로 들어오는 모든 요청에 대해 재생성.
    // 단위는 초
    revalidate: 10
  };
};
