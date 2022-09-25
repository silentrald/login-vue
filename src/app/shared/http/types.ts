import type { HttpContentType, HttpStatusCode } from "./enum";
import type { HttpError } from "./error";

export interface HttpRequest {
  body?: string | ArrayBuffer | Record<string, any>;
  contentType?: HttpContentType;
}

export interface HttpResponse {
  body: string | Record<string, any>;
  status: HttpStatusCode;
  contentType: HttpContentType;
}

export interface HttpServiceConfig {
  baseUrl?: string;
}

export interface HttpResult {
  reponse: HttpResponse;
  error: HttpError;
}

export interface HttpService {
  initService: () => void;
  get: (url: string, req?: HttpRequest) => Promise<HttpResponse>;
  post: (url: string, req?: HttpRequest) => Promise<HttpResponse>;
}
