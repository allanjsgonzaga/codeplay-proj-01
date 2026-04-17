import {z} from 'zod'; 

export const UserRegisterSchema = z.object({
    name: z.string().min(1, "O nome é obrigatório"),
    email: z.email("Email inválido"),
    password: z.string().min(8, "A senha deve conter no mínimo 8 caracteres"),
    photo: z.any().optional(),
    age: z.number().int().positive(),
    role: z.enum(['USER', 'ADMIN']).default('USER'),
})