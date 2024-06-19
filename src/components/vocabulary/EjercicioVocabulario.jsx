'use client';
import { Image } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';

function EjercicioVocabulario({ excercice, onResponse }) {
	const [seleccion, setSeleccion] = useState(null);

	useEffect(() => {
		setSeleccion(null); // Reinicia la selección cuando cambia el ejercicio
	}, [excercice]);

	const handleSeleccion = (option) => {
		setSeleccion(option);
		setTimeout(() => {
			onResponse(option === excercice.options[excercice.answer]);
		}, 1000); // Agrega un retraso para mostrar la respuesta correcta antes de pasar al siguiente ejercicio
	};

	return (
		<div className="my-4 p-4 border-2 rounded-lg shadow-lg text-center bg-white border-gray-300">
			<p className="text-lg font-semibold text-gray-700">{excercice?.ask}</p>
			<div
				className="mb-4 mx-auto p-4 border-2 rounded-lg shadow-inner bg-gray-100 border-gray-300"
				style={{ maxWidth: '200px', height: '200px' }}>
				<Image src={excercice?.image} alt={excercice?.ask} className="h-full w-full object-cover rounded-lg" />
			</div>
			<div className="flex justify-around flex-wrap">
				{excercice &&
					excercice.options.map((option, index) => (
						<button
							key={index}
							onClick={() => handleSeleccion(option)}
							className={`flex-1 mx-2 my-1 px-4 py-2 rounded-lg transition-all shadow-lg ${
								seleccion
									? option === excercice.options[excercice.answer]
										? 'bg-green-500 text-white'
										: option === seleccion
										? 'bg-red-500 text-white'
										: 'bg-gray-200 text-gray-700'
									: 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white'
							} text-lg font-semibold`}
							disabled={seleccion}
							style={{
								boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
								transition: 'transform 0.3s, box-shadow 0.3s',
							}}>
							{option}
						</button>
					))}
			</div>
		</div>
	);
}

export default EjercicioVocabulario;
