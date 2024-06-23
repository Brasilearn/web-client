import { Button } from '@nextui-org/react';

function Personality({ data, personality, onPersonality, ...props }) {
	const handlePersonality = (e, personality) => {
		e.preventDefault();
		onPersonality(personality);
	};

	return (
		<section {...props}>
				{data.map((item, index) => (
					<Button
						key={index}
						color="primary"
						isDisabled={personality === item.name}
						onClick={(e) => handlePersonality(e, data[index].name)}>
						{item.name}
					</Button>
				))}
		</section>
	);
}

export default Personality;
