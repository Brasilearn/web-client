// components/speaking/MicrophoneRecorder.js

import React, { useState, useRef } from 'react';
import { Button } from '@nextui-org/react';
import { FaMicrophone } from 'react-icons/fa';
import { upload_audio } from '@/services/audio_transcription';

const MicrophoneRecorder = ({ onRecord, referenceText, onServerResponse, className ,mic_size=48}) => {
    const [isRecording, setIsRecording] = useState(false);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);

    const handleStartRecording = async () => {
        if (!isRecording) {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            mediaRecorderRef.current.ondataavailable = event => {
                audioChunksRef.current.push(event.data);
            };
            mediaRecorderRef.current.start();
            setIsRecording(true);
            onRecord(true);
        } else {
            mediaRecorderRef.current.stop();
            mediaRecorderRef.current.onstop = async () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
                const response = await uploadAudio(audioBlob, referenceText);
                onServerResponse(response);
                audioChunksRef.current = [];
                setIsRecording(false);
                onRecord(false);
            };
        }
    };

    const uploadAudio = async (audioBlob, referenceText) => {
        // Função fornecida pelo usuário
        const response = await upload_audio(audioBlob, referenceText);
        return response;
    };

    return (
        <div className={`flex flex-col items-center justify-center mt-4 ${className}`}>
            <button
                
                onClick={handleStartRecording}
                className={`group rounded-full w-fit h-fit flex items-center justify-center ${
                    isRecording ? 'bg-red-500' : 'bg-blue-500'
                } transition duration-300 text-white p-12` }
            >
                <FaMicrophone size={mic_size} className="text-white group-hover:text-white/80 w-30 h-30" />
            </button>
        </div>
    );
};

export default MicrophoneRecorder;
