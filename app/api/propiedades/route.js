import pool from '@/lib/db';

//listar propiedades
export async function GET() {
  try {
    // Obtiene una conexión del pool y ejecuta la consulta
    const client = await pool.connect();
    const { rows } = await client.query('SELECT * FROM propiedades');
    client.release(); // Libera la conexión de vuelta al pool
    
    return new Response(JSON.stringify(rows), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching data:', error); 
    return new Response('Error fetching data', { status: 500 });
  }
}

//agregar nueva propiedad
export async function POST(request) {
  /*const { titulo, subtitulo, texto } = await request.json();
  try {
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO propiedades ("TituloNovedad", "SubtituloNovedad", "TextoNovedad") VALUES ($1, $2, $3) RETURNING *',
      [titulo, subtitulo, texto]
    );
    client.release();

    return new Response(JSON.stringify(result.rows[0]), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error creating propiedad:', error);
    return new Response('Error creating propiedad', { status: 500 });
  }*/
}
