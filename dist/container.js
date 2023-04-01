"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
var tslib_1 = require("tslib");
var awilix_1 = require("awilix");
var awilix_express_1 = require("awilix-express");
var MongoDBManager_1 = tslib_1.__importDefault(require("./base/database/MongoDBManager"));
var logger_1 = tslib_1.__importDefault(require("./base/logger"));
var Stripe_1 = tslib_1.__importDefault(require("./base/payments/Stripe"));
var Cloudinary_1 = tslib_1.__importDefault(require("./base/storage/Cloudinary"));
var config_1 = tslib_1.__importDefault(require("./config"));
var models_1 = tslib_1.__importDefault(require("./containers/models"));
var router_1 = tslib_1.__importDefault(require("./interfaces/rest/routes/router"));
var Server_1 = tslib_1.__importDefault(require("./interfaces/rest/Server"));
var container = (0, awilix_1.createContainer)({
  injectionMode: awilix_1.InjectionMode.PROXY,
});
container.register({
  config: (0, awilix_1.asValue)(config_1.default),
  db: (0, awilix_1.asClass)(MongoDBManager_1.default).singleton(),
  models: (0, awilix_1.asValue)(models_1.default),
  logger: (0, awilix_1.asValue)(logger_1.default),
  containerMiddleware: (0, awilix_1.asValue)((0, awilix_express_1.scopePerRequest)(container)),
  routes: (0, awilix_1.asFunction)(router_1.default),
  restServer: (0, awilix_1.asClass)(Server_1.default),
  storageService: (0, awilix_1.asClass)(Cloudinary_1.default).singleton(),
  paymentService: (0, awilix_1.asClass)(Stripe_1.default).singleton(),
});
container.loadModules(
  [
    // Load use-cases
    [
      "app/**/*!(index.js).js",
      {
        lifetime: awilix_1.Lifetime.SCOPED,
        register: awilix_1.asClass,
      },
    ],
    // Load repositories
    [
      "containers/*/*Repository.js",
      {
        lifetime: awilix_1.Lifetime.SCOPED,
        register: awilix_1.asClass,
      },
    ],
  ],
  {
    formatName: "camelCase",
    resolverOptions: {},
    cwd: __dirname,
  },
);
container.loadModules(
  [
    // Load entities
    [
      "containers/*/*Entity.js",
      {
        lifetime: awilix_1.Lifetime.SCOPED,
        register: awilix_1.asClass,
      },
    ],
  ],
  {
    resolverOptions: {},
    cwd: __dirname,
  },
);
exports.default = container;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInRzbGliXzEiLCJyZXF1aXJlIiwiYXdpbGl4XzEiLCJhd2lsaXhfZXhwcmVzc18xIiwiTW9uZ29EQk1hbmFnZXJfMSIsIl9faW1wb3J0RGVmYXVsdCIsImxvZ2dlcl8xIiwiU3RyaXBlXzEiLCJDbG91ZGluYXJ5XzEiLCJjb25maWdfMSIsIm1vZGVsc18xIiwicm91dGVyXzEiLCJTZXJ2ZXJfMSIsImNvbnRhaW5lciIsImNyZWF0ZUNvbnRhaW5lciIsImluamVjdGlvbk1vZGUiLCJJbmplY3Rpb25Nb2RlIiwiUFJPWFkiLCJyZWdpc3RlciIsImNvbmZpZyIsImFzVmFsdWUiLCJkZWZhdWx0IiwiZGIiLCJhc0NsYXNzIiwic2luZ2xldG9uIiwibW9kZWxzIiwibG9nZ2VyIiwiY29udGFpbmVyTWlkZGxld2FyZSIsInNjb3BlUGVyUmVxdWVzdCIsInJvdXRlcyIsImFzRnVuY3Rpb24iLCJyZXN0U2VydmVyIiwic3RvcmFnZVNlcnZpY2UiLCJwYXltZW50U2VydmljZSIsImxvYWRNb2R1bGVzIiwibGlmZXRpbWUiLCJMaWZldGltZSIsIlNDT1BFRCIsImZvcm1hdE5hbWUiLCJyZXNvbHZlck9wdGlvbnMiLCJjd2QiLCJfX2Rpcm5hbWUiXSwic291cmNlcyI6WyIuLi90eXBlZC9jb250YWluZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciBhd2lsaXhfMSA9IHJlcXVpcmUoXCJhd2lsaXhcIik7XG52YXIgYXdpbGl4X2V4cHJlc3NfMSA9IHJlcXVpcmUoXCJhd2lsaXgtZXhwcmVzc1wiKTtcbnZhciBNb25nb0RCTWFuYWdlcl8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImJhc2UvZGF0YWJhc2UvTW9uZ29EQk1hbmFnZXJcIikpO1xudmFyIGxvZ2dlcl8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImJhc2UvbG9nZ2VyXCIpKTtcbnZhciBTdHJpcGVfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJiYXNlL3BheW1lbnRzL1N0cmlwZVwiKSk7XG52YXIgQ2xvdWRpbmFyeV8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImJhc2Uvc3RvcmFnZS9DbG91ZGluYXJ5XCIpKTtcbnZhciBjb25maWdfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJjb25maWdcIikpO1xudmFyIG1vZGVsc18xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImNvbnRhaW5lcnMvbW9kZWxzXCIpKTtcbnZhciByb3V0ZXJfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJpbnRlcmZhY2VzL3Jlc3Qvcm91dGVzL3JvdXRlclwiKSk7XG52YXIgU2VydmVyXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiaW50ZXJmYWNlcy9yZXN0L1NlcnZlclwiKSk7XG52YXIgY29udGFpbmVyID0gKDAsIGF3aWxpeF8xLmNyZWF0ZUNvbnRhaW5lcikoe1xuICAgIGluamVjdGlvbk1vZGU6IGF3aWxpeF8xLkluamVjdGlvbk1vZGUuUFJPWFksXG59KTtcbmNvbnRhaW5lci5yZWdpc3Rlcih7XG4gICAgY29uZmlnOiAoMCwgYXdpbGl4XzEuYXNWYWx1ZSkoY29uZmlnXzEuZGVmYXVsdCksXG4gICAgZGI6ICgwLCBhd2lsaXhfMS5hc0NsYXNzKShNb25nb0RCTWFuYWdlcl8xLmRlZmF1bHQpLnNpbmdsZXRvbigpLFxuICAgIG1vZGVsczogKDAsIGF3aWxpeF8xLmFzVmFsdWUpKG1vZGVsc18xLmRlZmF1bHQpLFxuICAgIGxvZ2dlcjogKDAsIGF3aWxpeF8xLmFzVmFsdWUpKGxvZ2dlcl8xLmRlZmF1bHQpLFxuICAgIGNvbnRhaW5lck1pZGRsZXdhcmU6ICgwLCBhd2lsaXhfMS5hc1ZhbHVlKSgoMCwgYXdpbGl4X2V4cHJlc3NfMS5zY29wZVBlclJlcXVlc3QpKGNvbnRhaW5lcikpLFxuICAgIHJvdXRlczogKDAsIGF3aWxpeF8xLmFzRnVuY3Rpb24pKHJvdXRlcl8xLmRlZmF1bHQpLFxuICAgIHJlc3RTZXJ2ZXI6ICgwLCBhd2lsaXhfMS5hc0NsYXNzKShTZXJ2ZXJfMS5kZWZhdWx0KSxcbiAgICBzdG9yYWdlU2VydmljZTogKDAsIGF3aWxpeF8xLmFzQ2xhc3MpKENsb3VkaW5hcnlfMS5kZWZhdWx0KS5zaW5nbGV0b24oKSxcbiAgICBwYXltZW50U2VydmljZTogKDAsIGF3aWxpeF8xLmFzQ2xhc3MpKFN0cmlwZV8xLmRlZmF1bHQpLnNpbmdsZXRvbigpLFxufSk7XG5jb250YWluZXIubG9hZE1vZHVsZXMoW1xuICAgIC8vIExvYWQgdXNlLWNhc2VzXG4gICAgW1xuICAgICAgICBcImFwcC8qKi8qIShpbmRleC5qcykuanNcIixcbiAgICAgICAge1xuICAgICAgICAgICAgbGlmZXRpbWU6IGF3aWxpeF8xLkxpZmV0aW1lLlNDT1BFRCxcbiAgICAgICAgICAgIHJlZ2lzdGVyOiBhd2lsaXhfMS5hc0NsYXNzLFxuICAgICAgICB9LFxuICAgIF0sXG4gICAgLy8gTG9hZCByZXBvc2l0b3JpZXNcbiAgICBbXG4gICAgICAgIFwiY29udGFpbmVycy8qLypSZXBvc2l0b3J5LmpzXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxpZmV0aW1lOiBhd2lsaXhfMS5MaWZldGltZS5TQ09QRUQsXG4gICAgICAgICAgICByZWdpc3RlcjogYXdpbGl4XzEuYXNDbGFzcyxcbiAgICAgICAgfSxcbiAgICBdLFxuXSwge1xuICAgIGZvcm1hdE5hbWU6IFwiY2FtZWxDYXNlXCIsXG4gICAgcmVzb2x2ZXJPcHRpb25zOiB7fSxcbiAgICBjd2Q6IF9fZGlybmFtZSxcbn0pO1xuY29udGFpbmVyLmxvYWRNb2R1bGVzKFtcbiAgICAvLyBMb2FkIGVudGl0aWVzXG4gICAgW1xuICAgICAgICBcImNvbnRhaW5lcnMvKi8qRW50aXR5LmpzXCIsXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxpZmV0aW1lOiBhd2lsaXhfMS5MaWZldGltZS5TQ09QRUQsXG4gICAgICAgICAgICByZWdpc3RlcjogYXdpbGl4XzEuYXNDbGFzcyxcbiAgICAgICAgfSxcbiAgICBdLFxuXSwge1xuICAgIHJlc29sdmVyT3B0aW9uczoge30sXG4gICAgY3dkOiBfX2Rpcm5hbWUsXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNvbnRhaW5lcjtcbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTs7QUFDWkEsTUFBTSxDQUFDQyxjQUFjLENBQUNDLE9BQU8sRUFBRSxZQUFZLEVBQUU7RUFBRUMsS0FBSyxFQUFFO0FBQUssQ0FBQyxDQUFDO0FBQzdELElBQUlDLE9BQU8sR0FBR0MsT0FBTyxDQUFDLE9BQU8sQ0FBQztBQUM5QixJQUFJQyxRQUFRLEdBQUdELE9BQU8sQ0FBQyxRQUFRLENBQUM7QUFDaEMsSUFBSUUsZ0JBQWdCLEdBQUdGLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztBQUNoRCxJQUFJRyxnQkFBZ0IsR0FBR0osT0FBTyxDQUFDSyxlQUFlLENBQUNKLE9BQU8sa0NBQWdDLENBQUM7QUFDdkYsSUFBSUssUUFBUSxHQUFHTixPQUFPLENBQUNLLGVBQWUsQ0FBQ0osT0FBTyxpQkFBZSxDQUFDO0FBQzlELElBQUlNLFFBQVEsR0FBR1AsT0FBTyxDQUFDSyxlQUFlLENBQUNKLE9BQU8sMEJBQXdCLENBQUM7QUFDdkUsSUFBSU8sWUFBWSxHQUFHUixPQUFPLENBQUNLLGVBQWUsQ0FBQ0osT0FBTyw2QkFBMkIsQ0FBQztBQUM5RSxJQUFJUSxRQUFRLEdBQUdULE9BQU8sQ0FBQ0ssZUFBZSxDQUFDSixPQUFPLFlBQVUsQ0FBQztBQUN6RCxJQUFJUyxRQUFRLEdBQUdWLE9BQU8sQ0FBQ0ssZUFBZSxDQUFDSixPQUFPLHVC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
