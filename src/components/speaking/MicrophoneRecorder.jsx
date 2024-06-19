'use client';
import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import { FaMicrophone } from 'react-icons/fa';

function MicrophoneRecorder({ onRecord }) {
	const [recording, setRecording] = useState(false);

	const handleRecord = () => {
		setRecording(!recording);
		onRecord(!recording);
	};

	return (
		<div className="flex flex-col items-center justify-center mt-4">
			<Button
				auto
				shadow
				onClick={handleRecord}
				className={`group rounded-full w-48 h-48 flex items-center justify-center ${
					recording ? 'bg-red-500' : 'bg-blue-500'
				}  transition duration-300 text-white`}>
				<FaMicrophone size={48} className="text-white group-hover:text-white/80" />
			</Button>
		</div>
	);
}

export default MicrophoneRecorder;
