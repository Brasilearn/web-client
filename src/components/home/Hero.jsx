"use client"
import React from 'react';
import { Button, Link } from '@nextui-org/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Hero(props) {
	const topics = [
		'Saludos y Presentaciones',
		'Numeros y Fechas',
		'Familia y Amigos',
		'En la Ciudad',
		'Comida y Bebida',
	];
	const levels = ['Nivel 1', 'Nivel 2', 'Nivel 3', 'Nivel 4', 'Nivel 5'];
	const categories = ['Pronunciación', 'Vocabulario', 'Escucha'];

	const topics_lusg = {
		'Saludos y Presentaciones': 'saludos-presentaciones',
		'Numeros y Fechas': 'numeros-fechas',
		'Familia y Amigos': 'familia-amigos',
		'En la Ciudad': 'ciudad',
		'Comida y Bebida': 'comida-bebida',
	};

	const levels_slug = {
		'Nivel 1': '1',
		'Nivel 2': '2',
		'Nivel 3': '3',
		'Nivel 4': '4',
		'Nivel 5': '5',
	};

	const categories_slug = {
		"Pronunciación": 'speaking',
		"Vocabulario": 'vocabulary',
		"Escucha": 'listening',
		"Lectura": 'reading',
	};

	const [selectTopic, setSelectedTitle] = React.useState(topics[0]);
	const [selectedLevel, setSelectedLevel] = React.useState(levels[0]);
	const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);

	const handlePrevious = (items, setSelected, selected) => {
		const currentIndex = items.indexOf(selected);
		const newIndex = (currentIndex - 1 + items.length) % items.length;
		setSelected(items[newIndex]);
	};

	const handleNext = (items, setSelected, selected) => {
		const currentIndex = items.indexOf(selected);
		const newIndex = (currentIndex + 1) % items.length;
		setSelected(items[newIndex]);
	};

	return (
		<section {...props}>
			<div className="absolute inset-0 z-0 bg-black/30 "></div>
			<div className="relative z-10 max-w-screen-lg mx-auto h-full flex flex-col gap-4 items-center justify-center">
				<h1 className="text-2xl md:text-4xl font-bold text-white">Aprende Português a tu ritmo</h1>
				<div className="flex flex-col items-center gap-4 p-2 max-w-[340px] w-full text-blue-500">
					<div className="group flex w-full items-center space-x-2">
						<Button onClick={() => handlePrevious(topics, setSelectedTitle, selectTopic)} color="primary" isIconOnly>
							<FaChevronLeft />
						</Button>
						<input
							type="text"
							value={selectTopic}
							readOnly
							className="flex-1 text-center text-sm h-9 rounded-md focus:outline-none bg-white group-hover:animate-pulse"
						/>
						<Button onClick={() => handleNext(topics, setSelectedTitle, selectTopic)} color="primary" isIconOnly>
							<FaChevronRight />
						</Button>
					</div>
					<div className="group flex w-full items-center space-x-2">
						<Button onClick={() => handlePrevious(levels, setSelectedLevel, selectedLevel)} color="primary" isIconOnly>
							<FaChevronLeft />
						</Button>
						<input
							type="text"
							value={selectedLevel}
							readOnly
							className="flex-1 text-center text-sm h-9 rounded-md focus:outline-none bg-white group-hover:animate-pulse"
						/>
						<Button onClick={() => handleNext(levels, setSelectedLevel, selectedLevel)} color="primary" isIconOnly>
							<FaChevronRight />
						</Button>
					</div>
					<div className="group flex w-full items-center space-x-2">
						<Button
							onClick={() => handlePrevious(categories, setSelectedCategory, selectedCategory)}
							color="primary"
							isIconOnly>
							<FaChevronLeft />
						</Button>
						<input
							type="text"
							value={selectedCategory}
							readOnly
							className="flex-1 text-center text-sm h-9 rounded-md focus:outline-none bg-white group-hover:animate-pulse"
						/>
						<Button
							onClick={() => handleNext(categories, setSelectedCategory, selectedCategory)}
							color="primary"
							isIconOnly>
							<FaChevronRight />
						</Button>
					</div>
				</div>
				<Button
					as={Link}
					href={`/${topics_lusg[selectTopic]}/${levels_slug[selectedLevel]}/${categories_slug[selectedCategory]}`}
					color="primary"
					size="lg"
					className="">
					Comienza Ahora
				</Button>
			</div>
		</section>
	);
}

export default Hero;
