"use client"
import { Card, CardBody, Image, CardFooter, Link } from '@nextui-org/react';

function TopicCard(props) {
	return (
		<Card as={Link} href={`/${props?.item.slug}`}>
			<CardBody className="p-0">
				<Image
					alt="Card background"
					classNames={{
						wrapper: ['w-full'],
						img: ['object-cover', 'aspect-square', 'rounded-md', 'select-none'],
					}}
					src={props?.item.image}
					draggable="false"
					onDragStart={(e) => e.preventDefault()}
				/>
			</CardBody>
			<CardFooter className="flex flex-col items-center">
				<h4 className="font-bold text-sm text-center line-clamp-1">{props?.item.title}</h4>
			</CardFooter>
		</Card>
	);
}

export default TopicCard;
