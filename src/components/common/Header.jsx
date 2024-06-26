'use client';
import { useState, useEffect } from 'react';
import { Button, Link, User } from '@nextui-org/react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/dropdown';
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    NavbarContent,
    NavbarItem,
} from '@nextui-org/navbar';
import Logo from '@/components/common/Logo';
import Cookies from 'js-cookie';
import { get_user_info } from '@/services/profileDataFetching';

const routes = [
    { path: '/topics', name: 'Tópicos' },
    { path: '/community', name: 'Comunidade' },
    { path: '/assistant', name: 'Assistente' },
];

const menuItems = [
    { name: 'Perfil', path: '/profile' },
    { name: 'Atividade', path: '/activity' },
    { name: 'Tabela de Desafíos', path: 'profile/challenge' },
    { name: 'Ajustes', path: '/settings' },
    { name: 'Cerrar sesión', path: '/logout' },
];

function Header() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const img_url = 'https://randomuser.me/api/portraits/men/75.jpg';

    useEffect(() => {
        const fetchProfileData = async () => {
            const auth_token = Cookies.get('authToken'); // Use authToken cookie
            const user_id = Cookies.get('userID');
            if (!auth_token) {
                setIsLoading(false);
                return;
            }

            try {
                const profile_data = await get_user_info(user_id);
                setUser(profile_data);
            } catch (error) {
                console.error("Failed to fetch profile data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProfileData();
    }, []);

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
                {isLoading ? (
                    <></>
                ) : user ? (
                    <>
                        <Dropdown placement="bottom-start">
                            <DropdownTrigger>
                                <User
                                    as={Button}
                                    variant="flat"
                                    avatarProps={{
                                        src: img_url,
                                        className: 'w-8 h-8',
                                    }}
                                    radius="sm"
                                    className="transition-transform hidden md:flex"
                                    name={user?.username}
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
                    <NavbarItem className="hidden lg:flex gap-4">
                        <Link variant='solid' color="primary" radius="sm" href='/login'>
                            Acceder
                        </Link>
                        <Button as={Link} color="primary" radius="sm" href="/register">
                            Registrarse
                        </Button>
                    </NavbarItem>
                )}
            </NavbarContent>

            <NavbarMenu>
                {isLoading ? (
                    <>
                        {routes.map((route, index) => (
                            <NavbarMenuItem key={`${route}-${index}`}>
                                <Link className="w-full" color={index === route.length - 1 ? 'danger' : 'foreground'} href={route.path}>
                                    {route.name}
                                </Link>
                            </NavbarMenuItem>
                        ))}
                    </>
                ) : user ? (
                    <>
                        <User
                            avatarProps={{
                                src: img_url,
                            }}
                            className="transition-transform justify-start md:hidden"
                            name={user?.username}
                        />
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
                    </>
                ) : (
                    <>
                        <div className="flex gap-4">
                            <Link as="button" color="primary" radius="sm" href="/login">
                                Acceder
                            </Link>
                            <Link color="primary" radius="sm" href="/register">
                                Registrarse
                            </Link>
                        </div>
                        {routes.map((route, index) => (
                            <NavbarMenuItem key={`${route}-${index}`}>
                                <Link className="w-full" color={index === route.length - 1 ? 'danger' : 'foreground'} href={route.path}>
                                    {route.name}
                                </Link>
                            </NavbarMenuItem>
                        ))}
                    </>
                )}
            </NavbarMenu>
        </Navbar>
    );
}

export default Header;
