import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  const ordenes = await prisma.ordenes.findMany({
    where: {
      estado: JSON.parse(req.query.estado),
    },
  });

  res.status(200).json(ordenes);
}
