/*
  Warnings:

  - You are about to drop the column `imagen` on the `productos` table. All the data in the column will be lost.
  - Added the required column `icono` to the `Categorias` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `categorias` ADD COLUMN `icono` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `productos` DROP COLUMN `imagen`,
    ADD COLUMN `icono` VARCHAR(191) NULL;
