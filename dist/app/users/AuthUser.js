"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
var tslib_1 = require("tslib");
var UseCase_1 = tslib_1.__importDefault(require("../UseCase"));
var assert_1 = tslib_1.__importDefault(require("assert"));
var password_1 = tslib_1.__importDefault(require("../../helpers/password"));
var AuthUser = /** @class */ (function (_super) {
  tslib_1.__extends(AuthUser, _super);
  function AuthUser(_a) {
    var userRepository = _a.userRepository;
    var _this = _super.call(this) || this;
    _this.userRepository = userRepository;
    (0, assert_1.default)(userRepository, "User Repository isn't provided");
    return _this;
  }
  AuthUser.prototype.execute = function (payload) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
      var username, email, mobile, password, query, auth;
      return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            (username = payload.username),
              (email = payload.email),
              (mobile = payload.mobile),
              (password = payload.password);
            query = {
              password: password_1.default.hash(password),
            };
            if (username) {
              query.username = username;
            }
            if (email) {
              query.username = username;
            }
            if (mobile) {
              query.username = username;
            }
            return [4 /*yield*/, this.userRepository.login(query)];
          case 1:
            auth = _a.sent();
            return [2 /*return*/, auth];
        }
      });
    });
  };
  return AuthUser;
})(UseCase_1.default);
exports.default = AuthUser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInRzbGliXzEiLCJyZXF1aXJlIiwiVXNlQ2FzZV8xIiwiX19pbXBvcnREZWZhdWx0IiwiYXNzZXJ0XzEiLCJwYXNzd29yZF8xIiwiQXV0aFVzZXIiLCJfc3VwZXIiLCJfX2V4dGVuZHMiLCJfYSIsInVzZXJSZXBvc2l0b3J5IiwiX3RoaXMiLCJjYWxsIiwiZGVmYXVsdCIsInByb3RvdHlwZSIsImV4ZWN1dGUiLCJwYXlsb2FkIiwiX19hd2FpdGVyIiwidXNlcm5hbWUiLCJlbWFpbCIsIm1vYmlsZSIsInBhc3N3b3JkIiwicXVlcnkiLCJhdXRoIiwiX19nZW5lcmF0b3IiLCJsYWJlbCIsImhhc2giLCJsb2dpbiIsInNlbnQiXSwic291cmNlcyI6WyIuLi8uLi8uLi90eXBlZC9hcHAvdXNlcnMvQXV0aFVzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciBVc2VDYXNlXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYXBwL1VzZUNhc2VcIikpO1xudmFyIGFzc2VydF8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImFzc2VydFwiKSk7XG52YXIgcGFzc3dvcmRfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJoZWxwZXJzL3Bhc3N3b3JkXCIpKTtcbnZhciBBdXRoVXNlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhBdXRoVXNlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBdXRoVXNlcihfYSkge1xuICAgICAgICB2YXIgdXNlclJlcG9zaXRvcnkgPSBfYS51c2VyUmVwb3NpdG9yeTtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMudXNlclJlcG9zaXRvcnkgPSB1c2VyUmVwb3NpdG9yeTtcbiAgICAgICAgKDAsIGFzc2VydF8xLmRlZmF1bHQpKHVzZXJSZXBvc2l0b3J5LCBcIlVzZXIgUmVwb3NpdG9yeSBpc24ndCBwcm92aWRlZFwiKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBdXRoVXNlci5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uIChwYXlsb2FkKSB7XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHVzZXJuYW1lLCBlbWFpbCwgbW9iaWxlLCBwYXNzd29yZCwgcXVlcnksIGF1dGg7XG4gICAgICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lID0gcGF5bG9hZC51c2VybmFtZSwgZW1haWwgPSBwYXlsb2FkLmVtYWlsLCBtb2JpbGUgPSBwYXlsb2FkLm1vYmlsZSwgcGFzc3dvcmQgPSBwYXlsb2FkLnBhc3N3b3JkO1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkgPSB7IHBhc3N3b3JkOiBwYXNzd29yZF8xLmRlZmF1bHQuaGFzaChwYXNzd29yZCkgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VybmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LnVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW1haWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeS51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vYmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LnVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnVzZXJSZXBvc2l0b3J5LmxvZ2luKHF1ZXJ5KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGggPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgYXV0aF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEF1dGhVc2VyO1xufShVc2VDYXNlXzEuZGVmYXVsdCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gQXV0aFVzZXI7XG4iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7O0FBQ1pBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUUsWUFBWSxFQUFFO0VBQUVDLEtBQUssRUFBRTtBQUFLLENBQUMsQ0FBQztBQUM3RCxJQUFJQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxPQUFPLENBQUM7QUFDOUIsSUFBSUMsU0FBUyxHQUFHRixPQUFPLENBQUNHLGVBQWUsQ0FBQ0YsT0FBTyxjQUFlLENBQUM7QUFDL0QsSUFBSUcsUUFBUSxHQUFHSixPQUFPLENBQUNHLGVBQWUsQ0FBQ0YsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3pELElBQUlJLFVBQVUsR0FBR0wsT0FBTyxDQUFDRyxlQUFlLENBQUNGLE9BQU8sMEJBQW9CLENBQUM7QUFDckUsSUFBSUssUUFBUSxHQUFHLGFBQWUsVUFBVUMsTUFBTSxFQUFFO0VBQzVDUCxPQUFPLENBQUNRLFNBQVMsQ0FBQ0YsUUFBUSxFQUFFQyxNQUFNLENBQUM7RUFDbkMsU0FBU0QsUUFBUSxDQUFDRyxFQUFFLEVBQUU7SUFDbEIsSUFBSUMsY0FBYyxHQUFHRCxFQUFFLENBQUNDLGNBQWM7SUFDdEMsSUFBSUMsS0FBSyxHQUFHSixNQUFNLENBQUNLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJO0lBQ3JDRCxLQUFLLENBQUNELGNBQWMsR0FBR0EsY0FBYztJQUNyQyxDQUFDLENBQUMsRUFBRU4sUUFBUSxDQUFDUyxPQUFPLEVBQUVILGNBQWMsRUFBRSxnQ0FBZ0MsQ0FBQztJQUN2RSxPQUFPQyxLQUFLO0VBQ2hCO0VBQ0FMLFFBQVEsQ0FBQ1EsU0FBUyxDQUFDQyxPQUFPLEdBQUcsVUFBVUMsT0FBTyxFQUFFO0lBQzVDLE9BQU9oQixPQUFPLENBQUNpQixTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLFlBQVk7TUFDdkQsSUFBSUMsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLElBQUk7TUFDbEQsT0FBT3ZCLE9BQU8sQ0FBQ3dCLFdBQVcsQ0FBQyxJQUFJLEVBQUUsVUFBVWYsRUFBRSxFQUFFO1FBQzNDLFFBQVFBLEVBQUUsQ0FBQ2dCLEtBQUs7VUFDWixLQUFLLENBQUM7WUFDRlAsUUFBUSxHQUFHRixPQUFPLENBQUNFLFFBQVEsRUFBRUMsS0FBSyxHQUFHSCxPQUFPLENBQUNHLEtBQUssRUFBRUMsTUFBTSxHQUFHSixPQUFPLENBQUNJLE1BQU0sRUFBRUMsUUFBUSxHQUFHTCxPQUFPLENBQUNLLFFBQVE7WUFDeEdDLEtBQUssR0FBRztjQUFFRCxRQUFRLEVBQUVoQixVQUFVLENBQUNRLE9BQU8sQ0FBQ2EsSUFBSSxDQUFDTCxRQUFRO1lBQUUsQ0FBQztZQUN2RCxJQUFJSCxRQUFRLEVBQUU7Y0FDVkksS0FBSyxDQUFDSixRQUFRLEdBQUdBLFFBQVE7WUFDN0I7WUFDQSxJQUFJQyxLQUFLLEVBQUU7Y0FDUEcsS0FBSyxDQUFDSixRQUFRLEdBQUdBLFFBQVE7WUFDN0I7WUFDQSxJQUFJRSxNQUFNLEVBQUU7Y0FDUkUsS0FBSyxDQUFDSixRQUFRLEdBQUdBLFFBQVE7WUFDN0I7WUFDQSxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDUixjQUFjLENBQUNpQixLQUFLLENBQUNMLEtBQUssQ0FBQyxDQUFDO1VBQzFELEtBQUssQ0FBQztZQUNGQyxJQUFJLEdBQUdkLEVBQUUsQ0FBQ21CLElBQUksRUFBRTtZQUNoQixPQUFPLENBQUMsQ0FBQyxDQUFDLFlBQVlMLElBQUksQ0FBQztRQUFDO01BRXhDLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOLENBQUM7RUFDRCxPQUFPakIsUUFBUTtBQUNuQixDQUFDLENBQUNKLFNBQVMsQ0FBQ1csT0FBTyxDQUFFO0FBQ3JCZixPQUFPLENBQUNlLE9BQU8sR0FBR1AsUUFBUSJ9
