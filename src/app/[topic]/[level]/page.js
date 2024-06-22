import Breadcrumbs from '@/components/common/Breadcrumbs';
import TopicLevelHeader from '@/components/levels/TopicLevelHeader';
import LearningOptionsGrid from '@/components/levels/LearningOptionsGrid';

import { getTopic, getLevels } from '@/services/topicFetching';
import { notFound } from 'next/navigation';

export default async function LevelsPage({ params }) {
	
    const topic = await getTopic(params.topic);

    if (!topic) {
        notFound();
    }

    const levels = await getLevels(topic.id)

	return (
		<div className="max-w-screen-lg mx-auto px-6 py-8 flex flex-col justify-between gap-4">
			<Breadcrumbs />
			{topic && (
				<TopicLevelHeader
					title={levels[params.level - 1].title}
					description={levels[params.level - 1].description}
					chip={['nivel:', levels[params.level - 1].id].join(' ')}
				/>
			)}
			<h1 className="font-bold text-lg md:text-2xl mb-2">Expande tu conocimiento en:</h1>
			<div className="flex-grow">
                {topic && <LearningOptionsGrid topic={topic.slug} level={params.level} />}
            </div>
		</div>
	);
}
