const FAQSection = () => {
	return (
		// Aplicamos un fondo con degradado de amarillo claro a oscuro, bordes redondeados y sombra
		<section className="flex flex-col gap-4 rounded-md shadow-md p-6 bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-900 ">
			{/* Encabezado estilizado con tamaño de fuente grande, negrita y color amarillo oscuro */}
			<h2 className="text-2xl font-bold">Preguntas Frecuentes</h2>
			{/* Lista con viñetas y espacio entre elementos, además de efectos de transición en hover */}
			<ul className="list-disc list-inside space-y-2">
				<li>¿Cómo puedo empezar a usar el chatbot?</li>
				<li>¿Qué temas puedo aprender?</li>
				<li>¿El chatbot es gratuito?</li>
			</ul>
		</section>
	);
};

export default FAQSection;
