/*
  Warnings:

  - You are about to drop the column `Fecha` on the `ordenes` table. All the data in the column will be lost.
  - Added the required column `fecha` to the `Ordenes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ordenes` DROP COLUMN `Fecha`,
    ADD COLUMN `fecha` VARCHAR(191) NOT NULL;
