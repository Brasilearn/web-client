import { Button, Link } from '@nextui-org/react';

import Hero from '@/components/home/Hero';
import Search from '@/components/home/Search';
import LevelCard from '@/components/home/LevelCard';
import TopicCard from '@/components/home/TopicCard';

import { getTopics, getLevels } from '@/services/topicFetching';

export default async function Home() {
	const defaultTopic = await getLevels('saludos-presentaciones');
	const topicsPopular = await getTopics(4);

	return (
		<main className="w-full">
			<Hero className="relative z-0 w-full h-[70vh] bg-hero bg-cover bg-top shadow-inner" />
			<Search className="hidden relative z-20 w-full md:flex md:items-center" />
			<div className="py-16 md:mt-10">
				<div className="max-w-screen-lg mx-auto px-6 flex flex-col gap-4">
					<h2 className="text-2xl font-bold uppercase text-center">Lo Básico</h2>
					<section className="overflow-x-hidden max-w-screen-lg mx-auto py-2 cursor-grab active:cursor-grabbing select-none">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
							{defaultTopic &&
								defaultTopic.levels
									.slice(0, 3)
									.map((item, index) => <LevelCard key={index} item={item} topic={defaultTopic.slug} />)}
						</div>
					</section>
					{defaultTopic && (
						<div className="flex flex-col items-end w-full px-6">
							<Button as={Link} href={`/${defaultTopic.slug}`} color="primary">
								Ver mas
							</Button>
						</div>
					)}
				</div>
			</div>
			<section className="bg-slate-100">
				<div className="max-w-screen-lg mx-auto flex flex-col md:flex-row gap-8 py-16 px-6">
					<div className="flex flex-col gap-4 w-full md:w-1/2">
						<h1 className="text-2xl font-bold uppercase text-center">Temas populares</h1>
						<div className="grid grid-cols-2 gap-2 md:gap-4">
							{topicsPopular && topicsPopular.slice(0, 4).map((item, index) => <TopicCard key={index} item={item} />)}
						</div>
					</div>
					<div className="w-full md:w-1/2"></div>
				</div>
			</section>
		</main>
	);
}
