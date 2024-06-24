export const sendMessages = async (userId, message) => {
    // Simulamos una respuesta del servidor
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: `Respuesta automática a: ${message}` });
        }, 1000);
    });
};
