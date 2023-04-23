import Image from 'next/image';
import useCategorias from '@/hooks/useCategorias';
import CategoriaItem from './CategoriaItem';

const Menu = () => {
  const { categoriasList } = useCategorias();

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
        {categoriasList.map((cat) => (
          <CategoriaItem key={cat.id} cat={cat} />
        ))}
      </nav>
    </>
  );
};

export default Menu;
