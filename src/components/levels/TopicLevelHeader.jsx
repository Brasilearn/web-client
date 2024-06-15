import { Card, Chip } from '@nextui-org/react';

function TopicLevelHeader({ title, description, chip }) {
	return (
		<Card className="p-4 flex justify-between items-center gap-1 border-2 border-blue-500 bg-blue-100 shadow-lg">
			<div className='flex items-center gap-2'>
				<h1 className="text-2xl font-bold">{title}</h1>
				{chip && <Chip color="primary" className='px-4 cursor-pointer select-none transition-all duration-300 hover:scale-105'>{chip}</Chip>}
			</div>
            <p className='text-center'>
                {description}
            </p>
		</Card>
	);
}

export default TopicLevelHeader;
