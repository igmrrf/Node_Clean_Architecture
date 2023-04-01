"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
var tslib_1 = require("tslib");
var express_validator_1 = require("express-validator");
var InvalidPayloadError_1 = tslib_1.__importDefault(require("../interfaces/rest/errors/InvalidPayloadError"));
var validateError = function (req, res, next) {
  var errors = (0, express_validator_1.validationResult)(req);
  if (errors.isEmpty()) {
    return next();
  }
  var extractedErrors = [];
  errors.array().map(function (err) {
    var _a;
    return extractedErrors.push(((_a = {}), (_a[err.param] = err.msg), _a));
  });
  throw new InvalidPayloadError_1.default("Invalid data provided", 422, {
    errors: extractedErrors,
  });
};
exports.default = validateError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInRzbGliXzEiLCJyZXF1aXJlIiwiZXhwcmVzc192YWxpZGF0b3JfMSIsIkludmFsaWRQYXlsb2FkRXJyb3JfMSIsIl9faW1wb3J0RGVmYXVsdCIsInZhbGlkYXRlRXJyb3IiLCJyZXEiLCJyZXMiLCJuZXh0IiwiZXJyb3JzIiwidmFsaWRhdGlvblJlc3VsdCIsImlzRW1wdHkiLCJleHRyYWN0ZWRFcnJvcnMiLCJhcnJheSIsIm1hcCIsImVyciIsIl9hIiwicHVzaCIsInBhcmFtIiwibXNnIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uL3R5cGVkL21vZHVsZXMvdmFsaWRhdG9yLm1vZHVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIGV4cHJlc3NfdmFsaWRhdG9yXzEgPSByZXF1aXJlKFwiZXhwcmVzcy12YWxpZGF0b3JcIik7XG52YXIgSW52YWxpZFBheWxvYWRFcnJvcl8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImludGVyZmFjZXMvcmVzdC9lcnJvcnMvSW52YWxpZFBheWxvYWRFcnJvclwiKSk7XG52YXIgdmFsaWRhdGVFcnJvciA9IGZ1bmN0aW9uIChyZXEsIHJlcywgbmV4dCkge1xuICAgIHZhciBlcnJvcnMgPSAoMCwgZXhwcmVzc192YWxpZGF0b3JfMS52YWxpZGF0aW9uUmVzdWx0KShyZXEpO1xuICAgIGlmIChlcnJvcnMuaXNFbXB0eSgpKSB7XG4gICAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgfVxuICAgIHZhciBleHRyYWN0ZWRFcnJvcnMgPSBbXTtcbiAgICBlcnJvcnMuYXJyYXkoKS5tYXAoZnVuY3Rpb24gKGVycikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiBleHRyYWN0ZWRFcnJvcnMucHVzaCgoX2EgPSB7fSwgX2FbZXJyLnBhcmFtXSA9IGVyci5tc2csIF9hKSk7XG4gICAgfSk7XG4gICAgdGhyb3cgbmV3IEludmFsaWRQYXlsb2FkRXJyb3JfMS5kZWZhdWx0KFwiSW52YWxpZCBkYXRhIHByb3ZpZGVkXCIsIDQyMiwge1xuICAgICAgICBlcnJvcnM6IGV4dHJhY3RlZEVycm9ycyxcbiAgICB9KTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSB2YWxpZGF0ZUVycm9yO1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZOztBQUNaQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFLFlBQVksRUFBRTtFQUFFQyxLQUFLLEVBQUU7QUFBSyxDQUFDLENBQUM7QUFDN0QsSUFBSUMsT0FBTyxHQUFHQyxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQzlCLElBQUlDLG1CQUFtQixHQUFHRCxPQUFPLENBQUMsbUJBQW1CLENBQUM7QUFDdEQsSUFBSUUscUJBQXFCLEdBQUdILE9BQU8sQ0FBQ0ksZUFBZSxDQUFDSCxPQUFPLGlEQUE4QyxDQUFDO0FBQzFHLElBQUlJLGFBQWEsR0FBRyxVQUFVQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFFO0VBQzFDLElBQUlDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRVAsbUJBQW1CLENBQUNRLGdCQUFnQixFQUFFSixHQUFHLENBQUM7RUFDM0QsSUFBSUcsTUFBTSxDQUFDRSxPQUFPLEVBQUUsRUFBRTtJQUNsQixPQUFPSCxJQUFJLEVBQUU7RUFDakI7RUFDQSxJQUFJSSxlQUFlLEdBQUcsRUFBRTtFQUN4QkgsTUFBTSxDQUFDSSxLQUFLLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLFVBQVVDLEdBQUcsRUFBRTtJQUM5QixJQUFJQyxFQUFFO0lBQ04sT0FBT0osZUFBZSxDQUFDSyxJQUFJLEVBQUVELEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRUEsRUFBRSxDQUFDRCxHQUFHLENBQUNHLEtBQUssQ0FBQyxHQUFHSCxHQUFHLENBQUNJLEdBQUcsRUFBRUgsRUFBRSxFQUFFO0VBQ3ZFLENBQUMsQ0FBQztFQUNGLE1BQU0sSUFBSWIscUJBQXFCLENBQUNpQixPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxFQUFFO0lBQ2xFWCxNQUFNLEVBQUVHO0VBQ1osQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUNEZCxPQUFPLENBQUNzQixPQUFPLEdBQUdmLGFBQWEifQ==
