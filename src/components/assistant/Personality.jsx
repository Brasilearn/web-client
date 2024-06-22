import { Button, ButtonGroup } from '@nextui-org/react';

function Personality({ ...props }) {
	const personalities = ['Profesional', 'Joven', 'Sarcastico'];

	return (
		<section {...props}>
			<ButtonGroup>
				{personalities.map((personality, index) => (
					<Button key={index} color="primary" auto>
						{personality}
					</Button>
				))}
			</ButtonGroup>
		</section>
	);
}

export default Personality;
