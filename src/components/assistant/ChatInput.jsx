'use client';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from '@nextui-org/react';

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
		<form onSubmit={handleSubmit} className="flex items-center gap-4">
			<Input
				type="text"
				className="flex-grow"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				placeholder="Escribe tu mensaje..."
			/>
			<Button type="submit" color="primary">
				Enviar
			</Button>
		</form>
	);
};

ChatInput.propTypes = {
	onSendMessage: PropTypes.func.isRequired,
};

export default ChatInput;
