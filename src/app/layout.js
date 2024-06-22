import { NextUIProvider } from '@nextui-org/react';
import Head from 'next/head';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Brasilearn App',
	description: 'Hecho en la UNI',
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<Head>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<body className={inter.className}>
				<NextUIProvider>
					<Header />
                    <main className='min-h-[84vh]'>
                        {children}
                    </main>
					<Footer />
				</NextUIProvider>
			</body>
		</html>
	);
}
