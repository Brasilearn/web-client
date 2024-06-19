import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="h-[84vh]">
			<div className="h-full w-full flex flex-col items-center justify-center gap-4">
				<h2 className="text-4xl md:text-8xl">404</h2>
				<p className="text-lg">No se encontró la página que buscas.</p>
				<Button as={Link} variant="solid" color="primary" href="/">
					Retorna al inicio
				</Button>
			</div>
		</div>
	);
}
