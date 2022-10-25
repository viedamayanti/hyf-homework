import React, { useContext, useEffect } from 'react';
import { UserContext } from './Context';

function ResultData() {
  const { list, setList, input, error, setError, isLoading, setIsLoading } =
    useContext(UserContext);

  const fetchData = async (result) => {
    setIsLoading(true);
    const res = await fetch(
      `https://api.github.com/search/users?q=${result}`
    ).then((res) => res.json());

    if (res.message) {
      setList([]);
      setIsLoading(false);
      return setError(true);
    }
    setList(res.items);
    setError(false);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(input);
  }, [input]);

  return (
    <div>
      {list.map((item) => (
        <p key={item.id}>{item.login}</p>
      ))}
      {isLoading && <p>Loading...</p>}
      {error && <p>Sorry no item found</p>}
    </div>
  );
}

export default ResultData;
