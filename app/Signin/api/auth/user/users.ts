import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const users = await prisma.user.findMany();
  res.json(users);

  //   const { name, username, email, password } = req.body;
  //   const result = await prisma.user.create({
  //     data: {
  //       //   name: name,
  //       //   email: email,
  //       //   username: username,
  //       //   password: password,
  //       name: "name",
  //       email: "email",
  //       username: "username",
  //       password: "password",
  //     },
  //   });
  //   return res.status(201).json(result);
}
