/*
  Warnings:

  - You are about to drop the column `submmitter` on the `SongRequest` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SongRequest" DROP COLUMN "submmitter",
ADD COLUMN     "submitter" TEXT;
