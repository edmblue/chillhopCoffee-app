/*
  Warnings:

  - Added the required column `pedido` to the `Ordenes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ordenes` ADD COLUMN `pedido` VARCHAR(191) NOT NULL;
