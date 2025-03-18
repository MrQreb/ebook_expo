import { envs } from "@/src/config/envs";

export async function login(email: string, password: string) {
    const requestBody = {
        user_email: email,
        user_password: password,
    };

    try {
        const response = await fetch(`${envs.API_EBOOK}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            const errorText = await response.text();
            const errorData = JSON.parse(errorText); 
            throw {
                status: response.status,
                message: errorData.message,
                error: errorData.error,
            };
        }

        return await response.json();
    } catch (error) {
        console.error("Error creating account:", error);
        throw error; 
    }
}