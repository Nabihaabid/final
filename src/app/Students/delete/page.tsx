import { deleteStudentById } from "@/app/actions/students";
import { redirect } from "next/navigation";

interface DeleteStudentPageProps {
  params: { id: string };
}

export default async function DeleteStudentPage({
  params,
}: DeleteStudentPageProps) {
  await deleteStudentById(params.id);
  redirect("/Students/list");

  // This will never render because redirect throws
  return null;
}
