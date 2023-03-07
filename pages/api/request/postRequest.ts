import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../src/lib/prisma";

// POST /api/song
// Required fields in body: songName, submitter, songURL
export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const result = await prisma.songRequest.create({
        data: {
            songName: req.body.songName,
            submitter: req.body.submitter,
            songURL: req.body.songURL,
        },
    });

    return res.status(201).json(result);
}
