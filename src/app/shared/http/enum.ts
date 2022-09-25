export enum HttpStatusCode {
  // 200
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,

  // 400
  BAD_REQUEST = 402,
  UNAUTHENTICATED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,

  I_AM_A_TEAPOT = 418,

  // 500
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
}

export enum HttpContentType {
  APPLICATION_JSON = 0,
  APPLICATION_FLATBUFFER = 1,
  TEXT_HTML = 2,
  TEXT_PLAIN = 3,
}

export const HttpContentTypeString = [
  "application/json",
  "application/flatbuffer",
  "text/html",
  "text/plain",
];

export const HttpContentTypeEnum: Record<string, HttpContentType> = {
  "application/json": HttpContentType.APPLICATION_JSON,
  "application/flatbuffer": HttpContentType.APPLICATION_FLATBUFFER,
  "text/html": HttpContentType.TEXT_HTML,
  "text/plain": HttpContentType.TEXT_PLAIN,
};
