'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Card, CardBody } from '@nextui-org/react';
import TopicLevelHeader from '@/components/levels/TopicLevelHeader';
import Timer from '@/components/speaking/Timer';
import MicrophoneRecorder from '@/components/speaking/MicrophoneRecorder';
import PhraseList from '@/components/speaking/PhraseList';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { getTopic, return_questions } from '@/services/topicFetching';

function SpeakingPage() {
    const path = usePathname();
    const pathSegments = path.split('/'); // Divide a URL em segmentos
    const params = {
        topic_slug: pathSegments[1],
        level_dif: parseInt(pathSegments[2], 10),
        quest_type: pathSegments[3]
    };

    const [topicTitle, setTopicTitle] = useState(null);
    const [frases, setFrases] = useState([]);
    const [isRecording, setIsRecording] = useState(false);
    const [phrase, setPhrase] = useState(null);
    const [topic, setTopic] = useState(null);
    const [level, setLevel] = useState(null);
    const [serverResponse, setServerResponse] = useState(null);
    const [levelID, setLevelID] = useState(null);

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

    console.log(frases);

    const handleRecord = (recording) => {
        setIsRecording(recording);
    };

    const handleSelectPhrase = (newPhrase) => {
        setPhrase(newPhrase);
        setIsRecording(false);
    };

    const handleServerResponse = (response) => {
        setServerResponse(response);
    };

    const getBackgroundColor = (score) => {
        const green = Math.floor(score * 255);
        const red = Math.floor((1 - score) * 255);
        return `rgba(${red}, ${green}, 0, 0.2)`; // A última parte '0.5' é a opacidade, ajusta conforme necessário
    };

    return (
        <div className="bg-gradient-to-r from-blue-100 to-gray-100">
            <div className="max-w-screen-lg mx-auto py-6 px-6 flex flex-col gap-4 items-top">
                <div className="flex flex-col gap-4 w-full">
                    <Breadcrumbs />
                    {level && <TopicLevelHeader title={level.title} chip={['nivel:', level.id].join(' ')} />}
                </div>
                <div className="flex-grow flex flex-col md:flex-row items-start justify-between w-full gap-4">
                    <PhraseList
                        phrases={frases}
                        onSelect={handleSelectPhrase}
                    />
                    <div className="flex-grow flex flex-col items-center justify-between gap-4">
                        <Card className="shadow-md select-none w-full">
                            <CardBody>
                                <h1 className="font-bold text-xl">Frase Seleccionada: {phrase ? phrase.portuguese : 'Nenhuma frase selecionada'}</h1>
                            </CardBody>
                        </Card>
                        <div className="flex flex-col gap-2">
                            <Timer isRecording={isRecording} />
                            <MicrophoneRecorder onRecord={handleRecord} referenceText={phrase ? phrase.portuguese : ''} onServerResponse={handleServerResponse} />
                        </div>
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

export default SpeakingPage;
