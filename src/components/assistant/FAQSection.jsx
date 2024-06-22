const FAQSection = () => {
	return (
		// Aplicamos un fondo con degradado de amarillo claro a oscuro, bordes redondeados y sombra
		<section className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-gray-800 p-6 mt-4 rounded-xl shadow-xl">
			{/* Encabezado estilizado con tamaño de fuente grande, negrita y color amarillo oscuro */}
			<h2 className="text-2xl font-bold mb-4 text-yellow-900">Preguntas Frecuentes</h2>
			{/* Lista con viñetas y espacio entre elementos, además de efectos de transición en hover */}
			<ul className="list-disc list-inside space-y-2">
				<li className="hover:text-yellow-700 transition duration-300">¿Cómo puedo empezar a usar el chatbot?</li>
				<li className="hover:text-yellow-700 transition duration-300">¿Qué temas puedo aprender?</li>
				<li className="hover:text-yellow-700 transition duration-300">¿El chatbot es gratuito?</li>
			</ul>
		</section>
	);
};

export default FAQSection;
