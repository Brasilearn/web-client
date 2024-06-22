import Breadcrumbs from '@/components/common/Breadcrumbs';
import LevelCard from '@/components/home/LevelCard';

import { getTopic, getLevels } from '@/services/topicFetching';
import { notFound } from 'next/navigation';

export default async function TopicsPage({ params }) {

	const topic = await getTopic(params.topic);

    if (!topic) {
        notFound();
    }

    const levels = await getLevels(topic.id);

	return (
		<main className="max-w-screen-lg mx-auto px-6 py-4 flex flex-col gap-4">
			<Breadcrumbs />
			<section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{levels && levels.map((level) => <LevelCard key={level.id} item={level} topic={topic.slug} />)}
			</section>
		</main>
	);
}
