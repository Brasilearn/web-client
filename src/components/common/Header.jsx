'use client';
import React from 'react';
import {
	Button,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Divider,
	Image,
	Link,
	User,
} from '@nextui-org/react';
import {
	Navbar,
	NavbarBrand,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	NavbarContent,
	NavbarItem,
} from '@nextui-org/react';

const mockUser = {
	name: 'Jane Doe',
	avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
	toke: '1234567890',
};

const routes = [
	{ path: '/', name: 'Inicio' },
	{ path: '/topics', name: 'Topicos' },
	{ path: '/community', name: 'Comunidad' },
];

const menuItems = [
	{ name: 'Perfil', path: '/profile' },
	{ name: 'Actividad', path: '/activity' },
	{ name: 'Tabla de Desafíos', path: '/table-challenge' },
	{ name: 'Ajustes', path: '/settings' },
	{ name: 'Cerrar sesión', path: '/logout' },
];

function Logo() {
	return (
		<Link href="/" className="font-bold text-inherit drop-shadow-md">
			<Image src="/images/logo.png" alt="Logo" className="w-10 h-10 md:w-16 md:h-16" />
		</Link>
	);
}

function Header() {
	const [user, setUser] = React.useState(null);

	const handleLogin = () => {
		setUser(mockUser);
	};

	return (
		<Navbar disableAnimation isBordered className="sticky inset-0 z-50 backdrop-blur-md bg-white/75 md:py-2">
			<NavbarContent className="sm:hidden" justify="start">
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarContent className="sm:hidden" justify="center">
				<NavbarBrand>
					<Logo />
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarBrand>
					<Logo />
				</NavbarBrand>
				{routes.map((route, index) => (
					<NavbarItem key={index}>
						<Link href={route.path} color="primary" underline="hover">
							{route.name}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>

			<NavbarContent justify="end">
				{user !== null ? (
					<>
						<Dropdown placement="bottom-start">
							<DropdownTrigger>
								<User
									as={Button}
									variant="flat"
									avatarProps={{
										src: user.avatar,
										className: 'w-8 h-8',
									}}
									radius="sm"
									className="transition-transform hidden md:flex"
									name={user.name}
								/>
							</DropdownTrigger>
							<DropdownMenu aria-label="User Actions" variant="flat">
								{menuItems.map((item, index) => (
									<DropdownItem
										key={index}
										href={item.path}
										variant="flat"
										color={index === menuItems.length - 1 ? 'danger' : 'default'}>
										{item.name}
									</DropdownItem>
								))}
							</DropdownMenu>
						</Dropdown>
					</>
				) : (
					<NavbarItem className="hidden lg:flex">
						<Link as="button" color="primary" radius="sm" onClick={handleLogin}>
							Acceder
						</Link>
						<Button as={Link} color="primary" radius="sm" href="/register">
							Registrarse
						</Button>
					</NavbarItem>
				)}
			</NavbarContent>

			<NavbarMenu>
				{user !== null ? (
					<>
						<User
							avatarProps={{
								src: user.avatar,
							}}
							className="transition-transform justify-start md:hidden"
							name={user.name}
						/>
						<Divider orientation="horizontal" className="my-2" />
						{menuItems.map((item, index) => (
							<NavbarMenuItem key={`${item}-${index}`}>
								<Link
									className="w-full"
									color={index === menuItems.length - 1 ? 'danger' : 'foreground'}
									href={item.path}>
									{item.name}
								</Link>
							</NavbarMenuItem>
						))}
						<Divider orientation="horizontal" className="my-2" />
					</>
				) : (
					<>
						<Link as="button" color="primary" radius="sm" onClick={handleLogin}>
							Acceder
						</Link>
						<Link color="primary" radius="sm" href="/register">
							Registrarse
						</Link>
					</>
				)}

				{routes.map((route, index) => (
					<NavbarMenuItem key={`${route}-${index}`}>
						<Link className="w-full" color={index === route.length - 1 ? 'danger' : 'foreground'} href={route.path}>
							{route.name}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}

export default Header;
