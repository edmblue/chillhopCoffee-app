export const formatearCantidad = (value) => {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const formatearFecha = (date) => {
  const fecha = new Date(date);

  const opciones = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  return fecha.toLocaleString('es-ES', opciones);
};
