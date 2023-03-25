import React, {useEffect, useState} from 'react';

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
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      fetch('https://fullstack-d4c28-default-rtdb.firebaseio.com/sales.json')
        .then(res => res.json())
        .then((data: SalesType) => {
          const salesList: SalesListType[] = Object.entries(data).map(([key, value]) => ({
            id: key,
            username: value.username,
            volume: value.volume
          }));
          setSales(salesList);
          setIsLoading(false);
        });
    })();
  }, []);

  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  return (
    <ul>
      {sales?.map(sale => <li key={sale.id}>{sale.username} - {sale.volume}</li>)}
    </ul>
  );
};

export default LastSalesPage;
