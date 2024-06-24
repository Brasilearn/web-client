import React from 'react';

const ChatUsers = ({ users }) => {
    return (
        <div className="chat-users p-4 border rounded mb-4">
            <h4 className="text-lg font-bold mb-2">Usuarios Conectados</h4>
            <ul>
                {users.map((user) => (
                    <li key={user.id} className="flex items-center gap-2">
                        <span className={`status-indicator ${user.status}`}></span>
                        <p>{user.name} ({user.status})</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChatUsers;
