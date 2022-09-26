import type { AxiosRequestConfig, AxiosResponse } from "axios";
import type {
  HttpServiceConfig,
  HttpService,
  HttpRequest,
  HttpResponse,
} from "./types";

import axios, { AxiosError } from "axios";
import { HttpError } from "./error";
import {
  HttpContentType,
  HttpContentTypeEnum,
  HttpContentTypeString,
} from "./enum";

const handleError = (err: AxiosError) => {
  if (err.response) {
    throw new HttpError({
      status: err.response.status,
      message: err.message,
      errors: (err.response.data as any) || "",
    });
  }

  throw err;
};

const makeHttpService = (config: HttpServiceConfig = {}): HttpService => {
  const axiosService = axios.create();
  if (config.baseUrl) {
    axiosService.defaults.baseURL = config.baseUrl;
  }

  const handleRequest = async (
    url: string,
    method: "get" | "post",
    req: HttpRequest = {}
  ): Promise<HttpResponse> => {
    try {
      const headers: Record<string, any> = {};
      if (method !== "get") {
        headers["Content-Type"] = req.contentType
          ? HttpContentTypeString[req.contentType.valueOf()]
          : "application/json";
      }

      const res = await axiosService(url, {
        method,
        headers,
        data: req.body,
      });

      if (res.status > 399) {
        throw new HttpError({
          status: res.status,
        });
      }

      return {
        body: res.data,
        status: res.status,
        contentType:
          HttpContentTypeEnum[res.headers["Content-Type"]] ||
          HttpContentType.TEXT_PLAIN,
      };
    } catch (err) {
      console.error(err);
      if (err instanceof HttpError) {
        throw err;
      }

      // TODO: Network Error
      throw new HttpError({});
    }
  };

  return Object.freeze({
    initService: () => {
      axiosService.interceptors.request.use(
        // TODO: Check here if the cookies are being sent
        (request: AxiosRequestConfig) => request,
        handleError
      );

      axiosService.interceptors.response.use(
        // TODO: Check if the cookies are being written
        (response: AxiosResponse) => response,
        handleError
      );
    },

    get: (url, req = {}) => handleRequest(url, "get", req),
    post: (url, req = {}) => handleRequest(url, "post", req),
  } as HttpService);
};

export default makeHttpService;
