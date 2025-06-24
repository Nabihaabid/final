import { deleteStudentById } from "@/app/actions/students";
import { redirect } from "next/navigation";

export default async function DeleteStudentPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    // Call your server action to delete
    await deleteStudentById(params.id);
    // After deletion, redirect to list page
    redirect("/Students/list");
  } catch (error) {
    // Render error if deletion fails
    return (
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Delete Student</h1>
        <p className="text-red-600">Error deleting student: {String(error)}</p>
      </div>
    );
  }
}
