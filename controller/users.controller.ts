import {PrismaClient} from "@prisma/client";
import {Request, Response} from "express";
import { UserRegisterSchema } from "../schema/users.schema";
import { error } from "node:console";

const prisma = new PrismaClient();

export const register = async (req: any, res: any) => {
    try {
        const validation = UserRegisterSchema.safeParse(req.body);
        if (!validation.success) {
            return res.status(400).json({error: validation.error.message}); 
        }

        const {...data} = validation.data;

        const IsExistingUser = await prisma.user.findUnique({
            where: {
                email: data.email
            }
        });

        if (IsExistingUser) {
            return res.status(400).json({message: "Usuário já cadastrado"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Error registering user"});
    }
};