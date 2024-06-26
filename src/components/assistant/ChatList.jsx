'use client';
import React, { useEffect, useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { Button } from '@nextui-org/react';

const ChatList = ({ data }) => {

	const [activeMenu, setActiveMenu] = useState(null);
	const [editingChat, setEditingChat] = useState(null);
	const [newChatName, setNewChatName] = useState('');

	const handleMenuClick = (index) => {
		setActiveMenu(activeMenu === index ? null : index);
		setEditingChat(null);
	};

	const handleDelete = (index) => {
		const newChats = chats.filter((_, i) => i !== index);
		setChats(newChats);
		setActiveMenu(null);
	};

	const handleEdit = (index) => {
		setEditingChat(index);
		setNewChatName(chats[index]);
	};

	const handleSaveEdit = (index) => {
		const newChats = [...chats];
		newChats[index] = newChatName;
		setChats(newChats);
		setEditingChat(null);
		setActiveMenu(null);
	};

	return (
		<div className="flex flex-col gap-4">
			<ul className="relative z-10 overflow-y-scroll overflow-clip h-[34vh] pr-2 flex flex-col gap-2">
				{data.map((item, index) => (
					<li key={index} className="">
						<div className="relative flex items-center justify-between py-3 px-4 rounded-lg bg-primary-50 shadow-sm hover:shadow-md ">
							{editingChat === index ? (
								<input
									type="text"
									value={newChatName}
									onChange={(e) => setNewChatName(e.target.value)}
									className="text-primary  font-medium flex-grow rounded-md"
								/>
							) : (
								<span className="text-primary font-medium line-clamp-1">{item.titulo.replaceAll('\"', '')}</span>
							)}
							<button
								className="text-primary hover:text-primary/50 focus:outline-none"
								onClick={() => handleMenuClick(index)}>
								<FaEllipsisV />
							</button>
						</div>
					</li>
				))}
			</ul>
			<Button variant="solid" color="primary">
				Nuevo Chat
			</Button>
		</div>
	);
};

export default ChatList;
