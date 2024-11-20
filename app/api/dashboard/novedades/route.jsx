import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET(request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  let novedades;

  novedades = await prisma.novedades.findMany({
    where: {
      MostrarEnRed: 1,
      Activo: 1,
    },
  });

  if (!novedades){
    return NextResponse.json(
      { message: "No existen registros a mostrar" },
      { status: 500 }
    );
  }


  return NextResponse.json(novedades, { status: 200 });
}

export async function POST(request) {

  const data = await request.json();
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  const nuevaNovedad = await prisma.novedades.create({
    data: {
        TituloNovedad: data.titulo,
        SubTituloNovedad: data.subtitulo,
        TextoNovedad: data.texto
    },
  });

  return NextResponse.json(nuevaNovedad, { status: 201 });

}