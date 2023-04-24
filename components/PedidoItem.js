import Image from 'next/image';
import { formatearCantidad } from '@/helpers';
import useCategorias from '@/hooks/useCategorias';

const PedidoItem = ({ pedido }) => {
  const { id, nombre, imagen, precio, cantidad } = pedido;

  const { handleSetModal, handleProductoSelected, eliminarProducto } =
    useCategorias();

  const handleEditPedido = () => {
    handleSetModal();
    handleProductoSelected(pedido);
  };

  return (
    <div className="mx-auto mt-2 flex gap-3 bg-white py-3 rounded px-4 shadow-2xl items-center justify-center">
      <div className="w-1/3 flex items-center">
        <Image
          src={`/img/${imagen}.jpg`}
          width={200}
          height={100}
          alt={`Foto del platillo ${nombre}`}
          className="rounded shadow-lg mx-auto"
        />
      </div>
      <div className="w-2/3 py-3 flex flex-col justify-center gap-2">
        <h2 className="text-red-950 text-lg md:text-2xl font-bold">{nombre}</h2>
        <p className="md:text-xl font-bold">
          Precio:{' '}
          <span className="font-normal">{formatearCantidad(precio)}</span>
        </p>
        <p className="md:text-lg font-bold">
          Cantidad: <span className="font-normal">{cantidad}</span>
        </p>
        <p className="md:text-sm font-bold">
          Subtotal:{' '}
          <span className="font-normal">
            {formatearCantidad(precio * cantidad)}
          </span>
        </p>
        <div className="flex gap-2 mt-2">
          <button
            className="font-bold text-sm hover:text-[#411414] bg-[#411414] py-2 px-3 rounded-md uppercase text-gray-100 hover:bg-[#E6DDBC]"
            type="button"
            onClick={handleEditPedido}
          >
            Editar
          </button>
          <button
            className="font-bold text-sm hover:text-[#fa5050] bg-[#fa5050] py-2 px-3 rounded-md uppercase text-gray-100 hover:bg-[#E6DDBC]"
            type="button"
            onClick={() => eliminarProducto(pedido)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PedidoItem;
