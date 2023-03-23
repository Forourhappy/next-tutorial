import React from 'react';
import {GetServerSidePropsContext, InferGetServerSidePropsType} from 'next';

const UserProfile = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <h1>
      {props.username}
    </h1>
  );
};

export default UserProfile;

// 동적인 데이터를 서버에서 다룰 때 사용
// GetStaticProps와는 다르게 사전 생성되지 않고 SSR된다.
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const {params, req, res} = context;


  return {
    props: {
      username: 'Max'
    }
  };
};