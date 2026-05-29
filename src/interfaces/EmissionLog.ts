// Interfaz estricta para cada registro de emisión
export interface EmissionLog {
  id: number;                // Identificador único
  facilityName: string;      // Nombre de la planta
  gasType: 'CO2' | 'CH4' | 'NOx'; // Tipo de gas
  value: number;             // Volumen en m³
  date: string;              // Fecha en formato ISO (YYYY-MM-DD)
}

// Factores de conversión a CO₂e (Global Warming Potential - GWP)
export const conversionFactors: Record<'CO2' | 'CH4' | 'NOx', number> = {
  CO2: 1,    // CO₂ se toma como referencia
  CH4: 25,   // Metano ≈ 25 veces más potente que CO₂
  NOx: 298   // Óxidos de nitrógeno ≈ 298 veces más potentes
};

// Función auxiliar para convertir cualquier emisión a CO₂e
export function toCO2e(log: EmissionLog): number {
  const factor = conversionFactors[log.gasType];
  return log.value * factor;
}