"use client"
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ChatInput = ({ onSendMessage }) => {
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (message.trim()) {
			onSendMessage(message);
			setMessage('');
		}
	};

	return (
		<form onSubmit={handleSubmit} className="flex items-center bg-white p-3 shadow-md border-t border-gray-300">
			<input
				type="text"
				className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				placeholder="Escribe tu mensaje..."
			/>
			<button
				type="submit"
				className="ml-3 bg-green-700 text-white p-2 rounded-md hover:bg-green-600 transition duration-300">
				Enviar
			</button>
		</form>
	);
};

ChatInput.propTypes = {
	onSendMessage: PropTypes.func.isRequired,
};

export default ChatInput;
