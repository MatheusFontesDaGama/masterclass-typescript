interface IEmailTo {
    name: string;
    email: string;
}

interface IEmailMessage {
    subject: string;
    body: string;
    attachment ?: string[];
}

interface IMessageDTO {
    to: IEmailTo;
    message: IEmailMessage;
}

class EmailService {
    sendEmail({ to, message }: IMessageDTO) {
        console.log(`Email enviado para ${to.name}: ${message.subject}`);
    }
}

export default EmailService;