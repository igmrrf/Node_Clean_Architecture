import RedisDBManager from "base/database/RedisDBManager";
import logger from "base/logger";
import config from "config";
import { Request, Response } from "express";
import HttpStatus from "http-status-codes";

interface ResponseType {
  success: boolean;
  status_code: number;
  message: string;
  data?: object;
  links?: string[];
  name?: string;
}

const BasicResponse: ResponseType = {
  success: false,
  status_code: HttpStatus.INTERNAL_SERVER_ERROR,
  message: "",
};

/**
 * Handles API responses
 */
class ResponseManager {
  static get cache() {
    const redisCache = new RedisDBManager({ config, logger });
    return redisCache;
  }

  static get HTTP_STATUS() {
    return HttpStatus;
  }

  static getResponseHandler(req: Request, res: Response) {
    return {
      onSuccess(data: object, message?: string, code?: number, links?: string[]) {
        return ResponseManager.respondWithSuccess(res, code, data, message, links, req);
      },
      onError(errorName: string, errorCode: number, errorMessage: string, data: object) {
        return ResponseManager.respondWithError(res, errorName, errorCode, errorMessage, data);
      },
    };
  }

  static generateHATEOASLink(link: string, method: string, rel: string) {
    return {
      link,
      method,
      rel,
    };
  }

  static respondWithSuccess(
    res: Response,
    code = ResponseManager.HTTP_STATUS.OK,
    data = {},
    message = "success",
    links?: string[],
    req?: Request,
  ) {
    const response = { ...BasicResponse };
    response.success = true;
    response.message = message;
    response.data = data;
    response.links = links;
    response.status_code = code;
    if (req && req.method === "GET") {
      const cacheResponse = JSON.stringify(response);
      ResponseManager.cache.setCacheKey(req);
      ResponseManager.cache.cacheSetter(ResponseManager.cache.cacheKey, cacheResponse);
    }
    return res.status(code).json(response);
  }

  static respondWithError(
    res: Response,
    errorName: string,
    errorCode = ResponseManager.HTTP_STATUS.INTERNAL_SERVER_ERROR,
    message = "Unknown error",
    data = {},
  ) {
    const response = { ...BasicResponse };
    response.success = false;
    response.name = errorName;
    response.message = message;
    response.status_code = errorCode;
    response.data = data;
    return res.status(errorCode).json(response);
  }
}
export default ResponseManager;
