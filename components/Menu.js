import Image from 'next/image';
import useCategorias from '@/hooks/useCategorias';
import CategoriaItem from './CategoriaItem';

const Menu = () => {
  const { categoriasList } = useCategorias();

  return (
    <>
      <div className="mx-auto">
        <Image
          src="/img/logo-coffee.png"
          className="mx-auto h-auto object-contain"
          alt="Logo Coffee Shop"
          priority
          width={180}
          height={100}
        />
      </div>
      <nav className="mt-6">
        {categoriasList.map((cat) => (
          <CategoriaItem key={cat.id} cat={cat} />
        ))}
      </nav>
    </>
  );
};

export default Menu;
