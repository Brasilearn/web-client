import LearningOptionCard from '@/components/levels/LearningOptionCard';
import { FaMicrophone, FaBook, FaHeadphones, FaBookReader } from 'react-icons/fa';

function LearningOptionsGrid(props) {
	const options = [
		{
			title: 'Pronunciación',
			description: 'Mejora tu pronunciación con ejercicios de habla.',
			Icon: FaMicrophone,
			path: 'speaking',
		},
		{
			title: 'Vocabulario',
			description: 'Expande tu vocabulario con ejercicios de palabras.',
			Icon: FaBook,
			path: 'vocabulary',
		},
		{
			title: 'Escucha',
			description: 'Practica la comprensión auditiva con audios.',
			Icon: FaHeadphones,
			path: 'listening',
		},
		{
			title: 'Lectura',
			description: 'Practica la lectura con textos y ejercicios.',
			Icon: FaBookReader,
			path: 'reading',
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
			{options.map((option, index) => (
				<LearningOptionCard
					key={index}
					title={option.title}
					description={option.description}
					Icon={option.Icon}
					href={`/${props.topic}/${props.level}/${option.path}`}
				/>
			))}
		</div>
	);
}

export default LearningOptionsGrid;
