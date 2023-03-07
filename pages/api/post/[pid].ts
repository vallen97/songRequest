import prisma from "../../../src/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { pid } = req.query as any;
  // res.end(`Post: ${pid}`);

  if (req.method === "GET") {
    const user = await prisma.user.findUnique({
      where: {
        email: pid,
      },
    });
    return res.status(201).json(user);
  }
}
