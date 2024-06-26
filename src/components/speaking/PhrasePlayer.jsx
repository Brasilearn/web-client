import React, { useState, useEffect } from 'react';
import { Card, Button, Progress } from '@nextui-org/react';
import { FaPlay, FaRedo } from 'react-icons/fa';

function PhrasePlayer({ phrasePortuguese, phraseSpanish, audioPath }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [value, setValue] = useState(0);
    const [audio, setAudio] = useState(null);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const newAudio = new Audio(audioPath);
        
        newAudio.onloadedmetadata = () => {
            setDuration(newAudio.duration);
        };

        newAudio.onended = () => {
            setIsPlaying(false);
            setValue(100); // Progresso completo quando o áudio termina
        };

        newAudio.onerror = () => {
            console.error('Erro ao carregar o áudio.');
        };

        setAudio(newAudio);
    }, [audioPath]);

    useEffect(() => {
        let intervalId;

        if (isPlaying) {
            intervalId = setInterval(() => {
                setValue((audio.currentTime / audio.duration) * 100);
            }, 100); // Atualiza a cada 100ms
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isPlaying, audio]);

    const handlePlay = () => {
        if (audio) {
			setIsPlaying(false); // Para a atualização do progresso
            setValue(0); // Reseta o progresso
			setTimeout(()=>{
				audio.currentTime = 0;
				audio.play().catch((error) => {
					console.error('Erro ao reproduzir o áudio:', error);
				});
				setIsPlaying(true);
			}, 300);
        }
    };

    const handleRepeat = () => {
        if (audio) {
            setIsPlaying(false); // Para a atualização do progresso
            setValue(0); // Reseta o progresso
            setTimeout(() => {
                audio.currentTime = 0;
                audio.play().catch((error) => {
                    console.error('Erro ao reproduzir o áudio:', error);
                });
                setIsPlaying(true);
            }, 300); // Aguarda 100ms antes de reiniciar a reprodução
        }
    };

    return (
        <Card className="text-center px-4 py-8">
            <h2 className="text-blue-800 mb-2 text-3xl font-semibold">{phrasePortuguese}</h2>
            <h3 className="text-gray-600 mb-4 text-lg">{phraseSpanish}</h3>
            <div className="flex justify-center items-center mb-4">
                <Progress
                    aria-label="Progresso de reprodução"
                    size="md"
                    value={value}
                    color="success"
                    showValueLabel={true}
                    className="max-w-md"
                />
            </div>
            <div>
                <Button
                    onClick={handlePlay}
                    className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 transition duration-300 mr-4">
                    <FaPlay className="inline-block mr-2" /> Escuchar
                </Button>
                <Button
                    onClick={handleRepeat}
                    className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-full hover:bg-yellow-700 transition duration-300">
                    <FaRedo className="inline-block mr-2" /> Repetir
                </Button>
            </div>
        </Card>
    );
}

export default PhrasePlayer;
