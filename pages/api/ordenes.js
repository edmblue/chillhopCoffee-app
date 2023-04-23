import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  if (req.method === 'GET') {
    const ordenes = await prisma.ordenes.findMany();

    res.status(200).json(ordenes);
  } else if (req.method === 'POST') {
    const orden = await prisma.ordenes.create({
      data: {
        nombre: req.body.nombre,
        pedido: req.body.pedido,
        total: req.body.total,
        fecha: req.body.fecha,
      },
    });

    res.status(200).json(orden);
  }
}
