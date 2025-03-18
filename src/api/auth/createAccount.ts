import { envs } from "@/src/config/envs";

export async function createAccount(email: string, password: string) {
    const requestBody = {
        user_email: email,
        user_password: password,
        user_roles: ["user"],
    };

    try {
        const response = await fetch(`${envs.API_EBOOK}/auth/create`, {
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
                message: errorData.message || "Error desconocido",
                error: errorData.error || "Unknown Error",
            };
        }

        return await response.json();
    } catch (error) {
        console.error("Error creating account:", error);
        throw error; 
    }
}