import useCategorias from '@/hooks/useCategorias';
import Layout from '@/layout/Layout';
import CategoriaCard from '@/components/CategoriaCard';

export default function Home() {
  const { categoriaSelected } = useCategorias();

  return (
    <Layout title={categoriaSelected?.nombre}>
      <div>
        <h1 className="text-5xl text-[#411414] font-pacifico">
          {categoriaSelected?.nombre}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-3">
          {categoriaSelected?.productos?.map((producto) => (
            <CategoriaCard key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
