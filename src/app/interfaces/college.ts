export interface College {
    readonly id: number;
    name: string;
    head: string;
    created_at: {
        date: string;
        timezone: string;
        timezone_type: string;

    };
    updated_at: {
        date: string;
        timezone: string;
        timezone_type: string;

    };



}
