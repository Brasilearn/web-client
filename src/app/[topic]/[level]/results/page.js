'use client';
import React from 'react';
import CircularProgress from '@/components/results/CircularProgress';
import Message from '@/components/results/Message';
import ActionButtons from '@/components/results/ActionButtons';
import VoiceFlowChat from '@/components/results/VoiceFlowChat';
import ReportForm from '@/components/forms/ReportForm';

export default function ResultsPage({ params }) {
    console.log(params.topic, params.level);

    const percent = 50;

    return (
        <div className="container flex flex-col items-center justify-center p-6 h-full">
            <div className="bg-primary-50 p-10 rounded-md h-full w-full">
                <div className="flex flex-col items-center justify-center">
                    <CircularProgress porcentaje={percent} />
                    <Message porcentaje={percent} />
                    <ActionButtons />
                </div>
            </div>
            <ReportForm />
            {/* <VoiceFlowChat /> */}
        </div>
    );
}
