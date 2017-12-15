import { Department } from './department';
import { Date } from './date';

export interface YearLevel {
    readonly id: number;
    name: string;
    department: Department;
    created_at: Date;
    updated_at: Date;
    deleted_at: string;
}
