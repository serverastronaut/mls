// app/api/novedades/[id]/route.js
import pool from '@/lib/db';

export async function GET(request, { params }) {
  const { id } = params;
  try {
    const client = await pool.connect();
    const { rows } = await client.query('SELECT * FROM novedades WHERE "Id" = $1', [id]);
    client.release();
    
    if (rows.length === 0) {
      return new Response('Novedad not found', { status: 404 });
    }
    
    return new Response(JSON.stringify(rows[0]), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching novedad:', error);
    return new Response('Error fetching data', { status: 500 });
  }
}
