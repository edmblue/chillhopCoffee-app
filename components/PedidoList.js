import { formatearCantidad, formatearFecha } from '@/helpers';
import axios from 'axios';
import Image from 'next/image';
import Swal from 'sweetalert2';

const PedidoList = ({ ordenes }) => {
  const completeOrden = async (id) => {
    Swal.fire({
      title: '¿Esta seguro que desea completar la orden?',
      text: 'No se podrá revertir',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, completar la orden',
    }).then((result) => {
      if (result.isConfirmed) {
        enviarOrder(id);

        Swal.fire(
          'Confirmado',
          'Se ha enviado a la seccion de completados',
          'success'
        );
      }
    });

    const enviarOrder = async (id) => {
      const url = `/api/ordenes/${id}`;
      try {
        await axios.post(url);
      } catch (error) {
        console.log(error.response.data);
      }
    };
  };

  return (
    <>
      {ordenes?.map((orden) => (
        <div className="bg-white p-3 rounded shadow-lg" key={orden.id}>
          <p className="font-bold text-lg md:text-xl">
            Nombre Cliente:{' '}
            <span className="fontnbold text-xl md:text-2xl text-red-950">
              {orden.nombre}
            </span>
          </p>
          <div>
            <h3 className="font-bold text-xl my-3">Pedido</h3>
            <div className="space-y-3">
              {orden.pedido.map((ped) => (
                <div
                  key={ped.id}
                  className="flex flex-col md:flex-row gap-3 items-center border-b-2 border-red-100 last-of-type:border-0 py-3"
                >
                  <Image
                    src={`/img/${ped.imagen}.jpg`}
                    height={100}
                    width={100}
                    alt={`Imagen del platillo ${ped.nombre}`}
                    className="rounded shadow-lg"
                  />
                  <div>
                    <p className="font-bold text-red-950">{ped.nombre}</p>
                    <p className="font-bold">
                      Cantidad:{' '}
                      <span className="font-normal">{ped.cantidad}</span>{' '}
                    </p>
                    <p className="font-bold">
                      Fecha:{' '}
                      <span className="font-normal">
                        {formatearFecha(+orden.fecha)}
                      </span>{' '}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold text-lg md:text-xl mt-5">
              Estado:
              <span
                className={`fontnbold text-xl md:text-2xl ${
                  orden.estado ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {orden.estado ? 'Completado' : 'Pendiente'}
              </span>
            </p>
            <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row justify-between items-center w-full">
              <p className="font-bold text-lg md:text-xl mt-5 uppercase">
                Total a Pagar:{' '}
                <span className="fontnbold text-2xl md:text-4xl text-red-950">
                  {formatearCantidad(orden.total)}
                </span>
              </p>
              <button
                className="bg-green-400 text-red-950 font-bold px-3 py-2 hover:bg-green-700 hover:text-white rounded"
                type="button"
                onClick={() => completeOrden(orden.id)}
              >
                Marcar Completado
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PedidoList;
