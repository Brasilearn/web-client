'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Card, CardBody } from '@nextui-org/react';
import TopicLevelHeader from '@/components/levels/TopicLevelHeader';
import Timer from '@/components/speaking/Timer';
import MicrophoneRecorder from '@/components/speaking/MicrophoneRecorder';
import PhraseList from '@/components/speaking/PhraseList';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { getTopic } from '@/services/topicFetching';

function SpeakingPage() {
    const path = usePathname();
    const params = {
        topic: path.split('/')[1],
        level: path.split('/')[2],
    };

    const initialPhrase = { portuguese: 'Olá, como você está?', spanish: 'Hola, ¿cómo estás?' };

    const [isRecording, setIsRecording] = useState(false);
    const [phrase, setPhrase] = useState(initialPhrase);
    const [topic, setTopic] = useState(null);
    const [level, setLevel] = useState(null);
    const [serverResponse, setServerResponse] = useState(null);

    React.useEffect(() => {
        async function fetchData() {
            const topicData = await getTopic(params.topic);
            setTopic(topicData);
            setLevel(topicData.levels[params.level - 1]);
        }
        fetchData();
    }, [params.topic, params.level]);

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
                        phrases={[
                            initialPhrase,
                            { portuguese: 'Bom dia!', spanish: '¡Buenos días!' },
                            { portuguese: 'Boa noite.', spanish: 'Buenas noches.' },
                            { portuguese: 'Como vai?', spanish: '¿Cómo va?' },
                            { portuguese: 'Tudo bem?', spanish: '¿Todo bien?' },
                            { portuguese: 'Até logo!', spanish: '¡Hasta luego!' },
                            { portuguese: 'Obrigado!', spanish: '¡Gracias!' },
                            { portuguese: 'Desculpe.', spanish: 'Perdón.' },
                            { portuguese: 'Eu te amo.', spanish: 'Te amo.' },
                            { portuguese: 'Feliz aniversário!', spanish: '¡Feliz cumpleaños!' },
                        ]}
                        onSelect={handleSelectPhrase}
                    />
                    <div className="flex-grow flex flex-col items-center justify-between gap-4">
                        <Card className="shadow-md select-none w-full">
                            <CardBody>
                                <h1 className="font-bold text-xl">Frase Seleccionada: {phrase.portuguese}</h1>
                            </CardBody>
                        </Card>
                        <div className="flex flex-col gap-2">
                            <Timer isRecording={isRecording} />
                            <MicrophoneRecorder onRecord={handleRecord} referenceText={phrase.portuguese} onServerResponse={handleServerResponse} />
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
