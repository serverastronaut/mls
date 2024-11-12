import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
// import bcrypt from "bcrypt";

export async function POST(request) {
  const data = await request.json();
  console.log(data);

  // const salt = await bcrypt.genSalt(10);
  // data.Clave = await bcrypt.hash(data.Clave, salt);

  const newUser = await prisma.usuarios.create({
    data,
  });

  const { Clave, ...user } = newUser;

  return NextResponse.json(user, {
    status: 201,
  });
}