import { HttpStatusCode } from "./enum";

interface HttpErrorConfig {
  status?: HttpStatusCode;
  message?: string;
  errors?: string[];
}

export class HttpError extends Error {
  private status: HttpStatusCode;
  private statusNumber: number;
  private errors: string[];

  constructor(config: HttpErrorConfig) {
    super(config.message);
    this.name = "HttpError";

    this.status = config.status || HttpStatusCode.OK;
    this.statusNumber = this.status.valueOf();

    this.errors = config.errors || [];
  }

  public getStatusCode(): HttpStatusCode {
    return this.status;
  }

  public isClientError(): boolean {
    return this.statusNumber > 399 && this.statusNumber < 500;
  }

  public isServerError(): boolean {
    return this.statusNumber > 499 && this.statusNumber < 600;
  }

  public getErrors(): string[] {
    return this.errors;
  }
}
