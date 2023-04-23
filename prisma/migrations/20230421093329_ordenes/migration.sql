-- CreateTable
CREATE TABLE `Ordenes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pedido` VARCHAR(191) NOT NULL,
    `total` DOUBLE NOT NULL,
    `Fecha` VARCHAR(191) NOT NULL,
    `Estado` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
