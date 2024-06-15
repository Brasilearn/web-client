"use client"
import { useState} from 'react';
import { usePathname } from 'next/navigation';
import { Breadcrumbs as BreadcrumbsContainer , BreadcrumbItem } from '@nextui-org/react';

function Breadcrumbs(props) {

    const [currentRoutes, _] = useState(usePathname().split('/'));
    
    let path = '';

	return (
		<BreadcrumbsContainer variant="solid">
			{currentRoutes && currentRoutes.map((item, index) => {
				path = path===' '?'/':'/'+ item;
                return (
                    <BreadcrumbItem key={index} href={path}>
                        {item==='' ? 'Inicio' : item}
                    </BreadcrumbItem>
                );
			})}
		</BreadcrumbsContainer>
	);
}

export default Breadcrumbs;