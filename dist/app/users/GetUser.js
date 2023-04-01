"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
var tslib_1 = require("tslib");
var UseCase_1 = tslib_1.__importDefault(require("../UseCase"));
var GetUser = /** @class */ (function (_super) {
  tslib_1.__extends(GetUser, _super);
  function GetUser(_a) {
    var userRepository = _a.userRepository;
    var _this = _super.call(this) || this;
    _this.userRepository = userRepository;
    return _this;
  }
  GetUser.prototype.execute = function (payload) {
    // Implement any logic needed for getting a user
    return this.userRepository.getOne(payload);
  };
  return GetUser;
})(UseCase_1.default);
exports.default = GetUser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInRzbGliXzEiLCJyZXF1aXJlIiwiVXNlQ2FzZV8xIiwiX19pbXBvcnREZWZhdWx0IiwiR2V0VXNlciIsIl9zdXBlciIsIl9fZXh0ZW5kcyIsIl9hIiwidXNlclJlcG9zaXRvcnkiLCJfdGhpcyIsImNhbGwiLCJwcm90b3R5cGUiLCJleGVjdXRlIiwicGF5bG9hZCIsImdldE9uZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi90eXBlZC9hcHAvdXNlcnMvR2V0VXNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIFVzZUNhc2VfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJhcHAvVXNlQ2FzZVwiKSk7XG52YXIgR2V0VXNlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhHZXRVc2VyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEdldFVzZXIoX2EpIHtcbiAgICAgICAgdmFyIHVzZXJSZXBvc2l0b3J5ID0gX2EudXNlclJlcG9zaXRvcnk7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnVzZXJSZXBvc2l0b3J5ID0gdXNlclJlcG9zaXRvcnk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgR2V0VXNlci5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uIChwYXlsb2FkKSB7XG4gICAgICAgIC8vIEltcGxlbWVudCBhbnkgbG9naWMgbmVlZGVkIGZvciBnZXR0aW5nIGEgdXNlclxuICAgICAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS5nZXRPbmUocGF5bG9hZCk7XG4gICAgfTtcbiAgICByZXR1cm4gR2V0VXNlcjtcbn0oVXNlQ2FzZV8xLmRlZmF1bHQpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IEdldFVzZXI7XG4iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7O0FBQ1pBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUUsWUFBWSxFQUFFO0VBQUVDLEtBQUssRUFBRTtBQUFLLENBQUMsQ0FBQztBQUM3RCxJQUFJQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxPQUFPLENBQUM7QUFDOUIsSUFBSUMsU0FBUyxHQUFHRixPQUFPLENBQUNHLGVBQWUsQ0FBQ0YsT0FBTyxjQUFlLENBQUM7QUFDL0QsSUFBSUcsT0FBTyxHQUFHLGFBQWUsVUFBVUMsTUFBTSxFQUFFO0VBQzNDTCxPQUFPLENBQUNNLFNBQVMsQ0FBQ0YsT0FBTyxFQUFFQyxNQUFNLENBQUM7RUFDbEMsU0FBU0QsT0FBTyxDQUFDRyxFQUFFLEVBQUU7SUFDakIsSUFBSUMsY0FBYyxHQUFHRCxFQUFFLENBQUNDLGNBQWM7SUFDdEMsSUFBSUMsS0FBSyxHQUFHSixNQUFNLENBQUNLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJO0lBQ3JDRCxLQUFLLENBQUNELGNBQWMsR0FBR0EsY0FBYztJQUNyQyxPQUFPQyxLQUFLO0VBQ2hCO0VBQ0FMLE9BQU8sQ0FBQ08sU0FBUyxDQUFDQyxPQUFPLEdBQUcsVUFBVUMsT0FBTyxFQUFFO0lBQzNDO0lBQ0EsT0FBTyxJQUFJLENBQUNMLGNBQWMsQ0FBQ00sTUFBTSxDQUFDRCxPQUFPLENBQUM7RUFDOUMsQ0FBQztFQUNELE9BQU9ULE9BQU87QUFDbEIsQ0FBQyxDQUFDRixTQUFTLENBQUNhLE9BQU8sQ0FBRTtBQUNyQmpCLE9BQU8sQ0FBQ2lCLE9BQU8sR0FBR1gsT0FBTyJ9
