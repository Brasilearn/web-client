'use client';
import React, { useState } from 'react';
import { Input, Button, Card } from '@nextui-org/react';
import Cookies from 'js-cookie';
import axios from 'axios';

function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post('/api/login', {
				email,
				password,
			});

			const token = response.data.token;
			Cookies.set('authToken', token, { expires: 7 }); 

		} catch (err) {
			setError('Autenticacion fallida');
			console.error(err);
		}

        setPassword('');
	};

	return (
		<div className="flex items-center justify-center h-[84vh] bg-gray-100">
			<Card className="p-6 max-w-sm w-full m-3">
				<h2 className="text-2xl font-bold mb-4">Login</h2>
                {error && <p className="text-red-500">{error}</p>}
				<form onSubmit={handleSubmit} className="flex flex-col gap-4">
					<Input
						clearable
						underlined
						fullWidth
						color="primary"
						size="lg"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input
						clearable
						underlined
						fullWidth
						color="primary"
						size="lg"
						placeholder="Password"
						value={password}
						type={'password'}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button type="submit" color="primary" size="lg" shadow>
						Login
					</Button>
				</form>
			</Card>
		</div>
	);
}

export default LoginPage;
