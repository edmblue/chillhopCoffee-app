import Layout from '@/layout/Layout';
import { useState, useEffect } from 'react';
import { formatearCantidad } from '@/helpers';
import useCategorias from '@/hooks/useCategorias';
import axios from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

export default function Orden() {
  const [total, setTotal] = useState(0);
  const {
    pedidosList,

    nombre,
    setNombre,

    setPedidosList,
  } = useCategorias();
  const [isDisabled, setIsDisabled] = useState(true);
  const router = useRouter();

  const calculateTotal = () => {
    setTotal(() =>
      pedidosList.reduce(
        (total, item) => total + item.precio * item.cantidad,
        0
      )
    );
  };

  const handleDisabled = () => {
    if (pedidosList.length > 0 && nombre.length >= 3) {
      setIsDisabled(false);
    }
  };

  useEffect(() => {
    handleDisabled();
  }, [pedidosList, nombre]);

  const sendOrden = async () => {
    const url = '/api/ordenes';

    try {
      await axios.post(url, {
        nombre,
        pedido: pedidosList,
        total,
        fecha: Date.now().toString(),
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleOrden = (e) => {
    e.preventDefault();

    sendOrden();

    setTotal(0);
    setPedidosList([]);
    setNombre('');

    toast.success('Pedido Finalizado', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: true,
      progress: undefined,
      theme: 'light',
    });

    setTimeout(() => {
      router.push('/');
    }, 2000);
  };

  useEffect(() => {
    calculateTotal();
  }, []);

  return (
    <Layout title="Orden">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl uppercase font-black text-red-950">
          Termine su compra
        </h2>
        <form onSubmit={handleOrden}>
          <div className="mt-4">
            <label htmlFor="nombre" className="font-bold text-lg">
              Ingrese su Nombre Completo
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              className="bg-slate-300 text-black py-2 px-3 mt-3 w-full lg:w-1/3 block placeholder-slate-400"
              placeholder="Nombre Completo"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <h2 className="mt-10 font-bold text-2xl">Total a Pagar</h2>
            <p className="mt-3 text-xl font-bold">
              Total:{' '}
              <span className="font-black text-3xl text-red-950">
                {formatearCantidad(total)}
              </span>
            </p>
          </div>
          <input
            type="submit"
            value="Finalizar Pedido"
            className={`font-bold hover:text-[#411414] bg-[#411414] py-2 rounded-md uppercase px-3 mt-6 w-full md:w-auto text-gray-100 hover:bg-[#E6DDBC] ${
              isDisabled
                ? 'bg-[#dd9a9a] cursor-not-allowed'
                : 'bg-[#411414] cursor-pointer'
            }`}
            disabled={isDisabled}
          />
        </form>
      </div>
    </Layout>
  );
}
