'use client'
import React, { useState } from 'react';

const FilterOptions = ({ onSearch, onFilter, onReset }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [filterScore, setFilterScore] = useState('');
	const [filterStatus, setFilterStatus] = useState('');
	const [showFilters, setShowFilters] = useState(false);

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
		onSearch(e.target.value);
	};

	const handleFilterScoreChange = (e) => {
		setFilterScore(e.target.value);
		onFilter(e.target.value, filterStatus);
	};

	const handleFilterStatusChange = (e) => {
		setFilterStatus(e.target.value);
		onFilter(filterScore, e.target.value);
	};

	const toggleFilters = () => {
		setShowFilters(!showFilters);
	};

	return (
		<div className="mb-4">
			<div className="flex gap-4 mb-2">
				<button
					onClick={toggleFilters}
					className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition-all duration-300">
					Filtrar por
				</button>
				<button
					onClick={onReset}
					className="bg-gray-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-700 transition-all duration-300">
					Restaurar clasificación
				</button>
			</div>
			{showFilters && (
				<div className="flex flex-col md:flex-row gap-4">
					<input
						type="text"
						placeholder="Buscar por nombre"
						value={searchTerm}
						onChange={handleSearchChange}
						className="p-2 border border-gray-300 rounded-md flex-grow"
					/>
					<input
						type="number"
						placeholder="Filtrar por puntuación"
						value={filterScore}
						onChange={handleFilterScoreChange}
						className="p-2 border border-gray-300 rounded-md flex-grow"
					/>
					<select
						value={filterStatus}
						onChange={handleFilterStatusChange}
						className="p-2 border border-gray-300 rounded-md flex-grow">
						<option value="">Filtrar por estado</option>
						<option value="Completado">Completado</option>
						<option value="Pendiente">Pendiente</option>
						<option value="Suspendido">Suspendido</option>
					</select>
				</div>
			)}
		</div>
	);
};

export default FilterOptions;
