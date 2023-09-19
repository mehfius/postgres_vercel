import { db } from '@vercel/postgres';

export default async function handler(request, response) {
    
    const client = await db.connect();

    try {

        await client.sql`
    CREATE TABLE public.category (
        id bigint  NOT NULL,
        created_at timestamp without time zone DEFAULT now() NULL,
        a boolean DEFAULT true NULL,
        d boolean DEFAULT false NULL,
        url text  NULL,
        label text  NULL,
        files uuid DEFAULT uuid_generate_v4() NULL,
        color text  NULL);
    
    `;


    } catch (error) {
        return response.status(500).json({ error });
    }

    const category = await client.sql`SELECT * FROM Category;`;
    return response.status(200).json({ category: category.rows });

}