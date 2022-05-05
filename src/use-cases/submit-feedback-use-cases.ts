import { MailAdapter } from './../adapters/mail-adapter';
import { FeedbacksRepository } from './../repositories/feedbacks-repository';
interface SubmitFeedbackUseCaseRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase {
    constructor(
        private feedbackRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter,
    ) {}

    async execute(request: SubmitFeedbackUseCaseRequest) {
        const {type, comment, screenshot} = request;

        this.feedbackRepository.create({
            type,
            comment,
            screenshot
        })

        await this.mailAdapter.sendMail({
            subject: 'Novo feedback!',
            body: [
                `<p>tipo do feedback: ${type}</p>`,
                `<p>comentario: ${comment}</p>`,
            ].join('\n')
        })
    }
}