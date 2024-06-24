import React from 'react';

const ChatUsers = ({ users }) => {
    // Ordenar los usuarios por puntos en orden descendente
    const sortedUsers = [...users].sort((a, b) => b.points - a.points);

    return (
        <div className="chat-users p-4 border rounded mb-4 bg-white shadow-lg">
            <h4 className="text-lg font-sans font-semibold mb-4 text-center text-gray-600">Usuarios Conectados</h4>
            <ul>
                {sortedUsers.map((user) => (
                    <li key={user.id} className="flex items-center justify-between p-2 border-b last:border-none hover:bg-blue-50 transition">
                        <div className="flex items-center gap-2">
                            <span className={`status-indicator ${user.status} rounded-full w-3 h-3 block`}></span>
                            <p className="font-semibold text-gray-700">{user.name} <span className="text-sm text-gray-500">({user.status})</span></p>
                        </div>
                        <div className="text-blue-800 font-bold">
                            {user.points} pts
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChatUsers;
