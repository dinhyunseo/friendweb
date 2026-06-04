import type { Training } from '../types/index';

export const MOCK_TRAININGS: Training[] = [
  {
    id: '1',
    title: 'Силовая тренировка: Верх тела',
    description: 'Интенсивная тренировка на все группы мышц с использованием свободного веса.',
    time: '10:00',
    location: 'Зал №1',
    capacity: 10,
    enrolled: 7,
    trainerId: 't1',
    trainerName: 'Иван Петров',
  },
  {
    id: '2',
    title: 'Йога для начинающих',
    description: 'Вводное занятие для тех новичков в йоге',
    time: '12:00',
    location: 'Зал №2',
    capacity: 15,
    enrolled: 4,
    trainerId: 't2',
    trainerName: 'Анна Сидорова',
  },
  {
    id: '3',
    title: 'Кардио интенсив',
    description: 'Усиленная тренировка выносливости',
    time: '15:00',
    location: 'Зал №1',
    capacity: 10,
    enrolled: 8,
    trainerId: 't1',
    trainerName: 'Иван Петров',
  },
];