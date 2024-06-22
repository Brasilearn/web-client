import { Input, Button, Card, Image } from '@nextui-org/react';

function LoginPage() {
	
	return (
		<div className="flex items-center justify-center h-[84vh] bg-gray-100">
			<Card className="p-6 max-w-sm w-full m-3 flex flex-col gap-4 justify-center items-center">
                <Image src="/images/logo.png" width={256} height={256} alt="logo"/>
				<h2 className="text-2xl font-bold">Login</h2>
				<form className="flex flex-col gap-4 w-full">
					<Input
						clearable
						underlined
						fullWidth
						color="primary"
						size="lg"
						placeholder="Email"
					/>
					<Input
						clearable
						underlined
						fullWidth
						color="primary"
						size="lg"
						placeholder="Password"
						type={'password'}
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
