CREATE DATABASE  IF NOT EXISTS `thebestbikes` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `thebestbikes`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: thebestbikes
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `foto` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'BMX','Bicicleta GW Elite Mini BMX.png'),(2,'Ruta','Bicicleta Rodado 28 Gravel Specialized DIVERG'),(3,'Urbana','Bicicleta Rodado 28 Raleigh Urban 1.1.JPG'),(4,'Infantil','Bicicleta Rodado 12 Raleigh MXRIMG2.PNG'),(5,'Montaña','Bicicleta Rodado 29 Specialized EPIC HARDTAIL');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `marca` varchar(45) NOT NULL,
  `rodado` int(11) DEFAULT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` mediumtext DEFAULT NULL,
  `fotos` varchar(255) DEFAULT NULL,
  `color` varchar(30) DEFAULT NULL,
  `precio` int(11) NOT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categoria_id_idx` (`id_categoria`),
  CONSTRAINT `id_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Venzo',20,'GW ELITE MINI','marco Elite en alumio, llantas 20x1 3/8, freno Tektro, y todas sus partes GW Elite en aluminio.','Bicicleta GW Elite Mini BMX.png','rojo',20000,1),(2,'Venzo',20,'Venzo Infernol','Bicicleta Venzo Modelo INFERNO rodado 20 sistema de freno PROMAX pedales de Aluminio.','BICICLETA VENZO INFERNO R20 ROJOCELESTE.JPG','rojo',25100,1),(3,'Venzo',24,'GW ELITE MINI','marco Elite en alumio, llantas 20x1 3/8, freno Tektro, y todas sus partes GW Elite en aluminio.','Bicicleta GW Elite Mini BMX.png','blanco',19500,1),(4,'Venzo',24,'Venzo Infernol','Bicicleta Venzo Modelo INFERNO rodado 20 sistema de freno PROMAX pedales de Aluminio.','BICICLETA VENZO INFERNO R20 NEGRONARANJA.JPG','negro',24300,1),(5,'Venzo',20,'Venzo Viper','BICICLETA GW BMX ELITE Mini ','Bicicleta GW Elite Mini BMX.png','azul',23300,1),(6,'SPECIALIZED',28,'SPECIALIZED DIVERGE E5','La Diverge E5 está equipada con todo lo que tú necesitas para llevarte al trabajo, a casa o para alcanzar algunas rutas lejanas en el fin de semana. La Diverge es más capaz que nunca. Y con la constante meta de alcanzar tus necesidades, tomamos en cuenta el claro de la llanta. El nuevo marco cómodamente encajará llantas 700x42mm o 650b x 47mm. Con el claro de la llanta, el peso era un gran factor en el desarrollo, y tomando algunas pauta de diseño del desarrollo de la Roubaix, desarrollamos un cuadro de carbón FACT 9r que es uno de los más ligeros de su categoría. Nos alejamos de la tradicional geometría de cross y optamos por algo nunca visto: nuestra geometría Open Road. Usted puede pensar en ella como una bicicleta de ruta con una moderna geomertía de trail. Esto proporciona el manejo juguetón y una dirección fiable para superar caminos sucios y esquinas difíciles. En la geometría destaca el eje que es medio centímetro más bajo que en la Diverge anterior, un tubo delantero relajado, chainstays cortos y base para llantas cortas. Estos cambios la hacen una bici que no es sólo diversión en la suciedad, sino que funciona bien sobre la carretera. Añadido a sus multifacéticos talentos , pusimos 3 montajes para botellas, además de montajes para racks y defensas. Y esperamos que haga cambios precisos y tenga buenos frenos, por lo que pusimos un grupo Shimano Claris, con discos mecánicos y un set de aros Axis Sport Disc con nuestras llantas Espoir Sport, para hacerla rápida en la rodada.','Bicicleta Rodado 28 Gravel Specialized DIVERGE E5 2019.JPG','rojo',30500,2),(7,'SPECIALIZED',28,'Diverge E5 De Mujer','La Diverge E5 de Mujer está equipada con todo lo que necesitas para ir al trabajo y para montar durante el fin de semana.','Bicicleta Rodado 28 Specialized DIVERGE E5 ELITE 2019 Mujer.JPG','rojo',31200,2),(8,'SPECIALIZED',28,'Venge Pro','Lo mejor de las especificaciones en la Venge Pro es su perfecta combinación entre desempeño y valor. Posee Shimano Ultegra Di2 y freno discos hidráulicos, un conjunto de ruedas de fibra de carbono Roval CL 50 Disc y nuestras más premiadas llantas S-Works Turbo.','Bicicleta Rodado 28 Specialized VENGE PRO - SRAM eTAP 2020.JPG','negro',35100,2),(9,'SPECIALIZED',28,'SPECIALIZED DIVERGE E5','La Diverge E5 está equipada con todo lo que tú necesitas para llevarte al trabajo, a casa o para alcanzar algunas rutas lejanas en el fin de semana. La Diverge es más capaz que nunca. Y con la constante meta de alcanzar tus necesidades, tomamos en cuenta el claro de la llanta. El nuevo marco cómodamente encajará llantas 700x42mm o 650b x 47mm. Con el claro de la llanta, el peso era un gran factor en el desarrollo, y tomando algunas pauta de diseño del desarrollo de la Roubaix, desarrollamos un cuadro de carbón FACT 9r que es uno de los más ligeros de su categoría. Nos alejamos de la tradicional geometría de cross y optamos por algo nunca visto: nuestra geometría Open Road. Usted puede pensar en ella como una bicicleta de ruta con una moderna geomertía de trail. Esto proporciona el manejo juguetón y una dirección fiable para superar caminos sucios y esquinas difíciles. En la geometría destaca el eje que es medio centímetro más bajo que en la Diverge anterior, un tubo delantero relajado, chainstays cortos y base para llantas cortas. Estos cambios la hacen una bici que no es sólo diversión en la suciedad, sino que funciona bien sobre la carretera. Añadido a sus multifacéticos talentos , pusimos 3 montajes para botellas, además de montajes para racks y defensas. Y esperamos que haga cambios precisos y tenga buenos frenos, por lo que pusimos un grupo Shimano Claris, con discos mecánicos y un set de aros Axis Sport Disc con nuestras llantas Espoir Sport, para hacerla rápida en la rodada.','Bicicleta Rodado 28 Gravel Specialized DIVERGE E5 2019.JPG','rojo',33610,2),(10,'SPECIALIZED',28,'Diverge E5 De Mujer','La Diverge E5 de Mujer está equipada con todo lo que necesitas para ir al trabajo y para montar durante el fin de semana.','Bicicleta Rodado 28 Specialized DIVERGE E5 ELITE 2019 Mujer.JPG','blanco',31000,2),(11,'Vintage',28,'Rondinella','Este modelo RONDINELLA, puede ser rodado 26 1/2 o 28, depende tu altura y comodidad, completamente nuevo con cubre cadenas y guardabarros, cuadro de acero color a eleecion, llantas de aluminio, cubiertas de color, camaras vulcanizadas, frenos vbrake (opcional con frenos contra pedal).','Bicicleta Rodado 26 HGP Melanie Vintage','amarillo',23100,3),(12,'Vintage',26,'Rondinella','Este modelo RONDINELLA, puede ser rodado 26 1/2 o 28, depende tu altura y comodidad, completamente nuevo con cubre cadenas y guardabarros, cuadro de acero color a eleecion, llantas de aluminio, cubiertas de color, camaras vulcanizadas, frenos vbrake (opcional con frenos contra pedal).','Bicicleta Rodado 26 HGP Melanie VintageIMG3.png','verde',23500,3),(13,'Olmo',26,'Playera','MODELO. PLAYERA RODADO. 26','Bicicleta Rodado 26 HGP Playera Hombre 6 vel.PNG','negro',25000,3),(14,'Raleigh',28,'Urban','RODADO 28, cuadro de aluminio, cambios shimano, doble freno a disco hidraulico shimano, cubiertas kenda, descarrilador tourney, shifters shimano, piñon shimano 8v   ','Bicicleta Rodado 28 Raleigh Urban 1.1.JPG','negro',27600,3),(15,'Vintage',26,'Rondinella','Este modelo RONDINELLA, puede ser rodado 26 1/2 o 28, depende tu altura y comodidad, completamente nuevo con cubre cadenas y guardabarros, cuadro de acero color a eleecion, llantas de aluminio, cubiertas de color, camaras vulcanizadas, frenos vbrake (opcional con frenos contra pedal).','Bicicleta Rodado 26 HGP Melanie Vintage.PNG','verde',23100,3),(16,'Raleigh',12,'Cupcake','Cuadro: RALEIGH CUPCAKE, horquilla RALEIGH CUPCAKE,PIÑON 16T FULL BALL – SHUN FENG,PEDALES NENA 1/2 S/BOLILLAS – FLOR ROSA – FEIMIN, CANASTO RALEIGH R12 – CUP CAKE,PAR RUEDAS R 12 RALEIGH NENA LLANTA ROSA.  ','Bicicleta Rodado 12 Raleigh Cupcake.PNG','blanco',12200,4),(17,'Raleigh',12,'Cupcake','Cuadro: RALEIGH CUPCAKE, horquilla RALEIGH CUPCAKE,PIÑON 16T FULL BALL – SHUN FENG,PEDALES NENA 1/2 S/BOLILLAS – FLOR ROSA – FEIMIN, CANASTO RALEIGH R12 – CUP CAKE,PAR RUEDAS R 12 RALEIGH NENA LLANTA ROSA.  ','Bicicleta Rodado 12 Raleigh CupcakeIMG2.PNG','rojo',13000,4),(18,'Raleigh',12,'MXR','Colores: Blanco con Rojo, Blanco con Rojo y Azul, Blanco con Verde y Negro, cuadro ALUMINIO/ACERO, PIÑON 18T FULL BALL – SHUN FENG,RALEIGH RUEDAS ESTABILIZADORAS R16,PAR DE GUARDABARROS R16.    ','Bicicleta Rodado 12 Raleigh MXR.PNG','blanco',15000,4),(19,'Raleigh',12,'MXR','Colores: Blanco con Rojo, Blanco con Rojo y Azul, Blanco con Verde y Negro, cuadro ALUMINIO/ACERO, PIÑON 18T FULL BALL – SHUN FENG,RALEIGH RUEDAS ESTABILIZADORAS R16,PAR DE GUARDABARROS R16.    ','Bicicleta Rodado 12 Raleigh MXRIMG2.PNG','blanco',12500,4),(20,'Raleigh',12,'Cupcake','Cuadro: RALEIGH CUPCAKE, horquilla RALEIGH CUPCAKE,PIÑON 16T FULL BALL – SHUN FENG,PEDALES NENA 1/2 S/BOLILLAS – FLOR ROSA – FEIMIN, CANASTO RALEIGH R12 – CUP CAKE,PAR RUEDAS R 12 RALEIGH NENA LLANTA ROSA.  ','Bicicleta Rodado 12 Raleigh CupcakeIMG2.PNG','blanco',14100,4),(21,'Raleigh',29,'Mojave','Cuadro: ALUMINIO, horquilla con suspension, transmisión SHIMANO, CAMBIO SHIMANO ALTUS RD-M2000SGS – 9V , , PIÑON SHIMANO CS-HG200 – 9V – 11/34 – A CASSETTE , PLATO Y PALANCA SHIMANO FC-MT100 – S/CUBRECADENA – 40/30/22 – 170mm – NEGRO, CADENA SHIMANO DEORE – HG-53 – 9V, DISCO DE FRENO SHIMANO C/CENTER LOCK 160mm SM-RT10   ','Bicicleta Rodado 29 Raleigh Mojave 4.0IMG2.PNG','negro',35200,5),(22,'Specialized',29,'CHISEL COMP 2019','Viene armada con una mezcla de componentes Shimano Deore y XT con doble plato. Frenos de disco hidráulicos Deore MT500. A esto se suma la históricamente venerada horquilla RockShox Judy con hasta 100 mm de recorrido y unas llantas de aleación de 25 milímetros de ancho, optimizadas en peso y tracción.','Bicicleta Rodado 29 Specialized CHISEL COMP 2019IMG3.JPG','rojo',38200,5),(23,'Specialized',29,'EPIC HARDTAIL PRO 2020','Specialized Epic Hardtail Pro 2020: cuadro de carbono rígido, ligero y eficiente, horquilla RockShox SID Brain 29, transmisión SRAM X01 Eagle de 12 velocidades. Lo que necesitas para las subidas más fuertes.','Bicicleta Rodado 29 Specialized EPIC HARDTAIL PRO 2020.JPG','rosa-celeste',38500,5),(24,'Raleigh',29,'Mojave','Cuadro: ALUMINIO, horquilla con suspension, transmisión SHIMANO, CAMBIO SHIMANO ALTUS RD-M2000SGS – 9V , , PIÑON SHIMANO CS-HG200 – 9V – 11/34 – A CASSETTE , PLATO Y PALANCA SHIMANO FC-MT100 – S/CUBRECADENA – 40/30/22 – 170mm – NEGRO, CADENA SHIMANO DEORE – HG-53 – 9V, DISCO DE FRENO SHIMANO C/CENTER LOCK 160mm SM-RT10   ','Bicicleta Rodado 29 Raleigh Mojave 4.0IMG2.PNG','negro',35100,5),(25,'Specialized',29,'EPIC HARDTAIL PRO 2020','Specialized Epic Hardtail Pro 2020: cuadro de carbono rígido, ligero y eficiente, horquilla RockShox SID Brain 29, transmisión SRAM X01 Eagle de 12 velocidades. Lo que necesitas para las subidas más fuertes.','Bicicleta Rodado 29 Specialized EPIC HARDTAIL PRO 2020','negro',38500,5);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sale-buy`
--

DROP TABLE IF EXISTS `sale-buy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sale-buy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_producto_idx` (`id_producto`),
  CONSTRAINT `id_producto` FOREIGN KEY (`id_producto`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sale-buy`
--

LOCK TABLES `sale-buy` WRITE;
/*!40000 ALTER TABLE `sale-buy` DISABLE KEYS */;
/*!40000 ALTER TABLE `sale-buy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `fecha_de_nacimiento` date DEFAULT NULL,
  `imagen` varchar(45) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `domicilio` varchar(45) DEFAULT NULL,
  `rol` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'alejandro','guaymas','ale_guaymas@hotmail.com',NULL,'image-1603802346034.png','$2b$10$0RIM7wlJb9nOeoYdEUkHiOyp3Ek/z5W3Npxf6A3DR/CPgibXmHFxi',NULL,'');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-29 18:08:10
