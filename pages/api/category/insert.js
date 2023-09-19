import { db } from '@vercel/postgres';
 
export default async function handler(request, response) {
  const client = await db.connect();
 
  try {
    await client.sql`CREATE TABLE IF NOT EXISTS Category ( Label varchar(255), Owner varchar(255) );`;
    const label = ['Fiona', 'Lucy'];
    await client.sql`INSERT INTO Category (Label, Owner) VALUES (${label[0]}, ${label[1]});`;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  const category = await client.sql`SELECT * FROM Category;`;
  return response.status(200).json({ category: category.rows });
}