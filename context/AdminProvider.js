import { createContext, useState } from 'react';
import { adminMenuItems } from '@/data';

const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [adminSection, setAdminSection] = useState(adminMenuItems[0]);

  const handleChangeAdminSection = (value) => {
    setAdminSection(value);
  };

  return (
    <AdminContext.Provider value={{ adminSection, handleChangeAdminSection }}>
      {children}
    </AdminContext.Provider>
  );
};

export { AdminProvider };

export default AdminContext;
