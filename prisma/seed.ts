import { PrismaClient } from '@prisma/client';
import { categorias } from './data/categorias';
import { productos } from './data/productos';

const main = async () => {
  const prisma = new PrismaClient();
  try {
    await prisma.categorias.createMany({
      data: categorias,
    });
    await prisma.productos.createMany({
      data: productos,
    });
  } catch (error) {
    console.log(error);
  }
};

main();
