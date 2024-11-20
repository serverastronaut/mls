import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import bcrypt from 'bcryptjs';

export async function POST(request) {
  const data = await request.json();
  console.log(data);

  // Hashear la contraseña
  data.Clave = await bcrypt.hash(data.Clave, 10);

  const { searchParams } = new URL(request.url);
  const tipo = searchParams.get('tipo'); // Obtener el valor del parámetro 'tipo'

  if (tipo === "cliente") {
    try {
      const newClient = await prisma.usuarios.create({
        data: {
          Nombre: data.Nombre,
          Email: data.Email,
          Clave: data.Clave,
          RolId: 4,
        },
      });

      // Excluir la clave antes de retornar el usuario
      const { Clave, ...user } = newClient;

      return NextResponse.json(user, {
        status: 201,
      });
    } catch (error) {
      console.error('Error creating client:', error);
      return NextResponse.json({ message: 'Failed to create client.' }, { status: 500 });
    }
  }

  if (tipo === "inmobiliaria") {
    try {
      // Usar transacción para crear inmobiliaria y usuario
      const result = await prisma.$transaction(async (prisma) => {
        // Crear la nueva inmobiliaria
        const nuevaInmobiliaria = await prisma.inmobiliarias.create({
          data: {
            Inmobiliaria: data.NombreInmobiliaria, // Asegúrate de pasar el nombre de la inmobiliaria desde el `data`
          },
        });

        // Crear el usuario utilizando el id de la inmobiliaria recién creada
        const newUser = await prisma.usuarios.create({
          data: {
            Nombre: data.Nombre,
            Email: data.Email,
            Clave: data.Clave,
            InmobiliariaId: nuevaInmobiliaria.Id, // Usar el id de la inmobiliaria creada
            RolId: 2,
          },
        });

        // Excluir la clave antes de retornar el usuario
        const { Clave, ...user } = newUser;

        return user;
      });

      return NextResponse.json(result, {
        status: 201,
      });
    } catch (error) {
      console.error('Error creating inmobiliaria and user:', error);
      return NextResponse.json({ message: 'Failed to create inmobiliaria and user.' }, { status: 500 });
    }
  }
}
