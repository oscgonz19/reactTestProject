
const CardTracking = () => {
    const ClickHandler = () => {
        console.log('clicked')
    }
    
    const camiones = [
  {
    id: 1,
    datosEntrada: {
      fecha: '12/09/2023',
      hora: '08:30 AM',
      ubicacion: 'Almacén Central'
    },
    estatus: 'Esperando cargamento',
    nombreConductor: 'Juan Pérez'
  },
  {
    id: 2,
    datosEntrada: {
      fecha: '12/09/2023',
      hora: '09:00 AM',
      ubicacion: 'Punto de Distribución A'
    },
    estatus: 'En reparación',
    nombreConductor: 'María González'
  },
  {
    id: 3,
    datosEntrada: {
      fecha: '12/09/2023',
      hora: '10:00 AM',
      ubicacion: 'Almacén Secundario'
    },
    estatus: 'En ruta',
    nombreConductor: 'Carlos Rodríguez'
  }
];
    
    
    return(
     <div>
      {camiones.map(camion => (
        <div key={camion.id} className="bg-black text-white mt-10 p-6 rounded-lg shadow-lg max-w-md mx-auto mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Camión #{camion.id}</h2>
            <span className="text-green-500 text-sm">{camion.estatus}</span>
          </div>
          <div className="mb-4">
            <p className="mb-2">Nombre del Conductor:</p>
            <p className="text-gray-400">{camion.nombreConductor}</p>
          </div>
          <div className="mb-4">
            <p className="mb-2">Datos de Entrada:</p>
            <p className="text-gray-400">Fecha: {camion.datosEntrada.fecha}</p>
            <p className="text-gray-400">Hora: {camion.datosEntrada.hora}</p>
            <p className="text-gray-400">Ubicación: {camion.datosEntrada.ubicacion}</p>
          </div>
            
            <button onClick={ClickHandler} className="">+</button>
            
        </div>
      ))}
    </div>
  );
}
export default CardTracking 