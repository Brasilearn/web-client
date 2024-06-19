import React from 'react';

const UserTable = ({ users }) => {
	return (
		<table className="table-auto w-full min-w-full bg-white shadow rounded-lg overflow-hidden">
			<thead className="bg-gray-200">
				<tr>
					<th className="py-2 px-4 text-center">ID</th>
					<th className="py-2 px-4 text-center">Nombre</th>
					<th className="py-2 px-4 text-center">Puntuación</th>
					<th className="py-2 px-4 text-center">Estado</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user) => (
					<tr key={user.id} className="even:bg-gray-100 hover:bg-gray-200 transition-all">
						<td className="py-2 px-4 text-center">{user.id}</td>
						<td className="py-2 px-4 text-center">{user.name}</td>
						<td className="py-2 px-4 text-center">
							<div className="w-full bg-gray-300 rounded-full">
								<div
									className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
									style={{ width: `${user.score}%` }}>
									{user.score}%
								</div>
							</div>
						</td>
						<td className="py-2 px-4 text-center">
							<span
								className={`py-1 px-3 rounded-full text-white ${
									user.status === 'Completado'
										? 'bg-green-500'
										: user.status === 'Pendiente'
										? 'bg-yellow-500'
										: 'bg-red-500'
								}`}>
								{user.status}
							</span>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default UserTable;
