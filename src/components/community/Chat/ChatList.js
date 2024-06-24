// ChatList.jsx
import React from 'react';

const ChatList = ({ messages }) => {
    return (
        <div className="chat-list p-4 border rounded bg-white">
            {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.isUser ? 'text-blue-500 text-right' : 'text-gray-800 text-left'} p-2 rounded-lg mb-2 hover:bg-pink-400 hover:text-white`}>
                    <p>{msg.text}</p>
                </div>
            ))}
        </div>
    );
};

export default ChatList;
