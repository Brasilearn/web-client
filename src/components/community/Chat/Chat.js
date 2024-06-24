import React, { useState } from 'react';
import ChatList from './ChatList';
import ChatInput from './ChatInput';
import ChatUsers from './ChatUsers';
import { sendMessages } from '@/services/communityFetching';

const Chat = ({ user, users, setUsers }) => {
    const [messages, setMessages] = useState([{ text: '¡Hola! Bienvenido al chat comunitario.', isUser: false }]);

    const handleSendMessage = (message) => {
        setMessages(prevMessages => [...prevMessages, { text: message, isUser: true }]);
        async function getResponse() {
            const response = await sendMessages(user.id, message);
            console.log(response);
            setMessages(prevMessages => [...prevMessages, { text: response.message, isUser: false }]);
        }
        getResponse();
    };

    return (
        <div className="chat-container flex flex-col gap-4">
            <ChatUsers users={users} />
            <ChatList messages={messages} />
            <ChatInput onSendMessage={handleSendMessage} />
        </div>
    );
};

export default Chat;
