'use client';
import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { Button } from '@nextui-org/react';
import Title from '@/components/common/Title';

const ChatList = () => {
	const [chats, setChats] = useState(['Chat 1', 'Chat 2', 'Chat 3']);
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
		<aside className="hidden md:block bg-gradient-to-r from-blue-50 to-blue-100 p-6 w-full max-w-sm relative">
			<div className="flex flex-col gap-4">
				<Title size="medium" color="primary">
					Chat Bot
				</Title>
				<ul className="relative z-10">
					{chats.map((chat, index) => (
						<li
							key={index}
							className="relative flex items-center justify-between py-3 px-4 mb-2 rounded-lg bg-white bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105">
							{editingChat === index ? (
								<input
									type="text"
									value={newChatName}
									onChange={(e) => setNewChatName(e.target.value)}
									className="text-blue-900 font-medium flex-grow mr-2 border border-blue-300 rounded-md"
								/>
							) : (
								<span className="text-blue-900 font-medium">{chat}</span>
							)}
							<div className="flex space-x-2 relative z-20">
								<button
									className="text-gray-500 hover:text-blue-800 focus:outline-none"
									onClick={() => handleMenuClick(index)}>
									<FaEllipsisV />
								</button>
								{activeMenu === index && (
									<div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-30">
										<ul>
											{editingChat === index ? (
												<li
													className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
													onClick={() => handleSaveEdit(index)}>
													Guardar
												</li>
											) : (
												<>
													<li className="py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={() => handleEdit(index)}>
														Cambiar Nombre
													</li>
													<li
														className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
														onClick={() => handleDelete(index)}>
														Eliminar Chat
													</li>
												</>
											)}
										</ul>
									</div>
								)}
							</div>
						</li>
					))}
				</ul>
				<Button variant="solid" color="primary">
					Nuevo Chat
				</Button>
			</div>
		</aside>
	);
};

export default ChatList;
