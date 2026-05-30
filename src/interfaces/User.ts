export interface User {
  id: number;
  name: string;
  email: string;
  role: 'Administrador' | 'Supervisor' | 'Operador';
  active: boolean;
}