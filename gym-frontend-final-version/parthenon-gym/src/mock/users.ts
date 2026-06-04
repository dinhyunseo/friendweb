import type { User } from '../types';

export const MOCK_USERS: (User & { password: string })[] = [
  { id: '1', name: 'Алексей', email: 'client@gym.com', password: '123456', role: 'client' },
  { id: '2', name: 'Иван', email: 'trainer@gym.com', password: '123456', role: 'trainer' },
];