import Navbar from "../components/Navbar";

export default function OnboardingLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      <div className="w-64 bg-gray-800 text-white p-6">
        <Navbar />
      </div>

      <main className="flex-1 flex justify-center items-center p-6 bg-gray-100">
        <div className="w-full max-w-lg p-6 space-y-6 bg-white rounded-xl shadow-lg">
          <h1 className="text-4xl font-extrabold text-center text-gray-800">
            Bienvenido a Bidly!
          </h1>

          <div className="space-y-4">
            {children}
          </div>

          <p className="mt-4 text-center">
            ¿No tienes una cuenta?{' '}
            <a
              href="/register"
              className="text-blue-500 font-medium hover:underline"
            >
              Regístrate aquí
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
