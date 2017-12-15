import { Date } from './date';

export interface Department {
    readonly id: number;
    name: string;
    created_at: Date;
    updated_at: Date;

}
