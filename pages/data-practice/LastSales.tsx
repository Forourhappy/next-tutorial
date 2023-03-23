import React, {useEffect, useState} from 'react';
import path from 'path';
import fs from 'fs/promises';

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
  const [sales, setSales] = useState<SalesListType>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const filePath = path.join(process.cwd(), 'data-practice', 'dummy-backend.json');
      const jsonData = await fs.readFile(filePath, {encoding: 'utf8'});
      const data = JSON.parse(jsonData);

      const salesList: SalesListType[] = [];
      for (const key in data) {
        salesList.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume
        });
      }
      setSales(salesList);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  return (
    <ul>

    </ul>
  );
};

export default LastSalesPage;
