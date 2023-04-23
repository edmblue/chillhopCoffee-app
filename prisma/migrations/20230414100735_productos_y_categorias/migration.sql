/*
  Warnings:

  - You are about to drop the column `icono` on the `productos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `productos` DROP COLUMN `icono`,
    ADD COLUMN `imagen` VARCHAR(191) NULL;
