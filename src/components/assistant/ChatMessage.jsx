'use client';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import TypewriterEffect from '@/components/assistant/TypewriterEffect';

const ChatMessage = ({ message, isUser, isAnimate }) => {
	const [displayedText, setDisplayedText] = useState('');
	const [index, setIndex] = useState(0);

    const createMarkup = (text) => {
		return { __html: text.replaceAll("\n", "<br/>") };
	};

	useEffect(() => {
		if (isAnimate && index < message.length) {
			const timeoutId = setTimeout(() => {
				setDisplayedText((prev) => prev + message[index]);
				setIndex((prev) => prev + 1);
			}, 50); // Ajusta la velocidad de escritura si es necesario
			return () => clearTimeout(timeoutId);
		} else if (!isAnimate) {
			setDisplayedText(message);
		}
	}, [index, message, isAnimate]);

	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
			<div className={`p-3 rounded-lg text-sm ${isUser ? 'bg-default text-black' : 'bg-primary text-white'} max-w-xs`}>
            {isAnimate && !isUser ? (
					<TypewriterEffect text={message} speed={10} />
				) : (
					<p dangerouslySetInnerHTML={createMarkup(message??'')} />
				)}
			</div>
		</motion.div>
	);
};

ChatMessage.propTypes = {
	message: PropTypes.string.isRequired,
	isUser: PropTypes.bool.isRequired,
	isAnimate: PropTypes.bool.isRequired,
};

export default ChatMessage;
