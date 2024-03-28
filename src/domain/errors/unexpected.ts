export default class UnexpectedError extends Error {
    constructor() {
        super('An unexpected error occurred, please try again later');
        this.name = 'UnexpectedError';
    }
}
