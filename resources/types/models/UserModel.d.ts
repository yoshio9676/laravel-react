export type UserModelType = {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string|null;
    password: string;
    created_at?: string|null;
    updated_at?: string|null;
}