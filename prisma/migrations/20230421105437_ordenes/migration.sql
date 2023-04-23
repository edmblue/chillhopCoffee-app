/*
  Warnings:

  - You are about to alter the column `pedido` on the `ordenes` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `ordenes` MODIFY `pedido` JSON NOT NULL;
