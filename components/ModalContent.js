import { formatearCantidad } from '@/helpers';
import useCategorias from '@/hooks/useCategorias';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Modal = () => {
  const [cantidad, setCantidad] = useState(1);
  const [editar, setEditar] = useState(false);

  const { productoSelected, handleSetModal, handlePedidosList, pedidosList } =
    useCategorias();

  const { nombre, imagen, precio, id } = productoSelected;

  const checkEdit = () => {
    const exist = pedidosList.some((item) => item.id === id);
    if (exist) {
      setEditar(true);
      setCantidad(() => {
        pedidosList.forEach((item) =>
          item.id === id ? setCantidad(item.cantidad) : ''
        );
      });
    }
  };

  useEffect(() => {
    checkEdit();
  }, []);

  const handlePedidos = (e) => {
    e.preventDefault();

    handlePedidosList({ ...productoSelected, cantidad });
  };

  return (
    <>
      <div className="flex justify-end">
        <button type="button" onClick={handleSetModal}>
          <img src="/icons/closeIcon.svg" className="w-[1.5rem]" />
        </button>
      </div>
      <div className="">
        <div className="flex justify-end"></div>
        <div>
          <p className="text-2xl font-black">{nombre}</p>
          <div className="mt-2 grid md:grid-cols-2 gap-3">
            <Image
              width={200}
              height={300}
              alt={`Imagen del platillo ${nombre}`}
              src={`/img/${imagen}.jpg`}
              className="rounded-lg shadow-lg"
            />
            <div className="flex flex-col gap-2 md:gap-0 justify-evenly">
              <p className="text-5xl font-black text-[#411414]">
                {formatearCantidad(precio)}{' '}
              </p>
              <div className="mt-4">
                <p className="text-2xl font-bold">Cantidad</p>
                <div className="flex items-center gap-3 mt-1">
                  <button
                    onClick={() => {
                      if (cantidad <= 1) return;
                      setCantidad((cant) => cant - 1);
                    }}
                    type="button"
                  >
                    <Image
                      width={100}
                      height={100}
                      alt="Signo plus"
                      src="icons/Minus.svg"
                      className="w-[1.2rem]"
                    />
                  </button>
                  <p className="text-xl font-bold">{cantidad}</p>
                  <button
                    onClick={() => {
                      if (cantidad >= 5) return;
                      setCantidad((cant) => cant + 1);
                    }}
                    type="button"
                  >
                    <Image
                      width={100}
                      height={100}
                      alt="Signo minus"
                      src="/icons/Plus.svg"
                      className="w-[1.2rem]"
                    />
                  </button>
                </div>
              </div>
              <button
                type="button"
                onClick={handlePedidos}
                className="font-bold hover:text-[#411414] bg-[#411414] py-2 rounded-md uppercase text-gray-100 hover:bg-[#E6DDBC]"
              >
                {editar ? 'Guardar Cambios' : 'Añadir Producto'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
