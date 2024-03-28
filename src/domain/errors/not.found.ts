export default class NotFoundError extends Error {
    constructor() {
        super('Asset not found');
        this.name = 'NotFoundError';
    }
}
