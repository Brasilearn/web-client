import { Button, Image, Link} from '@nextui-org/react';
import { Card, CardBody, CardFooter } from '@nextui-org/card';
import Title from '@/components/common/Title';

function Topic({ data, withDesc, ...props }) {
    const showDesc = withDesc??false;

	return (
		<section {...props}>
			{data &&
				data.map((item, index) => (
					<Card key={index} className="max-w-[400px]">
						<CardBody className='gap-2 pb-0'>
							
							<Image src={item.image} alt="Card background" draggable={false} className="object-cover" />
                            <Title size='small' color='primary' className="text-center line-clamp-1">{item.title}</Title>
                            {showDesc && 
                                <p className='px-2 text-sm text-gray-800 line-clamp-3'>{item.description}</p>
                            }
						</CardBody>
                        <CardFooter className='justify-center'>
                            <Button as={Link} href={`/${item.slug}`} variant='solid' color='primary'>Ver más</Button>
                        </CardFooter>
					</Card>
				))}
		</section>
	);
}

export default Topic;
