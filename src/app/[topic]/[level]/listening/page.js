'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getTopic, return_questions } from '@/services/topicFetching';
import { Card, CardBody } from '@nextui-org/react';

import TopicLevelHeader from '@/components/levels/TopicLevelHeader';
import PhrasePlayer from '@/components/speaking/PhrasePlayer';
import PhraseList from '@/components/speaking/PhraseList';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import MicrophoneRecorder from '@/components/speaking/MicrophoneRecorder';

function ListeningPage() {
    const path = usePathname();
    const pathSegments = path.split('/'); // Divide a URL em segmentos
    const params = {
        topic_slug: pathSegments[1],
        level_dif: parseInt(pathSegments[2], 10),
        quest_type: pathSegments[3]
    };

    const [phrase, setPhrase] = useState(null);
    const [frases, setFrases] = useState([]);
    const [topic, setTopic] = useState(null);
    const [level, setLevel] = useState(null);
    const [topicTitle, setTopicTitle] = useState(null);
    const [levelID, setLevelID] = useState(null);
    const [serverResponse, setServerResponse] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const { pregs, topicTitle, levelId } = await return_questions(params.topic_slug, params.level_dif, params.quest_type);
            const formattedFrases = pregs.map(q => {
                const question = JSON.parse(q.question);
                return [
                    { portuguese: question.frase1 },
                    { portuguese: question.frase2 },
                    { portuguese: question.frase3 },
                    { portuguese: question.frase4 },
                    { portuguese: question.frase5 }
                ];
            }).flat();
            setFrases(formattedFrases);
            setTopicTitle(topicTitle);
            setLevelID(levelId);
        }
        fetchData();
    }, [params.topic_slug, params.level_dif, params.quest_type]);

    const handleSelectPhrase = (newPhrase) => {
        setPhrase(newPhrase);
        setServerResponse(null); // Reseta a resposta do servidor quando uma nova frase é selecionada
    };

    const routesBreacrumbs = [
        {
            title: 'Inicio',
            url: '/',
        },
        {
            title: topic?.title,
            url: topic?.slug,
        },
        {
            title: topic?.levels[params.level - 1].title,
            url: topic?.levels[params.level - 1].id,
        },
        {
            title: 'Escucha',
            url: 'Listening',
        },
    ];

    const getPhraseIndex = (phrase, phrases, level_dif) => {
        const index = phrases.findIndex(p => p.portuguese === phrase?.portuguese) + 1;
        const final = index + ((level_dif - 1) * 5);
        return final;
    };

    const handleRecord = (isRecording) => {
        console.log(isRecording ? 'Recording started' : 'Recording stopped');
    };

    const handleServerResponse = (response) => {
        setServerResponse(response);
    };

    const getBackgroundColor = (score) => {
        const green = Math.floor(score * 255);
        const red = Math.floor((1 - score) * 255);
        return `rgba(${red}, ${green}, 0, 0.2)`; // Ajuste conforme necessário
    };

    return (
        <div className="bg-gradient-to-r from-blue-100 to-gray-100">
            <div className="max-w-screen-lg mx-auto py-6 px-6 flex flex-col gap-4 items-top">
                <div className="flex flex-col gap-4 w-full">
                    <Breadcrumbs items={routesBreacrumbs} />
                    {level && <TopicLevelHeader title={level.title} chip={['nivel:', level.id].join(' ')} />}
                </div>
                <div className="flex-grow flex flex-col md:flex-row items-start justify-between w-full gap-4">
                    <PhraseList
                        phrases={frases}
                        onSelect={handleSelectPhrase}
                    />
                    <div className="flex-grow flex flex-col items-center justify-between gap-4">
                        <Card className="shadow-md select-none w-full">
                            <PhrasePlayer
                                phrasePortuguese={phrase?.portuguese}
                                phraseSpanish={phrase?.spanish}
                                audioPath={`https://brasilearn-api-gateway.fly.dev/media/audios/${params.topic_slug}/${getPhraseIndex(phrase, frases, params.level_dif)}.mp3`}
                            />
							<h2 className="text-center text-blue-900 mb-2 text-3xl font-semibold">Intenta repetir lo que escuchaste</h2>
                            <MicrophoneRecorder className= "mb-4"
                                onRecord={handleRecord}
                                referenceText={phrase?.portuguese}
                                onServerResponse={handleServerResponse}
                            />
                        </Card>
                        {serverResponse && (
                            <Card className="shadow-md select-none w-full mt-4">
                                <CardBody style={{ backgroundColor: getBackgroundColor(serverResponse.score) }}>
                                    <h2 className="font-bold text-xl">Transcrição: {serverResponse.transcription}</h2>
                                    <p className="text-lg">Pontuação: {serverResponse.score.toFixed(2)}</p>
                                </CardBody>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListeningPage;
