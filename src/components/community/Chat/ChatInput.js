import React, { useState } from 'react';

const ChatInput = ({ onSendMessage }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSendMessage(input);
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className="chat-input flex">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow p-2 border rounded"
                placeholder="Escribe un mensaje..."
            />
            <button type="submit" className="p-2 bg-blue-500 text-white rounded">Enviar</button>
        </form>
    );
};

export default ChatInput;
