// src/services/MotoService.js

export const transformarMoto = (motoBackend) => ({
    nombre: motoBackend.nombreMoto || "Nombre no disponible",
    estado: motoBackend.estadoMoto || "Desconocido",
    marca: motoBackend.marcaMoto || "Marca no disponible",
    modelo: motoBackend.modeloMoto || "Modelo no disponible",
    año: motoBackend.anioFabricacion || "Año no disponible",
    cilindrada: motoBackend.motor?.cilindrada || "Cilindrada no disponible",
    numeroCilindros: motoBackend.motor?.numeroCilindros || "Cilindros no disponible",
    torque: motoBackend.motor?.torque || "Torque no disponible",
    tipoMotor: motoBackend.motor?.tipoMotor || "Tipo de motor no disponible",
    sistemaDeEnfriamiento: motoBackend.motor?.sistemaDeEnfriamiento || "No disponible",
    sistemaDeEncendido: motoBackend.motor?.sistemaDeEncendido || "No disponible",
    sistemaDeArranque: motoBackend.motor?.sistemaDeArranque || "No disponible",
    frenoDelantero: motoBackend.frenos?.frenoDelantero || "No disponible",
    frenoTrasero: motoBackend.frenos?.frenoTrasero || "No disponible",
    neumaticoDelantero: motoBackend.neumaticos?.neumaticoDelantero || "No disponible",
    neumaticoTrasero: motoBackend.neumaticos?.neumaticoTrasero || "No disponible",
    aroDelantero: motoBackend.neumaticos?.aroDelantero || "No disponible",
    aroPosterior: motoBackend.neumaticos?.aroTrasero || "No disponible",
    suspensionDelantera: motoBackend.suspensiones?.suspensionDelantera || "No disponible",
    suspensionTrasera: motoBackend.suspensiones?.suspensionTrasera || "No disponible",
    octanaje: motoBackend.combustibles?.octanaje || "No disponible",
    sistemaDeCombustible: motoBackend.combustibles?.sistemaCombustible || "No disponible",
    capacidadTanque: motoBackend.combustibles?.capacidadDeTanque || "No disponible",
    autonomia: motoBackend.combustibles?.autonomia || "No disponible",
    rendimientoPorGalon: motoBackend.combustibles?.rendimientoPorGalon || "No disponible",
    transmision: "Manual", // Asumimos que es manual, puedes hacerlo dinámico si es necesario
    numeroDeCambios: 6, // Asumimos que siempre son 6 cambios, cámbialo si es dinámico
    velocidadMaxima: motoBackend.velocidadMaxima || "No disponible",
    peso: motoBackend.peso || "No disponible",
    numAsientos: motoBackend.numAsientos || "No disponible",
    cargaUtil: motoBackend.cargaUtil || "No disponible",
    precioSoles: motoBackend.precioSoles || "No disponible",
    precioDolares: motoBackend.precioDolares || "No disponible",
    imagen: motoBackend.urlImg || "https://via.placeholder.com/300x200?text=No+Image",
    color: ["Rojo"], // Puedes agregar un valor predeterminado o hacerlo dinámico
    kilometraje: motoBackend.kilometraje || "No disponible",
    combustible: "Gasolina", // Predeterminado, cámbialo si es dinámico
    potencia: motoBackend.motor?.potencia || "No disponible",
    tipoFreno: motoBackend.frenos?.tipoFreno || "No disponible",
    disponibilidad: motoBackend.disponibilidad || false,
    tienda: motoBackend.tienda?.nombreTienda || "Tienda no disponible",
    fechaPublicacion: "2024-09-20", // Predeterminado, cámbialo si es dinámico
    garantia: `${motoBackend.garantiaAnios || 0} años`,
    accesoriosIncluidos: ["Escape deportivo", "Carcasa de fibra de carbono"], // Predeterminado, cámbialo si es dinámico
    descripcion: "Descripción no disponible", // Descripción predeterminada
  });
  
  