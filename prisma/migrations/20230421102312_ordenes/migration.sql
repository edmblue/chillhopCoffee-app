/*
  Warnings:

  - You are about to drop the column `pedido` on the `ordenes` table. All the data in the column will be lost.
  - Added the required column `nombre` to the `Ordenes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ordenes` DROP COLUMN `pedido`,
    ADD COLUMN `nombre` VARCHAR(191) NOT NULL;
