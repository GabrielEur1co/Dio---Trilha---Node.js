import { HttpResponse } from "../models/http-response-model";

export const ok = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: 200,
    body: data,
  };
};

export const created = async (message: string): Promise<HttpResponse> => {
  return {
    statusCode: 201,
    body: { message:message },
  };
};

export const noContent = async (): Promise<HttpResponse> => {
  return {
    statusCode: 204,
    body: null,
  };
};

export const badRequest = async (message: string): Promise<HttpResponse> => {
  return {
    statusCode: 400,
    body: { error: message },
  };
};

export const unauthorized = async (message: string): Promise<HttpResponse> => {
  return {
    statusCode: 401,
    body: { error: message },
  };
};

export const forbidden = async (message: string): Promise<HttpResponse> => {
  return {
    statusCode: 403,
    body: { error: message },
  };
};

export const notFound = async (message: string): Promise<HttpResponse> => {
  return {
    statusCode: 404,
    body: { error: message },
  };
};

export const conflict = async (message: string): Promise<HttpResponse> => {
  return {
    statusCode: 409,
    body: { error: message },
  };
};

export const internalServerError = async (
  message: string
): Promise<HttpResponse> => {
  return {
    statusCode: 500,
    body: { error: message },
  };
};

export const notImplemented = async (
  message: string
): Promise<HttpResponse> => {
  return {
    statusCode: 501,
    body: { error: message },
  };
};

export const badGateway = async (message: string): Promise<HttpResponse> => {
  return {
    statusCode: 502,
    body: { error: message },
  };
};

export const serviceUnavailable = async (
  message: string
): Promise<HttpResponse> => {
  return {
    statusCode: 503,
    body: { error: message },
  };
};

export const gatewayTimeout = async (
  message: string
): Promise<HttpResponse> => {
  return {
    statusCode: 504,
    body: { error: message },
  };
};
