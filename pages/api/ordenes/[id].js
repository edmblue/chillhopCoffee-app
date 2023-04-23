import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  if (req.method === 'POST') {
    const id = req.query.id;
    const orden = await prisma.ordenes.update({
      where: {
        id: +id,
      },
      data: {
        estado: true,
      },
    });

    res.status(200).json(orden);
  }
}
