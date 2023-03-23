import React from 'react';
import {useRouter} from 'next/router';
import {GetServerSidePropsContext} from 'next';

const UserIdPage = () => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <h1></h1>
  );
};

export default UserIdPage;

// getStaticPaths 없이도 동작하는 이유는 이 코드가 서버에서만 작동하기 때문.
// 사전 생성할 필요가 없기 때문에 getStaticPaths를 이용해 사전에 정보를 전달해줄 필요가 없다.
export const getServerSideProps = (context: GetServerSidePropsContext) => {
  const {params} = context;

  if (!params) {
    return <p>로딩 중...</p>;
  }

  const userId = params.uid;

  return {
    props: {
      id: 'userid-' + userId
    }

  };
};