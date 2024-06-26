'use client';
import React, { useState } from 'react';
import { Button, Card } from '@nextui-org/react';

const ReportForm = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
        <div className="fixed bottom-24 right-4">  {/* Ajuste o valor de bottom para posicionar acima do rodapé */}
            <Button
                onClick={toggleFormVisibility}
                className="bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-700 transition duration-300">
                Reportar Problema
            </Button>
            {isFormVisible && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="relative bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
                        <Button
                            onClick={toggleFormVisibility}
                            className="absolute top-2 right-2 bg-red-500 text-white font-bold py-1 px-3 rounded-full hover:bg-red-700 transition duration-300 z-50">
                            Fechar
                        </Button>
                        <Card className="p-4 flex-grow flex flex-col items-center">
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSd6wMVfvV-yxo0sfN7vxZDUwcV0rQfkWyMnekOuF7_MA-EFsA/viewform?embedded=true"
                                width="100%"
                                height="400"
                                className="w-full"
                                style={{ border: 0 }}
                            >
                                Carregando…
                            </iframe>
                        </Card>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReportForm;
