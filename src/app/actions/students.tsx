"use server";

import prisma from "@/lib/prisma";

export async function createStudent(data: {
  Name: string;
  Email: string;
  IsActive?: boolean;
}) {
  try {
    const student = await prisma.studentDetails.create({
      data: {
        Name: data.Name,
        Email: data.Email,
        IsActive: data.IsActive ?? false,
      },
    });
    return student;
  } catch (error) {
    console.error("Error creating student:", error);
    throw error;
  }
}

export async function getActiveStudents() {
  return await prisma.studentDetails.findMany({
    where: {
      IsActive: true,
    },
  });
}
export async function getStudentById(id: string) {
  return await prisma.studentDetails.findUnique({
    where: { id },
  });
}

export async function deleteStudentById(id: string) {
  try {
    const student = await prisma.studentDetails.delete({
      where: { id },
    });
    return student;
  } catch (error) {
    console.error("Error deleting student:", error);
    throw error;
  }
}

