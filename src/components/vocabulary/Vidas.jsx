import React from 'react';

function Vidas({ vidas }) {
	return (
		<div className="flex items-center justify-center my-4">
			{Array.from({ length: vidas }).map((_, index) => (
				<svg key={index} className={`w-8 h-8 ${index===0? 'animate-pulse': ''} text-red-500  mx-1`} fill="currentColor" viewBox="0 0 20 20">
					<path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.656 3.172 10.828a4 4 0 010-5.656z" />
				</svg>
			))}
		</div>
	);
}

export default Vidas;
