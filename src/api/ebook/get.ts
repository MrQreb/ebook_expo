import { envs } from "@/src/config/envs";

export interface Ebook {
    ebook_author: string;
    ebook_id: number;
    ebook_image_url: string;
    ebook_is_deleted: boolean;
    ebook_name: string;
    ebook_pdf_url: string;
    ebook_public_image_id: string;
    ebook_public_pdf_id: string;
    ebook_published: string;
}

interface queryParams {
    name?: string;
    limit?: number;
    page?: number;
}

export async function getBooks({ name, limit = 10, page = 1 }: queryParams = {}) {

    const query: URLSearchParams = new URLSearchParams();
    if (name) query.append("name", name);
    if (limit) query.append("limit", limit.toString());
    if (page) query.append("page", page.toString());

    try {
        const response = await fetch(`${envs.API_EBOOK}/ebook/get?${query.toString()}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
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
        throw error;
    }
}
