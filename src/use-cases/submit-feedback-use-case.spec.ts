import { SubmitFeedbackUseCase } from './submit-feedback-use-cases';
describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            {create: async () => {}},
            {sendMail: async () => {}}
        )

        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Está bugado!',
            screenshot: '',
        })).resolves.not.toThrow();
    })
})