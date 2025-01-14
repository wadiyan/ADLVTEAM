import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const secretKey = process.env.JWT_SECRET_KEY || "Kiis";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return new Response(
      JSON.stringify({ error: "Invalid email or password" }),
      { status: 401 }
    );
  }

  const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: "1d" });
  return new Response(JSON.stringify({ token, user }), { status: 200 });
}

// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma"; // Inisialisasi Prisma Client

// export async function POST(request: Request) {
//   const { email, password } = await request.json();

//   try {
//     const user = await prisma.user.findUnique({ where: { email } });

//     if (!user || user.password !== password) {
//       return NextResponse.json(
//         { error: "Invalid email or password" },
//         { status: 401 }
//       );
//     }

//     // Tambahkan token atau session handling di sini
//     return NextResponse.json({ message: "Login successful" });
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }
