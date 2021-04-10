-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 10, 2021 at 09:54 AM
-- Server version: 8.0.21
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pms`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullname` text NOT NULL,
  `email` text NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `attendance` int NOT NULL,
  `late_coming` tinyint(1) NOT NULL,
  `reason` text NOT NULL,
  `behaviour` int NOT NULL,
  `work` int NOT NULL,
  `culture` int NOT NULL,
  `role` enum('HR','Employer','Manager','') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `email`, `username`, `password`, `attendance`, `late_coming`, `reason`, `behaviour`, `work`, `culture`, `role`) VALUES
(19, 'Miss Palak', 'palak@gmail.com', 'palak@1234', '$2b$08$nleDIHRefZfJsJSv4ymURumbpsvqQMVNLyR6XokzB3P0KHL8N2dMu', 0, 0, '', 0, 0, 0, 'Manager'),
(15, 'Disha Nadkarni', 'disha@gmail.com', 'disha1234', '$2b$08$P37zYJngUcH.Yz7fQOXgOuDJTNFA/BznSXM.ma4Fg0YpfGO/DuU76', 2, -5, '                                                                                        Good Team Spirit... Love Working ..                                           \r\n                                        \r\n                                        \r\n                                        ', 3, 1, 2, 'Employer'),
(18, 'Miss Rasika', 'rasika@gmail.com', 'rasika1234', '$2b$08$LlSOYBBE//Lsn4Hz/N380uPzNSWHPWBw1iWeSZY5DKbKHIkBrEC.G', 0, 0, '', 0, 0, 0, 'HR'),
(14, 'Dipanshu Nadkarni', 'dipanshu@gmail.com', 'dipanshu1234', '$2b$08$5KlhtCgTUUrS7XiqYEiioOpp2u616LDZV5vTuNohGLlQd51YDeBoq', 1, -3, '                                            Good Knowledge, Happy to work                                     \r\n                                        \r\n                                        ', 1, 3, 3, 'Employer'),
(10, 'Shashank Tripathi', 'shashank@gmail.com', 'shashank1234', '$2b$08$PTlVSdIfkYg24SWUOhlx1O960g0XeVC7v6yrDhmp1yhS9F8Vln5i6', 3, -4, '        Nice attitude towards people                                    \r\n                                        ', 2, 3, 2, 'Employer'),
(11, 'Shubhada Nadkarni', 'shubhadanadkarni@gmail.com', 'shubhada1234', '$2b$08$3ONIDHyUmDnvpYiauGgpm.pTZlfIM2kfdac1ugIZTdkQx3Lqb8SqO', 3, -5, '                                                      Love culture for working                                  \r\n                                        \r\n                                        ', 2, 2, 2, 'Employer'),
(12, 'Dinesh Nadkarni', 'dineshnadkarni@gmail.com', 'dinesh1234', '$2b$08$eWjSxMJrFLyhhlfWSGCaKuu3u3j7F3DOC9jpBrRaRDtxSKu1Op24W', 0, -4, '                                                                                        Great Team Work and Attitude towards People                                            \r\n                                        \r\n                                        \r\n                                        ', 0, 0, 0, 'Employer'),
(13, 'raj ankush', 'raj@gmail.com', 'raj1234', '$2b$08$yUVFInS/L4Yih8HuDhdXV.FcEkWA9KAVyyoYXqp5jOP089SVVC432', 3, -4, 'Good To have you in our team                                            \r\n                                        ', 2, 2, 2, 'Employer');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
