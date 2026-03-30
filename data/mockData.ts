export type ProjectStatus = 'Ativo' | 'Inativo' | 'Planejado';
export type StudentStatus = 'Ativo' | 'Inativo';
export type Category = 'Arte' | 'Educação' | 'Alimentação' | 'Saúde' | 'Esporte';

export interface Project {
  id: number;
  name: string;
  description: string;
  category: Category;
  status: ProjectStatus;
  studentCount: number;
  startDate: string;
  coordinator: string;
}

export interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  age: number;
  projectId: number;
  projectName: string;
  enrollmentDate: string;
  status: StudentStatus;
}

export interface AttendanceRecord {
  id: number;
  studentId: number;
  studentName: string;
  projectId: number;
  date: string;
  present: boolean;
}

export const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Escola de Ballet',
    description: 'Aulas de ballet para meninas de baixa renda, promovendo desenvolvimento artístico e autoestima.',
    category: 'Arte',
    status: 'Ativo',
    studentCount: 17,
    startDate: '2022-03-01',
    coordinator: 'Ana Paula Silva',
  },
  {
    id: 2,
    name: 'Banco de Alimentos',
    description: 'Distribuição mensal de cestas básicas para famílias de baixa renda da comunidade.',
    category: 'Alimentação',
    status: 'Ativo',
    studentCount: 60,
    startDate: '2020-01-15',
    coordinator: 'Carlos Eduardo Souza',
  },
  {
    id: 3,
    name: 'Educar Transforma',
    description: 'Curso preparatório para o ENEM voltado a alunos de escola pública de baixa renda.',
    category: 'Educação',
    status: 'Ativo',
    studentCount: 42,
    startDate: '2023-02-10',
    coordinator: 'Mariana Costa Lima',
  },
  {
    id: 4,
    name: 'Saúde em Movimento',
    description: 'Atividades físicas e orientação nutricional gratuita para a comunidade local.',
    category: 'Saúde',
    status: 'Planejado',
    studentCount: 0,
    startDate: '2026-06-01',
    coordinator: 'Roberto Alves',
  },
];

export const MOCK_STUDENTS: Student[] = [
  { id: 1,  name: 'Maria Clara Ferreira', email: 'mariaclara@email.com',  phone: '(11) 99999-1111', age: 10, projectId: 1, projectName: 'Escola de Ballet',    enrollmentDate: '2023-03-15', status: 'Ativo' },
  { id: 2,  name: 'Isabela Santos',       email: 'isabela@email.com',     phone: '(11) 99999-2222', age: 12, projectId: 1, projectName: 'Escola de Ballet',    enrollmentDate: '2023-03-15', status: 'Ativo' },
  { id: 3,  name: 'Juliana Oliveira',     email: 'juliana@email.com',     phone: '(11) 99999-3333', age: 9,  projectId: 1, projectName: 'Escola de Ballet',    enrollmentDate: '2023-04-01', status: 'Ativo' },
  { id: 4,  name: 'Beatriz Lima',         email: 'beatriz@email.com',     phone: '(11) 99999-4444', age: 11, projectId: 1, projectName: 'Escola de Ballet',    enrollmentDate: '2023-04-10', status: 'Ativo' },
  { id: 5,  name: 'Sofia Mendes',         email: 'sofia@email.com',       phone: '(11) 99999-5555', age: 10, projectId: 1, projectName: 'Escola de Ballet',    enrollmentDate: '2023-05-05', status: 'Inativo' },
  { id: 6,  name: 'Camila Torres',        email: 'camila@email.com',      phone: '(11) 99999-6666', age: 11, projectId: 1, projectName: 'Escola de Ballet',    enrollmentDate: '2024-02-20', status: 'Ativo' },
  { id: 7,  name: 'Laura Nascimento',     email: 'laura@email.com',       phone: '(11) 99999-7777', age: 9,  projectId: 1, projectName: 'Escola de Ballet',    enrollmentDate: '2024-03-01', status: 'Ativo' },
  { id: 8,  name: 'Lucas Pereira',        email: 'lucas@email.com',       phone: '(11) 88888-1111', age: 17, projectId: 3, projectName: 'Educar Transforma',   enrollmentDate: '2024-02-10', status: 'Ativo' },
  { id: 9,  name: 'Pedro Rodrigues',      email: 'pedro@email.com',       phone: '(11) 88888-2222', age: 18, projectId: 3, projectName: 'Educar Transforma',   enrollmentDate: '2024-02-10', status: 'Ativo' },
  { id: 10, name: 'Ana Beatriz Costa',    email: 'anabeatriz@email.com',  phone: '(11) 88888-3333', age: 17, projectId: 3, projectName: 'Educar Transforma',   enrollmentDate: '2024-03-01', status: 'Ativo' },
  { id: 11, name: 'Gabriel Santos',       email: 'gabriel@email.com',     phone: '(11) 88888-4444', age: 18, projectId: 3, projectName: 'Educar Transforma',   enrollmentDate: '2024-03-01', status: 'Ativo' },
  { id: 12, name: 'Larissa Alves',        email: 'larissa@email.com',     phone: '(11) 88888-5555', age: 17, projectId: 3, projectName: 'Educar Transforma',   enrollmentDate: '2024-03-15', status: 'Inativo' },
];

export const MOCK_ATTENDANCE: AttendanceRecord[] = [
  { id: 1,  studentId: 1, studentName: 'Maria Clara Ferreira', projectId: 1, date: '2026-03-23', present: true },
  { id: 2,  studentId: 2, studentName: 'Isabela Santos',       projectId: 1, date: '2026-03-23', present: true },
  { id: 3,  studentId: 3, studentName: 'Juliana Oliveira',     projectId: 1, date: '2026-03-23', present: false },
  { id: 4,  studentId: 4, studentName: 'Beatriz Lima',         projectId: 1, date: '2026-03-23', present: true },
  { id: 5,  studentId: 6, studentName: 'Camila Torres',        projectId: 1, date: '2026-03-23', present: true },
  { id: 6,  studentId: 7, studentName: 'Laura Nascimento',     projectId: 1, date: '2026-03-23', present: false },
  { id: 7,  studentId: 1, studentName: 'Maria Clara Ferreira', projectId: 1, date: '2026-03-26', present: true },
  { id: 8,  studentId: 2, studentName: 'Isabela Santos',       projectId: 1, date: '2026-03-26', present: false },
  { id: 9,  studentId: 3, studentName: 'Juliana Oliveira',     projectId: 1, date: '2026-03-26', present: true },
  { id: 10, studentId: 4, studentName: 'Beatriz Lima',         projectId: 1, date: '2026-03-26', present: true },
  { id: 11, studentId: 6, studentName: 'Camila Torres',        projectId: 1, date: '2026-03-26', present: true },
  { id: 12, studentId: 7, studentName: 'Laura Nascimento',     projectId: 1, date: '2026-03-26', present: true },
];
