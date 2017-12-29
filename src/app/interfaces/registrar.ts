import { Date } from './date';

export interface Registrar {
    readonly id: number;
    first_name: string;
    middle_name: string;
    last_name: string;
    email: string;
    gender: string;
    status: string;
    birthdate: string;
    profile: string;
    avatar: string;
    processed_by: {
        readonly id: number;
        readonly name: string;
        readonly email: string;
        readonly created_at: string;
        readonly updated_at: string;
    };
}
