import { db } from '@vercel/postgres';
 
export default async function handler(request, response) {
  const client = await db.connect();
 

 
  const table = await client.sql`SELECT * FROM Pets;`;
  return response.status(200).json({ table: table.rows });
}