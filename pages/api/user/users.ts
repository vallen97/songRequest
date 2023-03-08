import prisma from "../../../src/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const hash = await bcrypt.hash(req.body.password, 10);

    const result = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: hash,
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
        name: "Admin",
      },
    });
  } else {
    const user = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });
    return res.status(201).json(user);
  }
}
