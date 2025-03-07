-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 07, 2025 at 09:57 AM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dhiraj`
--

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
CREATE TABLE IF NOT EXISTS `feedback` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `rating` int(11) NOT NULL,
  `comment` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`id`, `name`, `email`, `rating`, `comment`) VALUES
(1, 'neav', 'neav@gmail.com', 4, 'neeav'),
(2, 'manya', 'manya@gmail.com', 4, 'bad'),
(3, 'janesh', 'dhiru@gmail.com', 4, 'good'),
(4, 'neav1', 'neavf@gmail.coom', 5, '123'),
(5, 'nirvan', 'nirvan@gmial.com', 1, 'bad '),
(6, 'neavg', 'nirvan@gmial.com', 2, 'neav'),
(7, 'gaurav', 'gaurav@gmail.com', 3, 'neav'),
(8, 'puja', 'puja@gmail.com', 2, 'bad'),
(9, 'somil talreja', 'somil@gmail.com', 3, 'Hello yes');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
CREATE TABLE IF NOT EXISTS `login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL,
  `role` enum('user','admin') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `name`, `email`, `password`, `role`) VALUES
(1, 'neav', 'neav04020@gmail.com', '123', 'user'),
(2, 'dhiraj', 'dhiru@gmail.com', '529', 'admin'),
(3, 'janesh', 'janesh@gmail.com', '123', 'user'),
(4, 'manya', 'manya@gmail.com', '526', 'user'),
(5, 'somil', 'somil@gmail.com', '123', 'user'),
(6, 'alakh', 'neav1@gmail.com', 'neav', 'user'),
(7, 'parth ', 'parth@gmail.com', '2006', 'user'),
(8, 'hey', 'hey@gmail.com', '123', 'user');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
