'use client';
import { useState } from 'react';
import { Button, Input } from '@nextui-org/react';
import { FaSearch } from 'react-icons/fa';

function Search(props) {
    
	return (
		<div {...props}>
			<form className="flex gap-2 max-w-screen-md mx-auto w-full rounded-lg p-8 shadow-lg -m-12 bg-white">
				<Input
					label="Buscar"
					placeholder="Ingresa tu busqueda ..."
					radius="sm"
					classNames={{
						inputWrapper: ['h-12'],
					}}
				/>
				<Button
					color="primary"
					size="lg"
					radius="sm"
					startContent={<FaSearch size={36} className="pointer-events-none" />}>
					BUSCAR
				</Button>
			</form>
		</div>
	);
}

export default Search;
