import Title from '@/components/common/Title';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Topic from '@/components/home/Topic';

import { getTopics } from '@/services/topicFetching';

async function TopicsPage() {
	const topics = await getTopics();

	const routes = [
		{ name: 'Inicio', path: '/' },
		{ name: 'Tópicos', path: '/topics' },
	];

	return (
		<div className="container py-6">
			<div className="flex flex-col gap-4">
				<Breadcrumbs data={routes} />
				<Title size="large" color="primary">
					Tópicos
				</Title>
				<Topic data={topics} className="grid grid-cols-1 md:grid-cols-3 gap-4" withDesc />
			</div>
		</div>
	);
}

export default TopicsPage;
