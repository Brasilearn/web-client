import { Button } from '@nextui-org/react';

function Models({ data, model, onModel, ...props }) {
	const handlePersonality = (e, model) => {
		e.preventDefault();
		onModel(model);
	};

	return (
		<section {...props}>
				{data.map((item, index) => (
					<Button
						key={index}
						color="primary"
						isDisabled={model === item.name}
						onClick={(e) => handlePersonality(e, data[index].name)}>
						{item.name}
					</Button>
				))}
		</section>
	);
}

export default Models