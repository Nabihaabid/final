import prisma from "@/lib/prisma";

export default async function StudentListPage() {
  const students = await prisma.studentDetails.findMany({
    where: {
      IsActive: true,
    },
  });

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Active Students</h1>
      {students.length === 0 ? (
        <p>No active students found.</p>
      ) : (
        <ul className="space-y-2">
          {students.map((student) => (
            <li
              key={student.id}
              className="border p-2 rounded shadow-sm flex justify-between"
            >
              <span>
                {student.Name} ({student.Email})
              </span>
              <span className="text-green-600 font-medium">Active</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
