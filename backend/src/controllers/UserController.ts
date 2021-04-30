import { Request , Response} from 'express';
import EmailService from '../services/EmailService';

const users = [
    {
        name: "Matheus",
        email: "matheus@email.com.br" 
    }
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendEmail({
                to: { 
                    name: 'Matheus', 
                    email: 'matheus@email.com.br' 
                },
                message: { 
                    subject: 'Hello World', 
                    body: 'Welcome Matheus' 
                }
            }
        );

        return res.send();
    }
};