import Image from 'next/image';
import { adminMenuItems } from '@/data';
import useAdmin from '@/hooks/useAdmin';

const AdminMenu = () => {
  const { handleChangeAdminSection, adminSection } = useAdmin();

  return (
    <>
      <Image
        src="/img/logo-coffee.png"
        height={100}
        width={150}
        className="mx-auto"
        alt="Logo Coffee Shop"
        priority
      />
      <nav className="mt-6">
        {adminMenuItems.map((item) => (
          <div
            key={item.status}
            className={`my-8 ease-out hover:transition-colors duration-300 hover:bg-[#E6DDBC] hover:rounded-bl-3xl hover:rounded-tl-3xl flex gap-2 font-bold ${
              adminSection.status === item.status
                ? 'bg-[#E6DDBC] rounded-bl-3xl rounded-tl-3xl '
                : ''
            }`}
          >
            <button
              onClick={() => handleChangeAdminSection(item)}
              className={`text-2xl font-black font-poiretOne text-gray-100 hover:text-black  py-3 w-full ${
                adminSection.status === item.status ? 'text-red-950' : ''
              }`}
            >
              {item.nombre}
            </button>
          </div>
        ))}
      </nav>
      ;
    </>
  );
};

export default AdminMenu;
