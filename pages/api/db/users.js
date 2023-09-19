import { db } from '@vercel/postgres';

export default async function handler(request, response) {
    
    const client = await db.connect();

    try {

        await client.sql`
        
        CREATE TABLE IF NOT EXISTS users (
            id bigint  NOT NULL,
            created_at timestamp with time zone DEFAULT now() NULL,
            a boolean DEFAULT true NULL,
            d boolean DEFAULT false NULL,
            label text DEFAULT uuid_generate_v4() NOT NULL,
            password text DEFAULT uuid_generate_v4() NOT NULL,
            files uuid DEFAULT uuid_generate_v4() NOT NULL,
            email text DEFAULT uuid_generate_v4() NOT NULL,
            areas bigint DEFAULT '100'::bigint NOT NULL,
            premium boolean DEFAULT false NOT NULL,
            telefone text  NULL,
            cidade text  NULL,
            estado text  NULL,
            bairro text  NULL,
            nascimento date  NULL,
            crm text  NULL,
            endereco text  NULL,
            identidade text  NULL,
            cep text  NULL,
            cpf text  NULL,
            whatsapp bigint  NULL,
            customforms character varying[]  NULL,
            especialidades smallint[]  NULL,
            rua text  NULL,
            numero text  NULL,
            complemento text  NULL,
            remedios jsonb  NULL,
            beta boolean DEFAULT true NULL,
            uuid uuid DEFAULT uuid_generate_v4() NOT NULL,
            vault_id bigint  NULL,
            concierge boolean DEFAULT false NOT NULL,
            admin boolean DEFAULT false NOT NULL,
            health boolean DEFAULT false NULL);
    
    `;


    } catch (error) {
        return response.status(500).json({ error });
    }

    const table = await client.sql`SELECT * FROM users;`;
    return response.status(200).json({ table: table.rows });

}