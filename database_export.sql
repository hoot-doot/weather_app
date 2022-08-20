-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (arm64)
--
-- Host: localhost    Database: weather
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `api`
--

DROP TABLE IF EXISTS `api`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `api` (
  `lat` varchar(45) NOT NULL,
  `lon` varchar(45) NOT NULL,
  `currentTime` varchar(45) DEFAULT NULL,
  `main` varchar(45) DEFAULT NULL,
  `desc` varchar(45) DEFAULT NULL,
  `temp` varchar(45) DEFAULT NULL,
  `pressure` varchar(45) DEFAULT NULL,
  `humidity` varchar(45) DEFAULT NULL,
  `feels_like` varchar(45) DEFAULT NULL,
  `sunrise` varchar(45) DEFAULT NULL,
  `wind_gust` varchar(45) DEFAULT NULL,
  `sunset` varchar(45) DEFAULT NULL,
  `wind_speed` varchar(45) DEFAULT NULL,
  `wind_deg` varchar(45) DEFAULT NULL,
  `dew_point` varchar(45) DEFAULT NULL,
  `visibility` varchar(45) DEFAULT NULL,
  `hour0` varchar(45) DEFAULT NULL,
  `hour1` varchar(45) DEFAULT NULL,
  `hour2` varchar(45) DEFAULT NULL,
  `hour3` varchar(45) DEFAULT NULL,
  `hour4` varchar(45) DEFAULT NULL,
  `hour5` varchar(45) DEFAULT NULL,
  `tomorrowTemp` varchar(45) DEFAULT NULL,
  `afterTemp` varchar(45) DEFAULT NULL,
  `d_tomorrow_img` varchar(45) DEFAULT NULL,
  `d_after_img` varchar(45) DEFAULT NULL,
  `hourly0_img` varchar(45) DEFAULT NULL,
  `hourly1_img` varchar(45) DEFAULT NULL,
  `hourly2_img` varchar(45) DEFAULT NULL,
  `hourly3_img` varchar(45) DEFAULT NULL,
  `hourly4_img` varchar(45) DEFAULT NULL,
  `hourly5_img` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`lat`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api`
--

LOCK TABLES `api` WRITE;
/*!40000 ALTER TABLE `api` DISABLE KEYS */;
INSERT INTO `api` VALUES ('29.3088','80.5911','1660213274','Clouds','broken clouds','26','1002','48','26.1','02:03','1.62','15:22','1.82','228','14.24','10000','26','26','25','23','20','18','24','25','10d','10d','04d','04d','04d','03d','03n','02n');
/*!40000 ALTER TABLE `api` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-11 16:25:13
