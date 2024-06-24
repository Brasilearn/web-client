'use client';
import React, { useState } from 'react';
import Title from '@/components/common/Title';
import Chat from '@/components/community/Chat/Chat';
import GamificationScreen from '@/components/community/Gamification/GamificationScreen';

const CommunityPage = () => {
    const mockUser = {
        id: 1,
        name: 'Admin',
        imageUrl: 'https://via.placeholder.com/150',
    };

    const [users, setUsers] = useState([
        { id: 1, name: 'Admin', status: 'conectado' },
        { id: 2, name: 'User1', status: 'ocupado' },
        { id: 3, name: 'User2', status: 'ausente' },
    ]);

    return (
        <div className="container flex flex-col md:flex-row gap-4 py-6">
            <aside className="w-full max-w-sm flex flex-col gap-4">
                <Title size="medium" color="primary">
                    Comunidad
                </Title>
                <Chat user={mockUser} users={users} setUsers={setUsers} />
            </aside>
            <main className="w-full flex flex-col gap-4">
                <GamificationScreen />
            </main>
        </div>
    );
};

export default CommunityPage;
