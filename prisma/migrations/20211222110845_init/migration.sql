/*
  Warnings:

  - A unique constraint covering the columns `[studentId]` on the table `ExitCauses` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `ExitCauses_studentId_key` ON `ExitCauses`(`studentId`);
