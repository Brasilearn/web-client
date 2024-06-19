'use client';
import React, { useState, useEffect } from 'react';

function Timer({ isRecording }) {
	const [time, setTime] = useState(0);

	useEffect(() => {
		let interval = null;
		if (isRecording) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 1);
			}, 1000);
		} else if (!isRecording && time !== 0) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [isRecording, time]);

	useEffect(() => {
		if (!isRecording) {
			setTime(0);
		}
	}, [isRecording]);

	return (
		<div className="text-center">
			<h2 className="text-4xl font-bold text-blue-500">
				{String(Math.floor(time / 3600)).padStart(2, '0')}:{String(Math.floor((time % 3600) / 60)).padStart(2, '0')}:
				{String(time % 60).padStart(2, '0')}
			</h2>
		</div>
	);
}

export default Timer;
