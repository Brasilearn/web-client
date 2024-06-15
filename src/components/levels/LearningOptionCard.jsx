import { Card, Button, Link } from '@nextui-org/react';

function LearningOptionCard({ title, description, Icon, href }) {
	return (
		<Card className="w-full p-4 text-center flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg min-h-72">
			<div className="flex flex-col items-center">
				<div className="mb-2 text-3xl">
					<Icon />
				</div>
				<h2 className="text-lg font-semibold mb-2">{title}</h2>
				<p className="text-gray-500 mb-4 text-center">{description}</p>
			</div>
			<Button as={Link} href={href} color="primary" >
				Practica tu {title}
			</Button>
		</Card>
	);
}

export default LearningOptionCard;
