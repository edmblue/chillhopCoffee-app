import Head from 'next/head';
import Menu from '@/components/Menu';
import Image from 'next/image';
import { useState } from 'react';
import Modal from 'react-modal';
import useCategorias from '@/hooks/useCategorias';
import ModalContent from '@/components/ModalContent';
import Steps from '@/components/Steps';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#__next');

const Layout = ({ children, title = '', description = '' }) => {
  const [isActive, setIsActive] = useState(false);

  const { modal } = useCategorias();

  const handleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Head>
        <title>Chillhop Coffee | {title} </title>
        <meta name="description" content={description} />
      </Head>
      <div className="md:flex">
        <button
          className="w-[1.8rem] absolute top-4 right-2 md:hidden"
          onClick={handleMenu}
        >
          <Image
            src="/img/burger.svg"
            height={100}
            width={100}
            alt="Burger Icon"
            priority
          />
        </button>
        <aside
          className={`md:w-4/12 lg:w-1/6 py-10 bg-[#411414] md:block ${
            isActive ? 'block' : 'hidden'
          }`}
        >
          <Menu />
        </aside>
        <main className="md:w-8/12 lg:w-5/6 xl:w-6/10 h-screen overflow-y-scroll text-black py-8 px-10 bg-[#E6DDBC] scrollbar-hide">
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Steps />
          {children}
        </main>
        <Modal isOpen={modal} style={customStyles}>
          <ModalContent />
        </Modal>
      </div>
    </>
  );
};

export default Layout;
