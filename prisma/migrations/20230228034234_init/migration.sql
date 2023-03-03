-- CreateTable
CREATE TABLE "SongRequest" (
    "id" SERIAL NOT NULL,
    "songName" TEXT NOT NULL,
    "submmitter" TEXT,
    "songURL" TEXT,

    CONSTRAINT "SongRequest_pkey" PRIMARY KEY ("id")
);
