export class HttpException extends Error {
	status = 500;

	constructor(message, status = 500) {
		super(message);
		this.status = status;
	}
}
