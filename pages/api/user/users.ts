import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const result = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
      },
    });

    return res.status(201).json(result);
  } else if (req.method === "GET") {
    const result = await prisma.user.findMany();
    return res.status(200).json(result);
  } else if (req.method === "DELETE") {
    const result = await prisma.user.delete({
      where: {
        id: req.body.id,
      },
    });

    return res.status(201).json(result);
  } else if (req.method === "PUT") {
    const result = await prisma.user.update({
      where: {
        id: req.body.id,
      },
      data: {
        username: "Admin",
      },
    });
  }
}
