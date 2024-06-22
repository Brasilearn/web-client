"use client"
import { Breadcrumbs as BreadcrumbsContainer, BreadcrumbItem } from '@nextui-org/react';

function Breadcrumbs({ data }) {
	const routes = data ?? [{ name: 'Inicio', path: '/' }];

	return (
		<BreadcrumbsContainer variant="solid">
			{routes.map((item, index) => (
				<BreadcrumbItem key={index} href={item.path}>
					{item.name}
				</BreadcrumbItem>
			))}
		</BreadcrumbsContainer>
	);
}

export default Breadcrumbs;
