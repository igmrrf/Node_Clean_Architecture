"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
var tslib_1 = require("tslib");
/**
 * Automatically loads all configurations and exports them
 */
var fs_1 = tslib_1.__importDefault(require("fs"));
var path_1 = tslib_1.__importDefault(require("path"));
var dotenv_extended_1 = tslib_1.__importDefault(require("dotenv-extended"));
var convict_1 = tslib_1.__importDefault(require("convict"));
dotenv_extended_1.default.load({
  errorOnMissing: process.env.NODE_ENV === "production",
  path: ".env",
  errorOnExtra: false,
  includeProcessEnv: true,
});
var serviceConfig = {};
fs_1.default
  .readdirSync(__dirname)
  .filter(function (file) {
    return file !== path_1.default.basename(__filename) && path_1.default.extname(file) === ".js";
  })
  .forEach(function (file) {
    // eslint-disable-next-line
    var config = require(path_1.default.join(__dirname, file));
    serviceConfig = tslib_1.__assign(tslib_1.__assign({}, serviceConfig), config);
    serviceConfig = Object.assign(serviceConfig, config);
  });
var config = (0, convict_1.default)(serviceConfig);
config.validate({
  allowed: "strict",
});
exports.default = config;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInRzbGliXzEiLCJyZXF1aXJlIiwiZnNfMSIsIl9faW1wb3J0RGVmYXVsdCIsInBhdGhfMSIsImRvdGVudl9leHRlbmRlZF8xIiwiY29udmljdF8xIiwiZGVmYXVsdCIsImxvYWQiLCJlcnJvck9uTWlzc2luZyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInBhdGgiLCJlcnJvck9uRXh0cmEiLCJpbmNsdWRlUHJvY2Vzc0VudiIsInNlcnZpY2VDb25maWciLCJyZWFkZGlyU3luYyIsIl9fZGlybmFtZSIsImZpbHRlciIsImZpbGUiLCJiYXNlbmFtZSIsIl9fZmlsZW5hbWUiLCJleHRuYW1lIiwiZm9yRWFjaCIsImNvbmZpZyIsImpvaW4iLCJfX2Fzc2lnbiIsImFzc2lnbiIsInZhbGlkYXRlIiwiYWxsb3dlZCJdLCJzb3VyY2VzIjpbIi4uLy4uL3R5cGVkL2NvbmZpZy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuLyoqXG4gKiBBdXRvbWF0aWNhbGx5IGxvYWRzIGFsbCBjb25maWd1cmF0aW9ucyBhbmQgZXhwb3J0cyB0aGVtXG4gKi9cbnZhciBmc18xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImZzXCIpKTtcbnZhciBwYXRoXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicGF0aFwiKSk7XG52YXIgZG90ZW52X2V4dGVuZGVkXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZG90ZW52LWV4dGVuZGVkXCIpKTtcbnZhciBjb252aWN0XzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiY29udmljdFwiKSk7XG5kb3RlbnZfZXh0ZW5kZWRfMS5kZWZhdWx0LmxvYWQoe1xuICAgIGVycm9yT25NaXNzaW5nOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gICAgcGF0aDogXCIuZW52XCIsXG4gICAgZXJyb3JPbkV4dHJhOiBmYWxzZSxcbiAgICBpbmNsdWRlUHJvY2Vzc0VudjogdHJ1ZSxcbn0pO1xudmFyIHNlcnZpY2VDb25maWcgPSB7fTtcbmZzXzEuZGVmYXVsdC5yZWFkZGlyU3luYyhfX2Rpcm5hbWUpXG4gICAgLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xuICAgIHJldHVybiBmaWxlICE9PSBwYXRoXzEuZGVmYXVsdC5iYXNlbmFtZShfX2ZpbGVuYW1lKSAmJiBwYXRoXzEuZGVmYXVsdC5leHRuYW1lKGZpbGUpID09PSBcIi5qc1wiO1xufSlcbiAgICAuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIHZhciBjb25maWcgPSByZXF1aXJlKHBhdGhfMS5kZWZhdWx0LmpvaW4oX19kaXJuYW1lLCBmaWxlKSk7XG4gICAgc2VydmljZUNvbmZpZyA9IHRzbGliXzEuX19hc3NpZ24odHNsaWJfMS5fX2Fzc2lnbih7fSwgc2VydmljZUNvbmZpZyksIGNvbmZpZyk7XG4gICAgc2VydmljZUNvbmZpZyA9IE9iamVjdC5hc3NpZ24oc2VydmljZUNvbmZpZywgY29uZmlnKTtcbn0pO1xudmFyIGNvbmZpZyA9ICgwLCBjb252aWN0XzEuZGVmYXVsdCkoc2VydmljZUNvbmZpZyk7XG5jb25maWcudmFsaWRhdGUoeyBhbGxvd2VkOiBcInN0cmljdFwiIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY29uZmlnO1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZOztBQUNaQSxNQUFNLENBQUNDLGNBQWMsQ0FBQ0MsT0FBTyxFQUFFLFlBQVksRUFBRTtFQUFFQyxLQUFLLEVBQUU7QUFBSyxDQUFDLENBQUM7QUFDN0QsSUFBSUMsT0FBTyxHQUFHQyxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLElBQUlDLElBQUksR0FBR0YsT0FBTyxDQUFDRyxlQUFlLENBQUNGLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqRCxJQUFJRyxNQUFNLEdBQUdKLE9BQU8sQ0FBQ0csZUFBZSxDQUFDRixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDckQsSUFBSUksaUJBQWlCLEdBQUdMLE9BQU8sQ0FBQ0csZUFBZSxDQUFDRixPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUMzRSxJQUFJSyxTQUFTLEdBQUdOLE9BQU8sQ0FBQ0csZUFBZSxDQUFDRixPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDM0RJLGlCQUFpQixDQUFDRSxPQUFPLENBQUNDLElBQUksQ0FBQztFQUMzQkMsY0FBYyxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxLQUFLLFlBQVk7RUFDckRDLElBQUksRUFBRSxNQUFNO0VBQ1pDLFlBQVksRUFBRSxLQUFLO0VBQ25CQyxpQkFBaUIsRUFBRTtBQUN2QixDQUFDLENBQUM7QUFDRixJQUFJQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCZCxJQUFJLENBQUNLLE9BQU8sQ0FBQ1UsV0FBVyxDQUFDQyxTQUFTLENBQUMsQ0FDOUJDLE1BQU0sQ0FBQyxVQUFVQyxJQUFJLEVBQUU7RUFDeEIsT0FBT0EsSUFBSSxLQUFLaEIsTUFBTSxDQUFDRyxPQUFPLENBQUNjLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLElBQUlsQixNQUFNLENBQUNHLE9BQU8sQ0FBQ2dCLE9BQU8sQ0FBQ0gsSUFBSSxDQUFDLEtBQUssS0FBSztBQUNqRyxDQUFDLENBQUMsQ0FDR0ksT0FBTyxDQUFDLFVBQVVKLElBQUksRUFBRTtFQUN6QjtFQUNBLElBQUlLLE1BQU0sR0FBR3hCLE9BQU8sQ0FBQ0csTUFBTSxDQUFDRyxPQUFPLENBQUNtQixJQUFJLENBQUNSLFNBQVMsRUFBRUUsSUFBSSxDQUFDLENBQUM7RUFDMURKLGFBQWEsR0FBR2hCLE9BQU8sQ0FBQzJCLFFBQVEsQ0FBQzNCLE9BQU8sQ0FBQzJCLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRVgsYUFBYSxDQUFDLEVBQUVTLE1BQU0sQ0FBQztFQUM3RVQsYUFBYSxHQUFHcEIsTUFBTSxDQUFDZ0MsTUFBTSxDQUFDWixhQUFhLEVBQUVTLE1BQU0sQ0FBQztBQUN4RCxDQUFDLENBQUM7QUFDRixJQUFJQSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUVuQixTQUFTLENBQUNDLE9BQU8sRUFBRVMsYUFBYSxDQUFDO0FBQ2xEUyxNQUFNLENBQUNJLFFBQVEsQ0FBQztFQUFFQyxPQUFPLEVBQUU7QUFBUyxDQUFDLENBQUM7QUFDdENoQyxPQUFPLENBQUNTLE9BQU8sR0FBR2tCLE1BQU0ifQ==
