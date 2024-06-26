'use client';
const Message = ({ porcentaje }) => {
	const getMessage = (percentage) => {
		if (percentage > 70) return '¡Felicidades!';
		if (percentage >= 50) return 'Puedes hacerlo mejor';
		return '¿Deseas repetir el nivel?';
	};

	return <div className="mt-4 text-2xl font-semibold text-gray-800 text-center">{getMessage(porcentaje)}</div>;
};

export default Message;
