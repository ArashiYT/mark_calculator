export default class ValidError extends Error {
    constructor(public message: string, public refObject: HTMLInputElement | null) {
        super();
    }
}