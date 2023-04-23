import useCategorias from '@/hooks/useCategorias';
import Image from 'next/image';

const CategoriaItem = ({ cat }) => {
  const { handleCategoriaSelected, categoriaSelected } = useCategorias();

  const { nombre, icono, id } = cat;

  return (
    <div
      className={`my-8 ease-out hover:transition-colors duration-300 hover:bg-[#E6DDBC] hover:rounded-bl-3xl hover:rounded-tl-3xl flex gap-2 font-bold ${
        id == categoriaSelected?.id
          ? 'bg-[#E6DDBC] rounded-bl-3xl rounded-tl-3xl'
          : ''
      } `}
    >
      {/*  <Image
        src={`/img/icono_${icono}.svg`}
        height={25}
        width={45}
        alt={`Logo de la categoria ${nombre}`}
        className=" px-1"
      /> */}
      <button
        className={`text-2xl font-black font-poiretOne text-gray-100 hover:text-black  py-3 w-full ${
          id == categoriaSelected?.id ? 'text-gray-900 ' : ''
        }`}
        onClick={() => handleCategoriaSelected(cat)}
      >
        {nombre}
      </button>
    </div>
  );
};

export default CategoriaItem;
