// Interfaz estricta para cada registro de emisión
export interface EmissionLog {
  id: number;                
  facilityName: string;      
  gasType: 'CO2' | 'CH4' | 'NOx'; 
  value: number;         
  unit: 'm3' | 'liters' | 'ft3';    
  date: string;             
}

// Factores de conversión a CO₂e (Global Warming Potential - GWP)
export const conversionFactors: Record<'CO2' | 'CH4' | 'NOx', number> = {
  CO2: 1,    // CO₂ se toma como referencia
  CH4: 25,   // Metano ≈ 25 veces más potente que CO₂
  NOx: 298   // Óxidos de nitrógeno ≈ 298 veces más potentes
};

export function convertToM3(
  value: number,
  unit: 'm3' | 'liters' | 'ft3'
): number {

  switch (unit) {
    case 'liters':
      return value / 1000;

    case 'ft3':
      return value * 0.0283168;

    default:
      return value;
  }
}

// Función auxiliar para convertir cualquier emisión a CO₂e
export function toCO2e(log: EmissionLog): number {
  const factor = conversionFactors[log.gasType];

  const valueInM3 = convertToM3(
    log.value,
    log.unit
  );
  return valueInM3 * factor;
}