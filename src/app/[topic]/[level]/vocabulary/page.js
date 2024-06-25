'use client';
import React, { useState } from 'react';
import { Button, Link } from '@nextui-org/react';
import { filter_levels, getLevels, getTopic, return_questions } from '@/services/topicFetching';
import { usePathname } from 'next/navigation';

import BarraDeProgreso from '@/components/vocabulary/BarraDeProgreso';
import EjercicioVocabulario from '@/components/vocabulary/EjercicioVocabulario';
import Vidas from '@/components/vocabulary/Vidas';
import TopicLevelHeader from '@/components/levels/TopicLevelHeader';

import BreadCrumbs from '@/components/common/Breadcrumbs';
import { get_questions } from '@/services/get_questions';

function VocabularyPage() {
	const path = usePathname();
	const pathSegments = path.split('/'); // Divide a URL em segmentos
	const params = {
		topic_slug: pathSegments[1],
		level_dif: parseInt(pathSegments[2], 10),
		quest_type: pathSegments[3]
	};

	const [topic_title, setTopicTitle] = useState(null);
	const [level, setLevel] = useState([]);
	const [vocabulary, setVocabulary] = useState([]);
	const [progreso, setProgreso] = useState(0);
	const [lifes, setVidas] = useState(3);
	const [exerciseIndex, setExcerciseIndex] = useState(0);
	const [finish, setFinish] = useState(false);
	const [level_id, setLevelID] = useState(null);

	React.useEffect(() => {
		async function fetchData() {
			const { pregs, topicTitle, levelId } = await return_questions(params.topic_slug, params.level_dif, params.quest_type);
            setVocabulary(pregs);
			setTopicTitle(topicTitle);
			setLevelID(levelId);
		}
		fetchData();
	}, [params.topic_slug, params.level_dif, params.quest_type]);

	

	const handleResponse = (isCorrect) => {
		setProgreso(progreso + 100 / vocabulary.length); // Incrementa o progresso
		if (!isCorrect) {
			setVidas(lifes - 1); // Decrementa uma vida por cada resposta incorreta
		}
		if (exerciseIndex < vocabulary.length - 1) {
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
					{ <TopicLevelHeader title={topic_title} chip={[exerciseIndex + 1, '/', vocabulary.length]} />}
				</div>
				<BarraDeProgreso progreso={progreso} />
				<Vidas vidas={lifes} />
				{finish ? (
					<div className="text-center text-blue-500 font-bold space-y-4">
						<p className="text-2xl">¡Felicidades! Has completado todos los ejercicios.</p>
						<div className="flex items-center justify-center gap-4 mt-2">
							<Button as={Link} href={`/${topic?.slug}/${level?.id}/results`} color="primary" className="px-4 py-2">
								Ver Resultados
							</Button>
							<Button onClick={reset} className="px-4 py-2 ">
								Volver a Intentar
							</Button>
						</div>
					</div>
				) : lifes > 0 ? (
					<EjercicioVocabulario excercice={vocabulary && vocabulary[exerciseIndex]} onResponse={handleResponse} topic_slug={params.topic_slug} />
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

export default VocabularyPage;
