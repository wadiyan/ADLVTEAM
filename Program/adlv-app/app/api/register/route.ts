import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { name, email, password } = await req.json();
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return new Response(
    JSON.stringify({ message: "User registered successfully", user }),
    { status: 201 }
  );
}

// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma"; // Inisialisasi Prisma Client

// export async function POST(request: Request) {
//   const { name, email, password } = await request.json();

//   try {
//     const existingUser = await prisma.user.findUnique({ where: { email } });
//     if (existingUser) {
//       return NextResponse.json(
//         { error: "Email already in use" },
//         { status: 400 }
//       );
//     }

//     const newUser = await prisma.user.create({
//       data: { name, email, password },
//     });

//     return NextResponse.json(newUser, { status: 201 });
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }
