import React from 'react'
import { Image, Link } from '@nextui-org/react';

function Logo() {
	return (
		<Link href="/" className="font-bold text-inherit drop-shadow-md">
			<Image src="/images/logo.png" alt="Logo" className="w-10 h-10 md:w-16 md:h-16" />
		</Link>
	);
}
export default Logo