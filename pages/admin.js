import useAdmin from '@/hooks/useAdmin';
import AdminLayout from '@/layout/AdminLayout';
import PedidoList from '@/components/PedidoList';
import useStatus from '@/hooks/useStatus';

export default function Admin() {
  const { adminSection } = useAdmin();

  const { ordenes, isLoading, isError } = useStatus(adminSection.status);

  return (
    <AdminLayout title="Administración">
      <div>
        <h1 className="text-5xl text-[#411414] font-pacifico">
          Panel de Administración
        </h1>
        <p className="text-red-950 text-2xl font-black mt-3">
          {adminSection.nombre}
        </p>
      </div>
      <div className="mt-4 px-6 space-y-5">
        <PedidoList ordenes={ordenes} />
      </div>
    </AdminLayout>
  );
}
