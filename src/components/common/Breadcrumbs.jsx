'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Breadcrumbs as BreadcrumbsContainer, BreadcrumbItem } from '@nextui-org/react';

function Breadcrumbs(props) {
	const pathname = usePathname();
	const [loading, setLoading] = useState(true);
	const [currentRoutes, setCurrentRoutes] = useState([]);

	useEffect(() => {
		const pathArray = pathname.split('/').filter((item) => item); // Divide y filtra los paths vacíos

		const generateRoutes = () => {
			let arr = [{ path: '/', name: 'Inicio' }]; // Agrega el elemento raíz
			pathArray.reduce((prev, curr) => {
				const currentPath = `${prev}/${curr}`;
				arr.push({ path: currentPath, name: curr });
				return currentPath;
			}, '');
			return arr;
		};

		setCurrentRoutes(generateRoutes());
		setLoading(false);
	}, [pathname]);

	return (
		<BreadcrumbsContainer variant="solid">
			{loading ? (
				<BreadcrumbItem href="/">Inicio</BreadcrumbItem>
			) : (
				currentRoutes.map((item, index) => (
					<BreadcrumbItem key={index} href={item.path}>
						{item.name}
					</BreadcrumbItem>
				))
			)}
		</BreadcrumbsContainer>
	);
}

export default Breadcrumbs;
