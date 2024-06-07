import { signUpSchema } from "@/lib/types";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'



export async function POST(request: Request) {


  const prisma = new PrismaClient()
  
  await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  })

 const allUsers = await prisma.user.findMany()
  console.log(allUsers)



  const body: unknown = await request.json();

  const result = signUpSchema.safeParse(body);

  // check out Zod's .flatten() method for an easier way to process errors
  let zodErrors = {};
  if (!result.success) {
      console.log("sign up ko");
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
  }
  else {
    console.log("signup ok");
  }

  return NextResponse.json(
    Object.keys(zodErrors).length > 0
      ? { errors: zodErrors }
      : { success: true }
  );
}