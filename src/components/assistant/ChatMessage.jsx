'use client';
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ChatMessage = ({ message, isUser }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
			<div
				className={`p-3 rounded-lg ${
					isUser ? 'bg-green-700 text-white' : 'bg-yellow-200 text-black'
				} max-w-xs shadow-md`}>
				{message}
			</div>
		</motion.div>
	);
};

ChatMessage.propTypes = {
	message: PropTypes.string.isRequired,
	isUser: PropTypes.bool.isRequired,
};

export default ChatMessage;
