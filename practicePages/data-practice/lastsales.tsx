import React, {useEffect, useState} from 'react';
import useSWR from 'swr';

interface SalesType {
  ['sale']: {
    username: string;
    volume: number;
  };
}

interface SalesListType {
  id: string;
  username: string;
  volume: string;
}

const LastSalesPage = () => {
  const [sales, setSales] = useState<SalesListType[]>();
  // const [isLoading, setIsLoading] = useState(false);

  const {data, error}: { data: SalesType | undefined, error: Error | undefined } = useSWR(
    'https://next-tutorial-fab2a-default-rtdb.firebaseio.com/sales.json',
    url => fetch(url).then(res => res.json())
  );

  useEffect(() => {
    if (data) {
      const salesList: SalesListType[] = Object.entries(data).map(([key, value]) => ({
        id: key,
        username: value.username,
        volume: value.volume
      }));
      setSales(salesList);
    }
  }, [data]);


  // useEffect(() => {
  //   setIsLoading(true);
  //   (async () => {
  //     fetch('https://next-tutorial-fab2a-default-rtdb.firebaseio.com//sales.json')
  //       .then(res => res.json())
  //       .then((data: SalesType) => {
  //         const salesList: SalesListType[] = Object.entries(data).map(([key, value]) => ({
  //           id: key,
  //           username: value.username,
  //           volume: value.volume
  //         }));
  //         setSales(salesList);
  //         setIsLoading(false);
  //       });
  //   })();
  // }, []);

  if (!data) {
    return <p>로딩 중...</p>;
  }

  if (error) {
    return <p>로딩에 실패했습니다.</p>;
  }

  if (!data && !sales) {
    return <p>로딩 중...</p>;
  }

  return (
    <ul>
      {sales?.map(sale => <li key={sale.id}>{sale.username} - {sale.volume}</li>)}
    </ul>
  );
};

export const getStaticProps = async () => {
  return fetch('https://next-tutorial-fab2a-default-rtdb.firebaseio.com//sales.json')
    .then(res => res.json())
    .then((data: SalesType) => {
      const salesList: SalesListType[] = Object.entries(data).map(([key, value]) => ({
        id: key,
        username: value.username,
        volume: value.volume
      }));

      return {
        props: {
          sales: salesList
        },
        revalidate: 10
      };
    });
};

export default LastSalesPage;
