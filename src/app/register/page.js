"use client";
import React, { useRef } from 'react';
import { Input, Button, Card, Image } from '@nextui-org/react';
import { signup } from '@/services/auth';

function SignupPage() {
    const usernameRef = useRef(null);
    const fullnameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSignup = async (event) => {
        event.preventDefault();
        const username = usernameRef.current.value;
        const fullname = fullnameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        try {
            const response = await signup(username, fullname, email, password);
            // Handle successful signup (e.g., redirect to another page)
            console.log('Signup successful:', response);
        } catch (error) {
            // Handle signup error (e.g., show error message)
            console.error('Signup failed:', error);
        }
    };

    return (
        <div className="flex items-center justify-center h-[84vh] bg-gray-100">
            <Card className="p-6 max-w-sm w-full m-3 flex flex-col gap-4 justify-center items-center">
                <Image src="/images/logo.png" width={256} height={256} alt="logo"/>
                <h2 className="text-2xl font-bold">Signup</h2>
                <form className="flex flex-col gap-4 w-full" onSubmit={handleSignup}>
                    <Input
                        clearable
                        underlined
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Username"
                        ref={usernameRef}
                    />
                    <Input
                        clearable
                        underlined
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Full Name"
                        ref={fullnameRef}
                    />
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
                        Signup
                    </Button>
                </form>
            </Card>
        </div>
    );
}

export default SignupPage;
