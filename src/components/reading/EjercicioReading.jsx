'use client';
import { Image } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';

function EjercicioReading({ excercice, onResponse, topic_slug}) {
	const [seleccion, setSeleccion] = useState(null);
	const [options, setOptions] = useState([]);
	const [questionText, setQuestionText] = useState('');
	const [questionQuestion, setQuestionQuestion] = useState('');

	const randomValue = Math.floor(Math.random() * 10) + 1;
	const imageUrl = `https://brasilearn-api-gateway.fly.dev/media/images/${topic_slug}/${randomValue}.webp`
	

	useEffect(() => {
		setSeleccion(null); // Reinicia a seleção quando muda o exercício
		if (excercice && typeof excercice.options === 'string') {
			// Faz o parsing de options se for uma string
			try {
				const parsedOptions = JSON.parse(excercice.options);
				setOptions(parsedOptions);
			} catch (error) {
				console.error('Erro ao fazer o parsing das opções:', error);
				setOptions([]);
			}
		} else {
			setOptions(excercice?.options || []);
		}

		if (excercice && typeof excercice.question === 'string') {
			// Faz o parsing de question se for uma string
			try {
				const parsedQuestion = JSON.parse(excercice.question);
				setQuestionText(parsedQuestion.text);
				setQuestionQuestion(parsedQuestion.question);
			} catch (error) {
				console.error('Erro ao fazer o parsing da pergunta:', error);
				setQuestionText('');
				setQuestionQuestion('');
			}
		} else {
			setQuestionText(excercice?.question?.text || '');
			setQuestionQuestion(excercice?.question?.question || '');
		}
	}, [excercice]);

	const handleSeleccion = (option) => {
		setSeleccion(option);
		setTimeout(() => {
			onResponse(option === options[excercice.answer]);
		}, 1000); // Adiciona um atraso para mostrar a resposta correta antes de passar para o próximo exercício
	};

	return (
		<div className="my-4 p-4 border-2 rounded-lg shadow-lg text-center bg-white border-gray-300">
			<div className="flex justify-between items-center">
				<div className="w-0.4 pr-4 text-lg font-semibold text-gray-700 text-justify">
					<p>{questionText}</p>
					<p>{questionQuestion}</p>
				</div>
				<div
					className=" mb-4 p-4 border-2 rounded-lg shadow-inner bg-gray-100 border-gray-300"
					style={{ maxWidth: '200px', height: '200px' }}>
					<Image src={imageUrl} alt={questionQuestion} className="h-full w-full object-cover rounded-lg" />
				</div>
			</div>
			<div className="flex justify-around flex-wrap">
				{options.map((option, index) => (
					<button
						key={index}
						onClick={() => handleSeleccion(option)}
						className={`flex-1 mx-2 my-1 px-4 py-2 rounded-lg transition-all shadow-lg ${
							seleccion
								? option === options[excercice.answer]
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

export default EjercicioReading;
