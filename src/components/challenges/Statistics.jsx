import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

// Registro de los componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const Statistics = ({ users }) => {
	// Conteo de usuarios por estado
	const completedUsers = users.filter((user) => user.status === 'Completado').length;
	const pendingUsers = users.filter((user) => user.status === 'Pendiente').length;
	const suspendedUsers = users.filter((user) => user.status === 'Suspendido').length;

	// Datos para el gráfico de barras
	const barData = {
		labels: ['Completado', 'Pendiente', 'Suspendido'],
		datasets: [
			{
				label: 'Número de usuarios',
				data: [completedUsers, pendingUsers, suspendedUsers],
				backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'], // Colores personalizados
				borderColor: ['#36A2EB', '#FFCE56', '#FF6384'],
				borderWidth: 1,
			},
		],
	};

	// Opciones para el gráfico de barras
	const barOptions = {
		indexAxis: 'y',
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			x: {
				beginAtZero: true,
				ticks: {
					stepSize: 1,
				},
			},
		},
		plugins: {
			legend: {
				display: false,
			},
		},
	};

	// Datos para el gráfico circular (Pie chart)
	const pieData = {
		labels: ['Completado', 'Pendiente', 'Suspendido'],
		datasets: [
			{
				label: 'Distribución de estado de usuarios',
				data: [completedUsers, pendingUsers, suspendedUsers],
				backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'], // Colores personalizados
				borderColor: ['#36A2EB', '#FFCE56', '#FF6384'],
				borderWidth: 1,
			},
		],
	};

	// Opciones para el gráfico circular
	const pieOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: true,
				position: 'right',
			},
		},
	};

	return (
		<div className="mt-8">
			<h2 className="text-lg font-semibold mb-4">Estadísticas del Desafío</h2>
			{/* Contenedor de los gráficos */}
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{/* Gráfico de barras */}
				<div className="h-96">
					<Bar data={barData} options={barOptions} />
				</div>
				{/* Gráfico circular (Pie chart) */}
				<div className="h-96">
					<Pie data={pieData} options={pieOptions} />
				</div>
			</div>
		</div>
	);
};

export default Statistics;
