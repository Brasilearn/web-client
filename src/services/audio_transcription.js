export const upload_audio = async (audioBlob, referenceText) => {
    const formData = new FormData();
    formData.append('file', audioBlob, 'audio.wav');
    formData.append('reference_text', referenceText);

    try {
        const response = await fetch('https://brasilearn-api-gateway.fly.dev/evaluate_pronunciation/', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar o áudio');
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Erro ao fazer a requisição:', error);
        throw error;
    }
};
