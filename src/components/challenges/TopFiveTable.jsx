'use client'
import React from 'react';
import { motion } from 'framer-motion';

const TopFiveTable = ({ users }) => {
	const topFive = users.slice(0, 5);

	const getPrize = (rank) => {
		switch (rank) {
			case 1:
				return '🏆 100 pts';
			case 2:
				return '🥈 75 pts';
			case 3:
				return '🥉 50 pts';
			case 4:
				return '🎖 25 pts';
			case 5:
				return '🏅 10 pts';
			default:
				return '';
		}
	};

	return (
		<>
			<h2 className="text-2xl font-bold mb-4 text-center uppercase">Top 5 Mejores</h2>
			<div className="w-full p-4 shadow-lg rounded-lg flex justify-center items-center bg-white">
				<div className="w-full max-w-md">
					<table className="table-auto w-full divide-gray-300">
						<thead>
							<tr>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">#</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
									Nombre
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
									Premio
								</th>
							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-gray-200">
							{topFive.map((user, index) => (
								<motion.tr
									key={user.id}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className={`${
										index < 3
											? `bg-gradient-to-r from-${
													index === 0 ? 'yellow-400' : index === 1 ? 'yellow-300' : 'yellow-200'} to-transparent`
											: 'bg-white'
									}
                font-medium text-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105`}>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{index + 1}</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{user.name}</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{getPrize(index + 1)}</td>
								</motion.tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default TopFiveTable;
