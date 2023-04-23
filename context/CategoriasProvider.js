import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const CategoriasContext = createContext();

const CategoriasProvider = ({ children }) => {
  const [categoriasList, setCategoriasList] = useState([]);
  const [categoriaSelected, setCategoriaSelected] = useState();
  const [productoSelected, setProductoSelected] = useState({});
  const [modal, setModal] = useState(false);
  const [pedidosList, setPedidosList] = useState([]);

  const [nombre, setNombre] = useState('');

  const router = useRouter();

  const handleSetModal = () => {
    setModal(!modal);
  };

  const handleCategoriaSelected = (cat) => {
    setCategoriaSelected(cat);
    router.push('/');
  };

  const handleProductoSelected = (prod) => {
    setProductoSelected(prod);
    handleSetModal();
  };

  const handlePedidosList = (pedido) => {
    if (pedidosList.some((item) => item.id === pedido.id)) {
      toast.success('¡Pedido modificado!', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: true,
        progress: undefined,
        theme: 'light',
      });
      setPedidosList((list) => {
        return list.map((item) => (item.id === pedido.id ? pedido : item));
      });
    } else {
      toast.success('¡Pedido añadido!', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: true,
        progress: undefined,
        theme: 'light',
      });
      setPedidosList((list) => [...list, pedido]);
    }

    handleSetModal();
  };

  const eliminarProducto = (producto) => {
    setPedidosList((list) => list.filter((item) => item.id != producto.id));
    toast.error('¡Pedido eliminado!', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const getCategorias = async () => {
    const url = 'http://localhost:3000/api/categorias';
    try {
      const response = await axios.get(url);

      const { data: categoriasList } = response;

      setCategoriasList(categoriasList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategorias();
  }, []);

  useEffect(() => {
    setCategoriaSelected(categoriasList[0]);
  }, [categoriasList]);

  return (
    <CategoriasContext.Provider
      value={{
        categoriasList,
        handleCategoriaSelected,
        categoriaSelected,
        handleProductoSelected,
        handleSetModal,
        modal,
        productoSelected,
        handlePedidosList,
        pedidosList,
        setPedidosList,
        eliminarProducto,

        nombre,
        setNombre,
      }}
    >
      {children}
    </CategoriasContext.Provider>
  );
};

export { CategoriasProvider };

export default CategoriasContext;
