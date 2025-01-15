-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 15 Jan 2025 pada 09.27
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_alumni`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `alumnis`
--

CREATE TABLE `alumnis` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `graduation_year` int(11) DEFAULT NULL,
  `status` enum('employed','unemployed','fresh-graduate') DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `alumnis`
--

INSERT INTO `alumnis` (`id`, `name`, `phone`, `address`, `graduation_year`, `status`, `company_name`, `position`) VALUES
(1, 'Ahmad Fauzi', '081234567890', 'Jl. Merpati No. 10, Jakarta', 2020, 'employed', 'TechIndo', 'Programmer'),
(2, 'Siti Aisyah', '081298765432', 'Jl. Kenari No. 23, Bandung', 2018, 'employed', 'MarketID', 'Manajer Pemasaran'),
(3, 'Rina Kusuma', '081355512345', 'Jl. Cendrawasih No. 45, Surabaya', 2023, 'fresh-graduate', NULL, NULL),
(4, 'Budi Santoso', '081399987654', 'Jl. Melati No. 11, Yogyakarta', 2019, 'unemployed', NULL, NULL),
(5, 'Dewi Lestari', '081555555555', 'Jl. Mawar No. 12, Semarang', 2023, 'fresh-graduate', NULL, NULL),
(6, 'Eko Prasetyo', '081444444444', 'Jl. Anggrek No. 34, Medan', 2017, 'employed', 'SehatBersama', 'Perawat'),
(7, 'Faisal Rahman', '081333333333', 'Jl. Cemara No. 78, Makassar', 2015, 'employed', 'BangunNusantara', 'Arsitek'),
(8, 'Lia Novita', '081222222222', 'Jl. Flamboyan No. 90, Palembang', 2016, 'unemployed', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `alumnis`
--
ALTER TABLE `alumnis`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `alumnis`
--
ALTER TABLE `alumnis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
