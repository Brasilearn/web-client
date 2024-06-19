import React from 'react';
import { Progress } from '@nextui-org/react';

function SoundEffect({ isPlaying }) {
	return (
		<div className="flex justify-center items-center mb-4">
			<Progress value={isPlaying ? 100 : 0} max={100} animated={isPlaying} />
		</div>
	);
}

export default SoundEffect;
