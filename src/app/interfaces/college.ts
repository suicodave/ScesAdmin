import { Date } from './date';

export interface College {
    readonly id: number;
    name: string;
    head: string;
    created_at: Date ;
    updated_at:  Date ;
    deleted_at: string;



}
