'use client';
import React, { useEffect, useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { Button } from '@nextui-org/react';

const ChatList = ({ data, onSelect, onCreate }) => {
    const [ chats, setChats ] = useState(null);
	const [activeMenu, setActiveMenu] = useState(null);
	const [editingChat, setEditingChat] = useState(null);
	const [newChatName, setNewChatName] = useState('');

    useEffect(() => {
        setChats(data);
    }, [data]);

	const handleMenuClick = (index) => {
		setActiveMenu(activeMenu === index ? null : index);
		setEditingChat(null);
	};

	const handleItemClick = (e, index) => {
		e.preventDefault();
		onSelect(chats[index]);
	}

	const handleDelete = (index) => {
		const newChats = chats.filter((_, i) => i !== index);
		setActiveMenu(null);
	};

	return (
		<div className="flex flex-col gap-4">
			<ul className="relative z-10 overflow-y-scroll overflow-clip h-[34vh] pr-2 flex flex-col gap-2">
				{chats && chats.map((item, index) => (
					<li
						key={index}
						className="cursor-pointer relative flex items-center justify-between py-3 px-4 rounded-lg bg-primary-50 shadow-sm hover:shadow-md"
						onClick={(e) => handleItemClick(e, index)}>
						{editingChat === index ? (
							<input
								type="text"
								value={newChatName}
								onChange={(e) => setNewChatName(e.target.value)}
								className="text-primary font-medium flex-grow rounded-md"
							/>
						) : (
							<span className="text-primary font-medium line-clamp-1">{item.titulo && item.titulo.replaceAll('"', '')}</span>
						)}
						<button
							className="text-primary hover:text-primary/50 focus:outline-none"
							onClick={() => handleMenuClick(index)}>
							<FaEllipsisV />
						</button>
					</li>
				))}
			</ul>
			<Button variant="solid" color="primary" onClick={onCreate}>
				Nuevo Chat
			</Button>
		</div>
	);
};

export default ChatList;
