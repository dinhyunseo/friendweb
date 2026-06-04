export interface User {
  id: string;
  name: string;
  email: string;
  role: 'client' | 'trainer';
}

export interface Training {
  id: string;
  title: string;
  description: string;
  time: string;
  location: string;
  capacity: number;
  enrolled: number;
  trainerId: string;
  trainerName: string;
}

export interface LoginCredentials {
  email: string;
}