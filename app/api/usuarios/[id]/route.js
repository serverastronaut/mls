// app/api/usuarios/route.js
const { query } = require('../../lib/db');

// Obtener todos los usuarios
export async function GET() {
  try {
    const res = await query('SELECT * FROM usuarios');
    return new Response(JSON.stringify(res.rows), { status: 200 });
  } catch (error) {
    console.error('Error fetching users:', error);
    return new Response(JSON.stringify({ error: 'Error fetching users' }), { status: 500 });
  }
}

// Crear un nuevo usuario
/*export async function POST(request) {
  const { nombre, correo } = await request.json();

  try {
    const res = await query(
      'INSERT INTO usuarios (nombre, correo) VALUES ($1, $2) RETURNING *',
      [nombre, correo]
    );
    return new Response(JSON.stringify(res.rows[0]), { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return new Response(JSON.stringify({ error: 'Error creating user' }), { status: 500 });
  }
}*/
