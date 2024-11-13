import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(request) {

    const data = await request.json();
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const nuevaPropiedad = await prisma.propiedades.create({
      data: {
          Titulo: data.titulo,
          Descripcion: data.descripcion,
          InmobiliariaId: parseInt(session.user.inmobiliariaid)
      },
    });

    return NextResponse.json(nuevaPropiedad, { status: 201 });

}


// Nueva función GET para listar las propiedades
export async function GET(request) {
  const session = await getServerSession(authOptions);

  if (!session) {
      return NextResponse.json(
          { message: "Unauthorized" },
          { status: 401 }
      );
  }

  const propiedades = await prisma.propiedades.findMany({
      where: {
          InmobiliariaId: parseInt(session.user.inmobiliariaid),
      },
  });

  return NextResponse.json(propiedades, { status: 200 });
}
