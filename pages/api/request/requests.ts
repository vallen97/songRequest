import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../src/lib/prisma";

// POST /api/song
// Required fields in body: songName, submitter, songURL
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const result = await prisma.songRequest.create({
      data: {
        songName: req.body.songName,
        submitter: req.body.submitter,
        songURL: req.body.songURL,
      },
    });

    return res.status(201).json(result);
  } else if (req.method === "GET") {
    const result = await prisma.songRequest.findMany();
    // res.json(result);
    return res.status(200).json(result);
  } else if (req.method === "DELETE") {
    const result = await prisma.songRequest.delete({
      where: {
        id: req.body.id,
      },
    });

    return res.status(201).json(result);
  } else if (req.method === "PUT") {
    const result = await prisma.songRequest.update({
      where: {
        id: req.body.id,
      },
      data: {
        songName: "Completed",
      },
    });
  } else {
    const result = await prisma.songRequest.findMany();
    // res.json(result);
    return res.status(200).json(result);
  }
}
