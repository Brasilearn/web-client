import React from 'react';

const ChatList = ({ messages }) => {
    return (
        <div className="chat-list p-4 border rounded">
            {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.isUser ? 'text-right' : 'text-left'}`}>
                    <p>{msg.text}</p>
                </div>
            ))}
        </div>
    );
};

export default ChatList;
