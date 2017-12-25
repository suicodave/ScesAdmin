import { Date } from './date';

export interface SchoolYear {
    readonly id;
    name: string;
    base: number;
    is_active: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
