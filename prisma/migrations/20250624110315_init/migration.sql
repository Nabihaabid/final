-- CreateTable
CREATE TABLE "StudentDetails" (
    "id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "IsActive" BOOLEAN,
    "Email" TEXT NOT NULL,

    CONSTRAINT "StudentDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StudentDetails_id_key" ON "StudentDetails"("id");
