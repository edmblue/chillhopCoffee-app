/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icono` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `ordenes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `total` double NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT '0',
  `fecha` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pedido` json NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `precio` double NOT NULL,
  `categoriaId` int NOT NULL,
  `imagen` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Productos_categoriaId_fkey` (`categoriaId`),
  CONSTRAINT `Productos_categoriaId_fkey` FOREIGN KEY (`categoriaId`) REFERENCES `categorias` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('04d80e18-0861-4f4e-8696-06c25a987c15', '20008290793928952f1a6cd96ce00dfa5fd8dbf30136c530820cec2b615f6e34', '2023-04-21 11:49:29.716', '20230421102707_ordenes', NULL, NULL, '2023-04-21 11:49:29.692', 1);
INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('1f902234-7104-44ab-9c2f-c614d02d1429', '59270d38c81ee6517911b41e8e5a8569218e13004103edb054693a4f35655584', '2023-04-21 11:49:29.583', '20230415075733_categorias', NULL, NULL, '2023-04-21 11:49:29.555', 1),
('3b96ceae-208a-4b03-9220-0afc9c3de63c', '1ff132811a681a8a8a7e392ccac43436e7e38a05f78f21af33c5e520b87e2c24', '2023-04-21 11:49:29.519', '20230414100735_productos_y_categorias', NULL, NULL, '2023-04-21 11:49:29.500', 1),
('3cb21178-f403-4e29-a9c6-245183d272b4', '82c55e8f25792c8623f4fe991888e75ccd7c3cf8e7ba76cd704ca02106d5bd82', '2023-04-21 11:49:29.689', '20230421102312_ordenes', NULL, NULL, '2023-04-21 11:49:29.669', 1),
('6a04e85e-25e7-4e51-9703-d8cc73605168', 'a0ef11999288673d647da2b27510835a433cde7ccfbc782c2aef4c2b056b1dcf', '2023-04-21 11:49:29.617', '20230421093329_ordenes', NULL, NULL, '2023-04-21 11:49:29.589', 1),
('84332c24-003f-4770-a461-a271ade6eff4', '926819cb4e9dd051e7ca23de537da2698c91a4899f99f9b187307cb2fd09c260', '2023-04-21 11:49:29.551', '20230415075245_prueba', NULL, NULL, '2023-04-21 11:49:29.522', 1),
('99f29572-6305-402f-aefe-0b852c9f542b', 'e7678817516464359a0adf1d63be7baf9d2f195a7bce6058be152a07d3def004', '2023-04-21 11:49:29.775', '20230421105437_ordenes', NULL, NULL, '2023-04-21 11:49:29.720', 1),
('b42d57a6-f1a8-4715-8420-fdf2a6228ad8', '081c1e5428427fcfdc66a6525aff17d9786ae1344de394556ea7e66020b3c859', '2023-04-21 11:49:29.643', '20230421093444_ordenes', NULL, NULL, '2023-04-21 11:49:29.622', 1),
('b55106d5-035a-4426-8098-7e9ccd260094', '591b1574b98e297b0aec84d524807969968b1b75e839e1da40d3b82c79be953c', '2023-04-21 11:49:29.666', '20230421094751_ordenes', NULL, NULL, '2023-04-21 11:49:29.648', 1),
('bd90e867-4c1e-4c4d-9243-80a052349d6b', '5cf320bd7387ef3698accf1269f0b04fef5f402f7a63231d94700fe7604bbf27', '2023-04-21 11:49:29.497', '20230414100245_productos_y_categorias', NULL, NULL, '2023-04-21 11:49:29.449', 1),
('e3582282-86de-4282-a043-55040d4f93f9', '4462445ccb15897eca696665ce36f471c0f321e7e1df137767b4d4235c1fe5a6', '2023-04-21 11:49:29.440', '20230414093558_productos_y_categorias', NULL, NULL, '2023-04-21 11:49:29.241', 1);

INSERT INTO `categorias` (`id`, `nombre`, `icono`) VALUES
(1, 'Café', 'cafe');
INSERT INTO `categorias` (`id`, `nombre`, `icono`) VALUES
(2, 'Hamburguesas', 'hamburguesa');
INSERT INTO `categorias` (`id`, `nombre`, `icono`) VALUES
(3, 'Pizzas', 'pizza');
INSERT INTO `categorias` (`id`, `nombre`, `icono`) VALUES
(4, 'Donas', 'dona'),
(5, 'Pasteles', 'pastel'),
(6, 'Galletas', 'galletas');

INSERT INTO `ordenes` (`id`, `total`, `estado`, `fecha`, `nombre`, `pedido`) VALUES
(1, 299.5, 0, '1682077855243', 'Johnny Deep', '[{\"id\": 40, \"imagen\": \"hamburguesas_06\", \"nombre\": \"Hamburguesa Doble Queso\", \"precio\": 69.9, \"cantidad\": 2, \"categoriaId\": 2}, {\"id\": 42, \"imagen\": \"hamburguesas_08\", \"nombre\": \"Paquete 2 Hot Dogs\", \"precio\": 69.9, \"cantidad\": 1, \"categoriaId\": 2}, {\"id\": 52, \"imagen\": \"pizzas_04\", \"nombre\": \"Pizza Especial de la Casa\", \"precio\": 69.9, \"cantidad\": 1, \"categoriaId\": 3}, {\"id\": 18, \"imagen\": \"donas_04\", \"nombre\": \"Dona con Galleta de Chocolate \", \"precio\": 19.9, \"cantidad\": 1, \"categoriaId\": 4}]');
INSERT INTO `ordenes` (`id`, `total`, `estado`, `fecha`, `nombre`, `pedido`) VALUES
(2, 179.6, 1, '1682077914866', 'Taylor Swift', '[{\"id\": 10, \"imagen\": \"cafe_10\", \"nombre\": \"Café Mocha Frio con Caramelo Mediano\", \"precio\": 49.9, \"cantidad\": 2, \"categoriaId\": 1}, {\"id\": 30, \"imagen\": \"galletas_02\", \"nombre\": \"Paquete Galletas de Chocolate y Avena\", \"precio\": 39.9, \"cantidad\": 2, \"categoriaId\": 6}]');
INSERT INTO `ordenes` (`id`, `total`, `estado`, `fecha`, `nombre`, `pedido`) VALUES
(3, 179.6, 0, '1682156049111', 'Lady Gaga', '[{\"id\": 6, \"imagen\": \"cafe_06\", \"nombre\": \"Café Mocha Caliente Chico\", \"precio\": 39.9, \"cantidad\": 2, \"categoriaId\": 1}, {\"id\": 44, \"imagen\": \"pastel_02\", \"nombre\": \"Waffle Especial\", \"precio\": 49.9, \"cantidad\": 2, \"categoriaId\": 5}]');
INSERT INTO `ordenes` (`id`, `total`, `estado`, `fecha`, `nombre`, `pedido`) VALUES
(4, 279.5, 1, '1682156303730', 'Katy Perry', '[{\"id\": 1, \"imagen\": \"cafe_01\", \"nombre\": \"Café Caramel con Chocolate\", \"precio\": 59.9, \"cantidad\": 1, \"categoriaId\": 1}, {\"id\": 15, \"imagen\": \"donas_01\", \"nombre\": \"Paquete de 3 donas de Chocolate\", \"precio\": 39.9, \"cantidad\": 1, \"categoriaId\": 4}, {\"id\": 36, \"imagen\": \"hamburguesas_02\", \"nombre\": \"Hamburguesa de Pollo\", \"precio\": 59.9, \"cantidad\": 3, \"categoriaId\": 2}]'),
(5, 479.3, 1, '1682156534265', 'Will Smith', '[{\"id\": 43, \"imagen\": \"pastel_01\", \"nombre\": \"4 Rebanadas de Pay de Queso\", \"precio\": 69.9, \"cantidad\": 4, \"categoriaId\": 5}, {\"id\": 49, \"imagen\": \"pizzas_01\", \"nombre\": \"Pizza Spicy con Doble Queso\", \"precio\": 69.9, \"cantidad\": 1, \"categoriaId\": 3}, {\"id\": 52, \"imagen\": \"pizzas_04\", \"nombre\": \"Pizza Especial de la Casa\", \"precio\": 69.9, \"cantidad\": 1, \"categoriaId\": 3}, {\"id\": 37, \"imagen\": \"hamburguesas_03\", \"nombre\": \"Hamburguesa de Pollo y Chili\", \"precio\": 59.9, \"cantidad\": 1, \"categoriaId\": 2}]'),
(6, 329.4, 0, '1682257001623', 'Megan Fox ', '[{\"id\": 7, \"imagen\": \"cafe_07\", \"nombre\": \"Café Mocha Caliente Grande con Chocolate\", \"precio\": 59.9, \"cantidad\": 1, \"categoriaId\": 1}, {\"id\": 55, \"imagen\": \"pizzas_07\", \"nombre\": \"Pizza Tocino\", \"precio\": 69.9, \"cantidad\": 3, \"categoriaId\": 3}, {\"id\": 29, \"imagen\": \"galletas_01\", \"nombre\": \"Paquete Galletas de Chocolate\", \"precio\": 29.9, \"cantidad\": 2, \"categoriaId\": 6}]');

INSERT INTO `productos` (`id`, `nombre`, `precio`, `categoriaId`, `imagen`) VALUES
(1, 'Café Caramel con Chocolate', 59.9, 1, 'cafe_01');
INSERT INTO `productos` (`id`, `nombre`, `precio`, `categoriaId`, `imagen`) VALUES
(2, 'Café Frio con Chocolate Grande', 49.9, 1, 'cafe_02');
INSERT INTO `productos` (`id`, `nombre`, `precio`, `categoriaId`, `imagen`) VALUES
(3, 'Latte Frio con Chocolate Grande', 54.9, 1, 'cafe_03');
INSERT INTO `productos` (`id`, `nombre`, `precio`, `categoriaId`, `imagen`) VALUES
(4, 'Latte Frio con Chocolate Grande', 54.9, 1, 'cafe_04'),
(5, 'Malteada Fria con Chocolate Grande', 54.9, 1, 'cafe_05'),
(6, 'Café Mocha Caliente Chico', 39.9, 1, 'cafe_06'),
(7, 'Café Mocha Caliente Grande con Chocolate', 59.9, 1, 'cafe_07'),
(8, 'Café Caliente Capuchino Grande', 59.9, 1, 'cafe_08'),
(9, 'Café Mocha Caliente Mediano', 49.9, 1, 'cafe_09'),
(10, 'Café Mocha Frio con Caramelo Mediano', 49.9, 1, 'cafe_10'),
(11, 'Café Mocha Frio con Chocolate Mediano', 49.9, 1, 'cafe_11'),
(12, 'Café Espresso', 29.9, 1, 'cafe_12'),
(13, 'Café Capuchino Grande con Caramelo', 59.9, 1, 'cafe_13'),
(14, 'Café Caramelo Grande', 59.9, 1, 'cafe_14'),
(15, 'Paquete de 3 donas de Chocolate', 39.9, 4, 'donas_01'),
(16, 'Paquete de 3 donas Glaseadas', 39.9, 4, 'donas_02'),
(17, 'Dona de Fresa ', 19.9, 4, 'donas_03'),
(18, 'Dona con Galleta de Chocolate ', 19.9, 4, 'donas_04'),
(19, 'Dona glass con Chispas Sabor Fresa ', 19.9, 4, 'donas_05'),
(20, 'Dona glass con Chocolate ', 19.9, 4, 'donas_06'),
(21, 'Dona de Chocolate con MÁS Chocolate ', 19.9, 4, 'donas_07'),
(22, 'Paquete de 3 donas de Chocolate ', 39.9, 4, 'donas_08'),
(23, 'Paquete de 3 donas con Vainilla y Chocolate ', 39.9, 4, 'donas_09'),
(24, 'Paquete de 6 Donas', 69.9, 4, 'donas_10'),
(25, 'Paquete de 3 Variadas', 39.9, 4, 'donas_11'),
(26, 'Dona Natural con Chocolate', 19.9, 4, 'donas_12'),
(27, 'Paquete de 3 Donas de Chocolate con Chispas', 39.9, 4, 'donas_13'),
(28, 'Dona Chocolate y Coco', 19.9, 4, 'donas_14'),
(29, 'Paquete Galletas de Chocolate', 29.9, 6, 'galletas_01'),
(30, 'Paquete Galletas de Chocolate y Avena', 39.9, 6, 'galletas_02'),
(31, 'Paquete de Muffins de Vainilla', 39.9, 6, 'galletas_03'),
(32, 'Paquete de 4 Galletas de Avena', 24.9, 6, 'galletas_04'),
(33, 'Galletas de Mantequilla Variadas', 39.9, 6, 'galletas_05'),
(34, 'Galletas de sabores frutales', 39.9, 6, 'galletas_06'),
(35, 'Hamburguesa Sencilla', 59.9, 2, 'hamburguesas_01'),
(36, 'Hamburguesa de Pollo', 59.9, 2, 'hamburguesas_02'),
(37, 'Hamburguesa de Pollo y Chili', 59.9, 2, 'hamburguesas_03'),
(38, 'Hamburguesa Queso y  Pepinos', 59.9, 2, 'hamburguesas_04'),
(39, 'Hamburguesa Cuarto de Libra', 59.9, 2, 'hamburguesas_05'),
(40, 'Hamburguesa Doble Queso', 69.9, 2, 'hamburguesas_06'),
(41, 'Hot Dog Especial', 49.9, 2, 'hamburguesas_07'),
(42, 'Paquete 2 Hot Dogs', 69.9, 2, 'hamburguesas_08'),
(43, '4 Rebanadas de Pay de Queso', 69.9, 5, 'pastel_01'),
(44, 'Waffle Especial', 49.9, 5, 'pastel_02'),
(45, 'Croissants De la casa', 39.9, 5, 'pastel_03'),
(46, 'Pay de Queso', 19.9, 5, 'pastel_04'),
(47, 'Pastel de Chocolate', 29.9, 5, 'pastel_05'),
(48, 'Rebanada Pastel de Chocolate', 29.9, 5, 'pastel_06'),
(49, 'Pizza Spicy con Doble Queso', 69.9, 3, 'pizzas_01'),
(50, 'Pizza Jamón y Queso', 69.9, 3, 'pizzas_02'),
(51, 'Pizza Doble Queso', 69.9, 3, 'pizzas_03'),
(52, 'Pizza Especial de la Casa', 69.9, 3, 'pizzas_04'),
(53, 'Pizza Chorizo', 69.9, 3, 'pizzas_05'),
(54, 'Pizza Hawaiana', 69.9, 3, 'pizzas_06'),
(55, 'Pizza Tocino', 69.9, 3, 'pizzas_07'),
(56, 'Pizza Vegetales y Queso', 69.9, 3, 'pizzas_08'),
(57, 'Pizza Pepperoni y Queso', 69.9, 3, 'pizzas_09'),
(58, 'Pizza Aceitunas y Queso', 69.9, 3, 'pizzas_10'),
(59, 'Pizza Queso, Jamón y Champiñones', 69.9, 3, 'pizzas_11');


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;