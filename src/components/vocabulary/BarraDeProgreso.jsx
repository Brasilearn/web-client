import React from 'react';
import { Progress } from '@nextui-org/react';

function BarraDeProgreso({ progreso }) {
	return (
		<div className="w-full flex justify-center my-4">
			<Progress
				value={progreso}
				max={100}
				color="primary"
				animated="true"
				shadow="true"
				className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
			/>
		</div>
	);
}

export default BarraDeProgreso;
