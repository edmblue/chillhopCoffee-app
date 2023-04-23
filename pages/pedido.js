import useCategorias from '@/hooks/useCategorias';
import Layout from '@/layout/Layout';
import PedidoItem from '@/components/PedidoItem';

export default function Pedido() {
  const { pedidosList } = useCategorias();

  return (
    <Layout title="Pedido">
      <div className="">
        {pedidosList.length > 0 ? (
          pedidosList.map((pedido) => (
            <PedidoItem key={pedido.id} pedido={pedido} />
          ))
        ) : (
          <p className="uppercase text-center text-2xl font-bold bg-red-950 text-white">
            Sin Articulos en El Pedido
          </p>
        )}
      </div>
    </Layout>
  );
}
