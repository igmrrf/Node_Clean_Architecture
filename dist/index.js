"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
var tslib_1 = require("tslib");
/**
 * Runs the application
 */
var App_1 = tslib_1.__importDefault(require("./App"));
var container_1 = tslib_1.__importDefault(require("./container"));
var app = new App_1.default(container_1.default.cradle);
app.start();
process.on("SIGINT", app.shutdown.bind(app));
process.on("SIGTERM", app.shutdown.bind(app));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInRzbGliXzEiLCJyZXF1aXJlIiwiQXBwXzEiLCJfX2ltcG9ydERlZmF1bHQiLCJjb250YWluZXJfMSIsImFwcCIsImRlZmF1bHQiLCJjcmFkbGUiLCJzdGFydCIsInByb2Nlc3MiLCJvbiIsInNodXRkb3duIiwiYmluZCJdLCJzb3VyY2VzIjpbIi4uL3R5cGVkL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG4vKipcbiAqIFJ1bnMgdGhlIGFwcGxpY2F0aW9uXG4gKi9cbnZhciBBcHBfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0FwcFwiKSk7XG52YXIgY29udGFpbmVyXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb250YWluZXJcIikpO1xudmFyIGFwcCA9IG5ldyBBcHBfMS5kZWZhdWx0KGNvbnRhaW5lcl8xLmRlZmF1bHQuY3JhZGxlKTtcbmFwcC5zdGFydCgpO1xucHJvY2Vzcy5vbihcIlNJR0lOVFwiLCBhcHAuc2h1dGRvd24uYmluZChhcHApKTtcbnByb2Nlc3Mub24oXCJTSUdURVJNXCIsIGFwcC5zaHV0ZG93bi5iaW5kKGFwcCkpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZOztBQUNaQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFLFlBQVksRUFBRTtFQUFFQyxLQUFLLEVBQUU7QUFBSyxDQUFDLENBQUM7QUFDN0QsSUFBSUMsT0FBTyxHQUFHQyxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLElBQUlDLEtBQUssR0FBR0YsT0FBTyxDQUFDRyxlQUFlLENBQUNGLE9BQU8sU0FBUyxDQUFDO0FBQ3JELElBQUlHLFdBQVcsR0FBR0osT0FBTyxDQUFDRyxlQUFlLENBQUNGLE9BQU8sZUFBZSxDQUFDO0FBQ2pFLElBQUlJLEdBQUcsR0FBRyxJQUFJSCxLQUFLLENBQUNJLE9BQU8sQ0FBQ0YsV0FBVyxDQUFDRSxPQUFPLENBQUNDLE1BQU0sQ0FBQztBQUN2REYsR0FBRyxDQUFDRyxLQUFLLEVBQUU7QUFDWEMsT0FBTyxDQUFDQyxFQUFFLENBQUMsUUFBUSxFQUFFTCxHQUFHLENBQUNNLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDUCxHQUFHLENBQUMsQ0FBQztBQUM1Q0ksT0FBTyxDQUFDQyxFQUFFLENBQUMsU0FBUyxFQUFFTCxHQUFHLENBQUNNLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDUCxHQUFHLENBQUMsQ0FBQyJ9
