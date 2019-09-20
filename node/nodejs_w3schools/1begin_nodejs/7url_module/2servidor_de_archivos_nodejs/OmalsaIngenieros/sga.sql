-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-12-2017 a las 23:47:06
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sga`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargos_laborales`
--

CREATE TABLE `cargos_laborales` (
  `codigo` varchar(10) NOT NULL,
  `codigo_tipo_cargo` varchar(10) NOT NULL,
  `Nombre` varchar(200) NOT NULL,
  `Descripcion` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cargos_laborales_tipo`
--

CREATE TABLE `cargos_laborales_tipo` (
  `codigo` varchar(10) NOT NULL,
  `Nombre` varchar(200) NOT NULL,
  `Descripcion` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `codigo` varchar(10) NOT NULL,
  `Rason_Social` varchar(200) NOT NULL,
  `DNI_RUC` varchar(15) NOT NULL,
  `Direccion` varchar(200) NOT NULL,
  `Telefonos` varchar(100) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `Representante` varchar(200) DEFAULT NULL,
  `Estado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `concurso`
--

CREATE TABLE `concurso` (
  `codigo` varchar(10) NOT NULL,
  `cod_Cliente` varchar(10) NOT NULL,
  `cod_TipoProyecto` varchar(10) NOT NULL,
  `cod_Usuario` varchar(10) NOT NULL,
  `Nombre` text NOT NULL,
  `Lugar` text,
  `direccion` varchar(200) DEFAULT NULL,
  `MontoReferencial` double NOT NULL,
  `Fecha_Presentacion` date NOT NULL,
  `Fecha_AperturaSobre` date NOT NULL,
  `Estado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contratos_pa`
--

CREATE TABLE `contratos_pa` (
  `codigo` varchar(10) NOT NULL,
  `cod_PA` varchar(10) NOT NULL,
  `cod_Cargo_Laboral` varchar(10) NOT NULL,
  `cod_Proyecto` varchar(10) NOT NULL,
  `cod_Usuario` varchar(10) NOT NULL,
  `Fecha_Inicio` date DEFAULT NULL,
  `Fecha_Final` date DEFAULT NULL,
  `Monto` double NOT NULL,
  `Estado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contratos_sc`
--

CREATE TABLE `contratos_sc` (
  `codigo` varchar(10) NOT NULL,
  `cod_CS` varchar(10) NOT NULL,
  `cod_Cargo_Laboral` varchar(10) NOT NULL,
  `cod_Proyecto` varchar(10) NOT NULL,
  `cod_Usuario` varchar(10) NOT NULL,
  `Fecha_Inicio` date DEFAULT NULL,
  `Fecha_Final` date DEFAULT NULL,
  `Monto` double NOT NULL,
  `Estado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documentos`
--

CREATE TABLE `documentos` (
  `codigo` varchar(10) NOT NULL,
  `cod_TipoDoc` varchar(10) NOT NULL,
  `cod_Proyecto` varchar(10) NOT NULL,
  `cod_Usuario` varchar(10) NOT NULL,
  `Descripcion` text,
  `Monto_Valor` double NOT NULL,
  `Oficina` varchar(100) DEFAULT NULL,
  `Num_Archivador` double DEFAULT NULL,
  `Estado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `documento_tipo`
--

CREATE TABLE `documento_tipo` (
  `codigo` varchar(10) NOT NULL,
  `Nombre` varchar(200) NOT NULL,
  `Descripcion` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_apoyo`
--

CREATE TABLE `personal_apoyo` (
  `codigo` varchar(10) NOT NULL,
  `cod_Profesion` varchar(10) NOT NULL,
  `Nombres` varchar(200) NOT NULL,
  `DNI` varchar(15) NOT NULL,
  `Direccion` text,
  `Telefonos` varchar(100) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `Fecha_graduacion` date DEFAULT NULL,
  `Rango_Profesional` varchar(50) DEFAULT NULL,
  `Id_Ingreso` varchar(50) DEFAULT NULL,
  `Pasword` varchar(10) DEFAULT NULL,
  `Estado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_apoyo_experiencia`
--

CREATE TABLE `personal_apoyo_experiencia` (
  `codigo` varchar(10) NOT NULL,
  `cod_PerosnalApoyo` varchar(10) NOT NULL,
  `cod_Cargo_Laboral` varchar(10) NOT NULL,
  `Fecha_Inicio` date DEFAULT NULL,
  `Fecha_Final` date DEFAULT NULL,
  `Obra_Entidad` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos`
--

CREATE TABLE `proyectos` (
  `codigo` varchar(10) NOT NULL,
  `Observaciones` text,
  `Fecha_Inicio` date DEFAULT NULL,
  `Fecha_Final` date DEFAULT NULL,
  `Monto_DelProyecto` double DEFAULT NULL,
  `Avace` double DEFAULT NULL,
  `Estado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecto_tipo`
--

CREATE TABLE `proyecto_tipo` (
  `codigo` varchar(10) NOT NULL,
  `Nombre` varchar(200) NOT NULL,
  `Descripcion` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `socio_clave`
--

CREATE TABLE `socio_clave` (
  `codigo` varchar(10) NOT NULL,
  `cod_Profesion` varchar(10) NOT NULL,
  `Nombres` varchar(200) NOT NULL,
  `DNI` varchar(15) NOT NULL,
  `Direccion` text,
  `Telefonos` varchar(100) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `Fecha_colegiatura` date DEFAULT NULL,
  `Rango_Profesional` varchar(50) DEFAULT NULL,
  `Id_Ingreso` varchar(50) DEFAULT NULL,
  `Pasword` varchar(10) DEFAULT NULL,
  `Estado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `socio_clave_experiencia`
--

CREATE TABLE `socio_clave_experiencia` (
  `codigo` varchar(10) NOT NULL,
  `cod_SocioClave` varchar(10) NOT NULL,
  `cod_Cargo_Laboral` varchar(10) NOT NULL,
  `Fecha_Inicio` date DEFAULT NULL,
  `Fecha_Final` date DEFAULT NULL,
  `Obra_Entidad` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `titulo_profesionales`
--

CREATE TABLE `titulo_profesionales` (
  `codigo` varchar(10) NOT NULL,
  `Nombre` varchar(200) NOT NULL,
  `Descripcion` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `titulo_tecnicos`
--

CREATE TABLE `titulo_tecnicos` (
  `codigo` varchar(10) NOT NULL,
  `Nombre` varchar(200) NOT NULL,
  `Descripcion` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `codigo` varchar(10) NOT NULL,
  `Nombres` varchar(200) NOT NULL,
  `Direccion` text,
  `DNI` varchar(15) NOT NULL,
  `Telefonos` varchar(100) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `Permiso` varchar(50) NOT NULL,
  `Id_Ingreso` varchar(50) DEFAULT NULL,
  `Pasword` varchar(10) DEFAULT NULL,
  `Estado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cargos_laborales`
--
ALTER TABLE `cargos_laborales`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `u_Nombre` (`Nombre`),
  ADD KEY `i_codigo` (`codigo`),
  ADD KEY `codigo_tipo_cargo` (`codigo_tipo_cargo`);

--
-- Indices de la tabla `cargos_laborales_tipo`
--
ALTER TABLE `cargos_laborales_tipo`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `u_Nombre` (`Nombre`),
  ADD KEY `i_codigo` (`codigo`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `u_DNI_RUC` (`DNI_RUC`),
  ADD KEY `i_codigo` (`codigo`);

--
-- Indices de la tabla `concurso`
--
ALTER TABLE `concurso`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `i_codigo` (`codigo`),
  ADD KEY `cod_Cliente` (`cod_Cliente`),
  ADD KEY `cod_TipoProyecto` (`cod_TipoProyecto`),
  ADD KEY `cod_Usuario` (`cod_Usuario`);

--
-- Indices de la tabla `contratos_pa`
--
ALTER TABLE `contratos_pa`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `cod_PA` (`cod_PA`),
  ADD KEY `cod_Cargo_Laboral` (`cod_Cargo_Laboral`),
  ADD KEY `cod_Proyecto` (`cod_Proyecto`),
  ADD KEY `cod_Usuario` (`cod_Usuario`);

--
-- Indices de la tabla `contratos_sc`
--
ALTER TABLE `contratos_sc`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `cod_CS` (`cod_CS`),
  ADD KEY `cod_Cargo_Laboral` (`cod_Cargo_Laboral`),
  ADD KEY `cod_Proyecto` (`cod_Proyecto`),
  ADD KEY `cod_Usuario` (`cod_Usuario`);

--
-- Indices de la tabla `documentos`
--
ALTER TABLE `documentos`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `cod_TipoDoc` (`cod_TipoDoc`),
  ADD KEY `cod_Proyecto` (`cod_Proyecto`),
  ADD KEY `cod_Usuario` (`cod_Usuario`);

--
-- Indices de la tabla `documento_tipo`
--
ALTER TABLE `documento_tipo`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `u_Nombre` (`Nombre`),
  ADD KEY `i_codigo` (`codigo`);

--
-- Indices de la tabla `personal_apoyo`
--
ALTER TABLE `personal_apoyo`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `u_Id_Ingreso` (`Id_Ingreso`),
  ADD KEY `cod_Profesion` (`cod_Profesion`);

--
-- Indices de la tabla `personal_apoyo_experiencia`
--
ALTER TABLE `personal_apoyo_experiencia`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `cod_PerosnalApoyo` (`cod_PerosnalApoyo`),
  ADD KEY `cod_Cargo_Laboral` (`cod_Cargo_Laboral`);

--
-- Indices de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `proyecto_tipo`
--
ALTER TABLE `proyecto_tipo`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `u_Nombre` (`Nombre`),
  ADD KEY `i_codigo` (`codigo`);

--
-- Indices de la tabla `socio_clave`
--
ALTER TABLE `socio_clave`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `u_Id_Ingreso` (`Id_Ingreso`),
  ADD KEY `cod_Profesion` (`cod_Profesion`);

--
-- Indices de la tabla `socio_clave_experiencia`
--
ALTER TABLE `socio_clave_experiencia`
  ADD PRIMARY KEY (`codigo`),
  ADD KEY `cod_SocioClave` (`cod_SocioClave`),
  ADD KEY `cod_Cargo_Laboral` (`cod_Cargo_Laboral`);

--
-- Indices de la tabla `titulo_profesionales`
--
ALTER TABLE `titulo_profesionales`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `u_Nombre` (`Nombre`),
  ADD KEY `i_codigo` (`codigo`);

--
-- Indices de la tabla `titulo_tecnicos`
--
ALTER TABLE `titulo_tecnicos`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `u_Nombre` (`Nombre`),
  ADD KEY `i_codigo` (`codigo`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `u_DNI` (`DNI`),
  ADD UNIQUE KEY `u_Id_Ingreso` (`Id_Ingreso`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cargos_laborales`
--
ALTER TABLE `cargos_laborales`
  ADD CONSTRAINT `cargos_laborales_ibfk_1` FOREIGN KEY (`codigo_tipo_cargo`) REFERENCES `cargos_laborales_tipo` (`codigo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `concurso`
--
ALTER TABLE `concurso`
  ADD CONSTRAINT `concurso_ibfk_1` FOREIGN KEY (`cod_Cliente`) REFERENCES `cliente` (`codigo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `concurso_ibfk_2` FOREIGN KEY (`cod_TipoProyecto`) REFERENCES `proyecto_tipo` (`codigo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `concurso_ibfk_3` FOREIGN KEY (`cod_Usuario`) REFERENCES `usuarios` (`codigo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `contratos_pa`
--
ALTER TABLE `contratos_pa`
  ADD CONSTRAINT `contratos_pa_ibfk_1` FOREIGN KEY (`cod_PA`) REFERENCES `personal_apoyo` (`codigo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contratos_pa_ibfk_2` FOREIGN KEY (`cod_Cargo_Laboral`) REFERENCES `cargos_laborales` (`codigo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contratos_pa_ibfk_3` FOREIGN KEY (`cod_Proyecto`) REFERENCES `proyectos` (`codigo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contratos_pa_ibfk_4` FOREIGN KEY (`cod_Usuario`) REFERENCES `usuarios` (`codigo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `contratos_sc`
--
ALTER TABLE `contratos_sc`
  ADD CONSTRAINT `contratos_sc_ibfk_1` FOREIGN KEY (`cod_CS`) REFERENCES `socio_clave` (`codigo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contratos_sc_ibfk_2` FOREIGN KEY (`cod_Cargo_Laboral`) REFERENCES `cargos_laborales` (`codigo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contratos_sc_ibfk_3` FOREIGN KEY (`cod_Proyecto`) REFERENCES `proyectos` (`codigo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `contratos_sc_ibfk_4` FOREIGN KEY (`cod_Usuario`) REFERENCES `usuarios` (`codigo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `documentos`
--
ALTER TABLE `documentos`
  ADD CONSTRAINT `documentos_ibfk_1` FOREIGN KEY (`cod_TipoDoc`) REFERENCES `documento_tipo` (`codigo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `documentos_ibfk_2` FOREIGN KEY (`cod_Proyecto`) REFERENCES `proyectos` (`codigo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `documentos_ibfk_3` FOREIGN KEY (`cod_Usuario`) REFERENCES `usuarios` (`codigo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `personal_apoyo`
--
ALTER TABLE `personal_apoyo`
  ADD CONSTRAINT `personal_apoyo_ibfk_1` FOREIGN KEY (`cod_Profesion`) REFERENCES `titulo_tecnicos` (`codigo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `personal_apoyo_experiencia`
--
ALTER TABLE `personal_apoyo_experiencia`
  ADD CONSTRAINT `personal_apoyo_experiencia_ibfk_1` FOREIGN KEY (`cod_PerosnalApoyo`) REFERENCES `personal_apoyo` (`codigo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `personal_apoyo_experiencia_ibfk_2` FOREIGN KEY (`cod_Cargo_Laboral`) REFERENCES `cargos_laborales` (`codigo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD CONSTRAINT `proyectos_ibfk_1` FOREIGN KEY (`codigo`) REFERENCES `concurso` (`codigo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `socio_clave`
--
ALTER TABLE `socio_clave`
  ADD CONSTRAINT `socio_clave_ibfk_1` FOREIGN KEY (`cod_Profesion`) REFERENCES `titulo_profesionales` (`codigo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `socio_clave_experiencia`
--
ALTER TABLE `socio_clave_experiencia`
  ADD CONSTRAINT `socio_clave_experiencia_ibfk_1` FOREIGN KEY (`cod_SocioClave`) REFERENCES `socio_clave` (`codigo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `socio_clave_experiencia_ibfk_2` FOREIGN KEY (`cod_Cargo_Laboral`) REFERENCES `cargos_laborales` (`codigo`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
