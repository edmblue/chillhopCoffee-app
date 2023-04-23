import { useContext } from 'react';
import AdminContext from '@/context/AdminProvider';

const useAdmin = () => {
  return useContext(AdminContext);
};

export default useAdmin;
