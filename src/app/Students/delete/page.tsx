import prisma from "@/lib/prisma";

export default async function DeleteStudentPage() {
    const students = await prisma.studentDetails.findMany({
        where: { IsActive: true },
        select: { id: true, Name: true, Email: true },
    });

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Delete Student</h1>
            {students.length === 0 ? (
                <p>No active students found.</p>
            ) : (
                <ul className="space-y-2">
                    {students.map((student) => (
                        <li
                            key={student.id}
                            className="border p-2 rounded shadow-sm flex justify-between items-center"
                        >
                            <span>
                                {student.Name} ({student.Email})
                            </span>
                            <form
                                action={`/api/students/${student.id}`}
                                method="POST"
                                onSubmit={async (e) => {
                                    e.preventDefault();
                                    await fetch(`/api/students/${student.id}`, {
                                        method: "DELETE",
                                    });
                                    window.location.reload();
                                }}
                            >
                                <button
                                    type="submit"
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </form>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}