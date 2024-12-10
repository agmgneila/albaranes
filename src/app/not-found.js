export default function NotFound() {
    return (
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold">Página no encontrada</h1>
        <p className="text-gray-600 mt-2">Lo sentimos, no hemos podido encontrar la página que buscas.</p>
        <a href="/" className="text-blue-500 mt-4 block">Volver al inicio</a>
      </div>
    );
  }
  