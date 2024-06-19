'use client';
import React, { useState } from 'react';
import PhraseListHeader from './PhraseListHeader';

function PhraseList({ phrases, onSelect }) {
	return (
		<aside
			className={`p-4 rounded-xl w-[300px] max-w-sm relative transition-all duration-500 bg-white shadow-lg`}>
			<div className="flex justify-between items-start mb-2">
				<PhraseListHeader />
			</div>
			<div
				className="bg-gray-100 rounded-lg shadow-inner p-2 border-2 border-black/5"
				style={{ maxHeight: '500px', overflowY: 'auto' }}>
				<ul className="space-y-2">
					{phrases.slice(0, 5).map((phrase, index) => (
						<li
							key={index}
							className="px-3 py-2 rounded-lg bg-white bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105 cursor-pointer border-b border-gray-300"
							onClick={() => onSelect(phrases[index])}>
							<span className="text-blue-500 font-medium">{phrase.portuguese}</span>
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
}

export default PhraseList;
