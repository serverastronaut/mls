import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(request) {
    const data = await request.json();

    console.log(data);

    const session = await getServerSession(authOptions);
    console.log(session);

      const nuevaPropiedad = await prisma.propiedades.create({
        data: {
            Titulo: data.titulo,
            Descripcion: data.descripcion,
            // InmobiliariaId: {
            //     connect: {
            //         id: parseInt(session.user.id),
            //     },
            // },
        },
      });

      return NextResponse.json(nuevaPropiedad, { status: 201 });


    // const session = await getServerSession(authOptions);

    // console.log(session);

//   if (!session) {
//     return NextResponse.json(
//       { message: "Unauthorized" },
//       { status: 401 }
//     );
//   }

//   const newProject = await prisma.project.create({
//     data: {
//       title: data.title,
//       description: data.description,
//       user: {
//         connect: {
//           id: parseInt(session.user.id),
//         },
//       },
//     },
//   });

//   return NextResponse.json(newProject, { status: 201 });
}
