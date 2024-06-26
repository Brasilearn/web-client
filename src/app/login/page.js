"use client";
import React, { useRef } from 'react';
import { Input, Button, Card, Image } from '@nextui-org/react';
import { login } from '@/services/auth';

function LoginPage() {

    const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const handleLogin = async (event) => {
		event.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		
		try {
			const response = await login(email, password);
			// Handle successful login (e.g., redirect to another page)
			console.log('Login successful:', response);
		} catch (error) {
			// Handle login error (e.g., show error message)
			console.error('Login failed:', error);
		}
	};
	
	return (
		<div className="flex items-center justify-center h-[84vh] bg-gray-100">
			<Card className="p-6 max-w-sm w-full m-3 flex flex-col gap-4 justify-center items-center">
                <Image src="/images/logo.png" width={256} height={256} alt="logo"/>
				<h2 className="text-2xl font-bold">Login</h2>
				<form className="flex flex-col gap-4 w-full" onSubmit={handleLogin}>
					<Input
						clearable
						underlined
						fullWidth
						color="primary"
						size="lg"
						placeholder="Email"
						ref={emailRef}
					/>
					<Input
						clearable
						underlined
						fullWidth
						color="primary"
						size="lg"
						placeholder="Password"
						type="password"
						ref={passwordRef}
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
