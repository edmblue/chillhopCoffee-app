/*
  Warnings:

  - You are about to drop the column `Estado` on the `ordenes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `ordenes` DROP COLUMN `Estado`,
    ADD COLUMN `estado` BOOLEAN NOT NULL DEFAULT false;
