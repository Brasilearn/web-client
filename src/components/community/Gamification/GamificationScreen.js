import React, { useState } from 'react';

const GamificationScreen = ({ users, setUsers }) => {
    // Inicializar las tarjetas de aprendizaje
    const [flashcards, setFlashcards] = useState([
        { portuguese: 'Olá', translation: 'Hola' },
        { portuguese: 'Obrigado', translation: 'Gracias' },
        { portuguese: 'Bom dia', translation: 'Buenos dias' },
        { portuguese: 'Boa noite', translation: 'Buenas noches' },
        // Añadir más flashcards según sea necesario
    ]);
    const [currentCard, setCurrentCard] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [points, setPoints] = useState(0);

    // Manejar la respuesta del usuario
    const handleSubmitAnswer = () => {
        if (userAnswer.trim().toLowerCase() === flashcards[currentCard].translation.toLowerCase()) {
            setPoints(points + 1);
            const updatedUsers = users.map(user =>
                user.id === 1 ? { ...user, points: user.points + 1 } : user
            );
            setUsers(updatedUsers);
        }
        setUserAnswer('');
        setCurrentCard((currentCard + 1) % flashcards.length);
    };

    return (
        <div className="gamification-screen p-6 border rounded-lg shadow-lg bg-white">
            <h4 className="text-2xl font-bold mb-4 text-center text-blue-600">Gamificación</h4>
            <p className="text-center mb-6">¡Participa en actividades y gana puntos!</p>
            <div className="flashcard bg-blue-100 p-6 rounded-lg shadow-md text-center">
                <p className="text-3xl font-semibold mb-4 text-blue-800">{flashcards[currentCard].portuguese}</p>
                <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Escribe la traducción"
                    className="border border-blue-300 p-2 rounded w-full mb-4"
                />
                <button
                    onClick={handleSubmitAnswer}
                    className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition"
                >
                    Enviar
                </button>
            </div>
            <div className="points mt-6 text-center">
                <h5 className="text-xl font-bold text-blue-800">Puntos: {points}</h5>
            </div>
            {/* Aquí podrías agregar una sección de leaderboard en el futuro usando WebSockets */}
        </div>
    );
};

export default GamificationScreen;
