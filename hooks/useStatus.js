import useSWR from 'swr';
import axios from 'axios';

const useStatus = (estado) => {
  const fetcher = async () => {
    return await axios
      .get(`/api/ordenes/estado/${estado}`)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { data, error, isLoading } = useSWR(
    `/api/ordenes/estado/${estado}`,
    fetcher,
    {
      refreshInterval: 100,
    }
  );

  return {
    ordenes: data,
    isLoading,
    isError: error,
  };
};

export default useStatus;
