import React, { useState, useEffect } from 'react';
import { Card, Button, Progress } from '@nextui-org/react';
import { FaPlay, FaRedo } from 'react-icons/fa';

function PhrasePlayer({ phrasePortuguese, phraseSpanish, onPlay, onRepeat }) {
	const [isPlaying, setIsPlaying] = useState(false);
	const [value, setValue] = useState(0);

	useEffect(() => {
		let interval;
		if (isPlaying) {
			interval = setInterval(() => {
				setValue((v) => (v >= 100 ? 0 : v + 10));
			}, 300); // Incrementa el progreso cada 300ms
		} else {
			setValue(0);
		}

		return () => clearInterval(interval);
	}, [isPlaying]);

	const handlePlay = () => {
		setIsPlaying(true);
		onPlay();
		setTimeout(() => setIsPlaying(false), 3000); // Simula 3 segundos de reproducción
	};

	const handleRepeat = () => {
		setIsPlaying(true);
		onRepeat();
		setTimeout(() => setIsPlaying(false), 3000); // Simula 3 segundos de repetición
	};

	return (
		<Card className="text-center px-4 py-8">
			<h2 className="text-blue-800 mb-2 text-3xl font-semibold">{phrasePortuguese}</h2>
			<h3 className="text-gray-600 mb-4 text-lg">{phraseSpanish}</h3>
			<div className="flex justify-center items-center mb-4">
				<Progress
					aria-label="Progreso de reproducción"
					size="md"
					value={value}
					color="success"
					showValueLabel={true}
					className="max-w-md"
				/>
			</div>
			<div>
				<Button
					onClick={handlePlay}
					className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 transition duration-300 mr-4">
					<FaPlay className="inline-block mr-2" /> Escuchar
				</Button>
				<Button
					onClick={handleRepeat}
					className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full hover:bg-yellow-700 transition duration-300">
					<FaRedo className="inline-block mr-2" /> Repetir
				</Button>
			</div>
		</Card>
	);
}

export default PhrasePlayer;
