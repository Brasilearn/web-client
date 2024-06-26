'use client';

const CircularProgress = ({ porcentaje }) => {
	const porcentajeValido = !isNaN(porcentaje) && porcentaje >= 0 && porcentaje <= 100 ? porcentaje : 0;
	const radius = 50;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - (porcentajeValido / 100) * circumference;

	const getStrokeColor = (percentage) => {
		if (percentage > 70) return 'url(#gradiente-verde)';
		if (percentage >= 50) return 'url(#gradiente-amarillo)';
		return 'url(#gradiente-rojo)';
	};

	return (
		<div className="relative mb-6">
			<svg className="w-40 h-40" viewBox="0 0 120 120">
				<defs>
					<linearGradient id="gradiente-verde" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" style={{ stopColor: '#66ff66', stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: '#33cc33', stopOpacity: 1 }} />
					</linearGradient>
					<linearGradient id="gradiente-amarillo" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" style={{ stopColor: '#ffeb3b', stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: '#ffc107', stopOpacity: 1 }} />
					</linearGradient>
					<linearGradient id="gradiente-rojo" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop offset="0%" style={{ stopColor: '#ff6666', stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: '#cc3333', stopOpacity: 1 }} />
					</linearGradient>
				</defs>
				<circle
					className="text-gray-300"
					strokeWidth="10"
					stroke="currentColor"
					fill="transparent"
					r="50"
					cx="60"
					cy="60"
				/>
				<circle
					className="transition-all duration-500"
					strokeWidth="10"
					strokeLinecap="round"
					stroke={getStrokeColor(porcentajeValido)}
					fill="transparent"
					r="50"
					cx="60"
					cy="60"
					style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
				/>
			</svg>
			<div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-gray-800">
				{porcentajeValido}%
			</div>
		</div>
	);
};

export default CircularProgress;
