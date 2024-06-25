'use client';
import React, { useState, useEffect } from 'react';
import { Button, Link } from '@nextui-org/react';
import { filter_levels, getLevels, getTopic, return_questions } from '@/services/topicFetching';
import { usePathname } from 'next/navigation';

import BarraDeProgreso from '@/components/vocabulary/BarraDeProgreso';
import EjercicioReading from '@/components/reading/EjercicioReading';
import Vidas from '@/components/vocabulary/Vidas';
import TopicLevelHeader from '@/components/levels/TopicLevelHeader';
import BreadCrumbs from '@/components/common/Breadcrumbs';
import { get_questions } from '@/services/get_questions';

function ReadingPage() {
    const path = usePathname();
	const pathSegments = path.split('/'); // Divide a URL em segmentos
	const params = {
		topic_slug: pathSegments[1],
		level_dif: parseInt(pathSegments[2], 10),
		quest_type: pathSegments[3]
	};

    const [topic_title, setTopicTitle] = useState(null);
	const [topic, setTopic] = useState(null);
	const [level_dif, setLevelDif] = useState(params.level_dif);
	const [readings, setReadings] = useState([]);
	const [progreso, setProgreso] = useState(0);
	const [lifes, setVidas] = useState(3);
	const [exerciseIndex, setExcerciseIndex] = useState(0);
	const [finish, setFinish] = useState(false);
    const [levels_list, setLevels] = useState([]);
    const [level_id, setLevelID] = useState(null);

	useEffect(() => {
		async function fetchData() {
			const { pregs, topicTitle, levelId } = await return_questions(params.topic_slug, params.level_dif, params.quest_type);
            setReadings(pregs);
			setTopicTitle(topicTitle);
			setLevelID(levelId);
		}
		fetchData();
	}, [params.topic_slug, params.level_dif, params.quest_type]);
    console.log(readings)
	// useEffect(() => {
	// 	console.log(levels_list);
	// 	console.log(level_id);
    //     console.log(readings);
	// }, [levels_list, level_id, readings]);

	const handleResponse = (isCorrect) => {
		setProgreso(progreso + 100 / readings.length); // Incrementa o progresso
		if (!isCorrect) {
			setVidas(lifes - 1); // Decrementa uma vida por cada resposta incorreta
		}
		if (exerciseIndex < readings.length - 1) {
			setExcerciseIndex(exerciseIndex + 1);
		} else {
			setFinish(true); // Marca como finalizado quando se completam todos os exercícios
		}
	};

	const reset = () => {
		setProgreso(0);
		setVidas(3);
		setExcerciseIndex(0);
		setFinish(false);
	};

	return (
		<div className="bg-gradient-to-r from-blue-100 to-gray-100">
			<div className="max-w-screen-lg mx-auto px-6 py-6">
				<div className="flex flex-col gap-4">
					<BreadCrumbs />
					{<TopicLevelHeader title={topic_title} chip={[exerciseIndex + 1, '/', readings.length]} />}
				</div>
				<BarraDeProgreso progreso={progreso} />
				<Vidas vidas={lifes} />
				{finish ? (
					<div className="text-center text-blue-500 font-bold space-y-4">
						<p className="text-2xl">¡Felicidades! Has completado todos los ejercicios.</p>
						<div className="flex items-center justify-center gap-4 mt-2">
							<Button as={Link} href={`/${topic?.slug}/${level_id}/results`} color="primary" className="px-4 py-2">
								Ver Resultados
							</Button>
							<Button onClick={reset} className="px-4 py-2 ">
								Volver a Intentar
							</Button>
						</div>
					</div>
				) : lifes > 0 ? (
					<EjercicioReading excercice={readings && readings[exerciseIndex]} onResponse={handleResponse} />
				) : (
					<div className="text-center text-red-500 text-2xl font-bold space-y-4">
						<p>¡Has perdido todas tus vidas!</p>
						<button
							onClick={reset}
							className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-700 transition-all">
							Volver a Intentar
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default ReadingPage;
