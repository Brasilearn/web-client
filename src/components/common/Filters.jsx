import { Button } from '@nextui-org/react';

function Filters({ data, select, onSelect, ...props }) {
	const handleSelect = (e, select) => {
		e.preventDefault();
		onSelect(select);
	};

	return (
		<section {...props}>
				{data.map((item, index) => (
					<Button
						key={index}
						color="primary"
						isDisabled={select === item.name}
						onClick={(e) => handleSelect(e, data[index].name)}>
						{item.name}
					</Button>
				))}
		</section>
	);
}

export default Filters