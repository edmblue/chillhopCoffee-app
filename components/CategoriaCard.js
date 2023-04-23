import Image from 'next/image';
import { formatearCantidad } from '@/helpers';
import useCategorias from '@/hooks/useCategorias';

const CategoriaCard = ({ producto }) => {
  const { handleProductoSelected } = useCategorias();

  const { nombre, imagen, precio } = producto;

  return (
    <div className="bg-white p-3 rounded-md shadow-md grid lg:grid-cols-2 gap-3">
      <Image
        width={200}
        height={100}
        alt={`Foto del Producto ${nombre}`}
        src={`/img/${imagen}.jpg`}
        priority
        className="shadow-xl rounded mx-auto"
      />
      <div className="flex flex-col gap-2 md:gap-0 justify-between">
        <h3 className=" text-lg lg:text-xl font-bold ">{nombre}</h3>
        <p className="mt-2 text-lg font-black text-[#411414]">
          Precio:{' '}
          <span className="font-normal text-black">
            {formatearCantidad(precio)}
          </span>
        </p>
        <button
          type="button"
          onClick={() => handleProductoSelected(producto)}
          className="font-bold hover:text-[#411414] bg-[#411414] py-2 rounded-md uppercase text-gray-100 hover:bg-[#E6DDBC]"
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default CategoriaCard;
