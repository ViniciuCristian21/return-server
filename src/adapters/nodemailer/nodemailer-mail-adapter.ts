import { MailAdapter, SendMailData } from './../mail-adapter';
import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b7730563bca2f9",
      pass: "40fba0457bf962"
    }
});
export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {

        await transport.sendMail({
            from: "Equipe Feedget <hello@feedget.com>",
            to: "Viniciu Cristian <git.viniciu@gmail.com>",
            subject,
            html: body
        })
    };
}