export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded shadow-lg">
          {children}
          <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded mt-4">Cerrar</button>
        </div>
      </div>
    );
  }
  