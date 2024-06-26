'use client';
import { Button } from '@nextui-org/button';

const ActionButtons = () => {
	return (
		<div className="mt-8 flex space-x-4 justify-center">
			<Button auto className="bg-blue-500 text-white shadow-md hover:shadow-lg">
				Ver Resultados Anteriores
			</Button>
			<Button auto className="bg-blue-500 text-white shadow-md hover:shadow-lg">
				Reiniciar Nivel
			</Button>
			<Button auto className="bg-blue-500 text-white shadow-md hover:shadow-lg">
				Volver al Inicio
			</Button>
		</div>
	);
};

export default ActionButtons;
