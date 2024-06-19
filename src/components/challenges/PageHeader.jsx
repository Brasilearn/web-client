import React from 'react';

const PageHeader = () => {
	return (
		<header className="flex items-center justify-between py-4 px-6 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md">
			<h1 className="text-3xl font-bold">Tabla del Desafio</h1>
			<button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded shadow hover:bg-gray-100 transition-all">
				Acción
			</button>
		</header>
	);
};

export default PageHeader;
