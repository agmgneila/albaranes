import Navbar from "../../components/Navbar";

export default function ProjectsLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="flex justify-center items-center min-h-screen bg-white shadow-lg">
        <div className="w-full max-w-4xl p-8 space-y-6 bg-white rounded-xl shadow-lg">
          <h1 className="text-3xl font-extrabold text-center text-gray-800">
            Proyectos
          </h1>
          <div className="space-y-4">{children}</div>
        </div>
      </main>
    </div>
  );
}
