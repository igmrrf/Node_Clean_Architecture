"use strict";

var config = {
  cloudName: {
    doc: "Cloudinary cloud name",
    format: "*",
    default: null,
    env: "CLOUDINARY_CLOUD_NAME",
    sensitive: true,
  },
  apiKey: {
    doc: "Cloudinary API key",
    format: "*",
    default: null,
    env: "CLOUDINARY_API_KEY",
    sensitive: true,
  },
  apiSecret: {
    doc: "Cloudinary API secret",
    format: "*",
    default: null,
    env: "CLOUDINARY_API_SECRET",
    sensitive: true,
  },
};
exports.cloudinary = config;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb25maWciLCJjbG91ZE5hbWUiLCJkb2MiLCJmb3JtYXQiLCJkZWZhdWx0IiwiZW52Iiwic2Vuc2l0aXZlIiwiYXBpS2V5IiwiYXBpU2VjcmV0IiwiZXhwb3J0cyIsImNsb3VkaW5hcnkiXSwic291cmNlcyI6WyIuLi8uLi90eXBlZC9jb25maWcvY2xvdWRpbmFyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBjb25maWcgPSB7XG4gICAgY2xvdWROYW1lOiB7XG4gICAgICAgIGRvYzogXCJDbG91ZGluYXJ5IGNsb3VkIG5hbWVcIixcbiAgICAgICAgZm9ybWF0OiBcIipcIixcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgZW52OiBcIkNMT1VESU5BUllfQ0xPVURfTkFNRVwiLFxuICAgICAgICBzZW5zaXRpdmU6IHRydWUsXG4gICAgfSxcbiAgICBhcGlLZXk6IHtcbiAgICAgICAgZG9jOiBcIkNsb3VkaW5hcnkgQVBJIGtleVwiLFxuICAgICAgICBmb3JtYXQ6IFwiKlwiLFxuICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICBlbnY6IFwiQ0xPVURJTkFSWV9BUElfS0VZXCIsXG4gICAgICAgIHNlbnNpdGl2ZTogdHJ1ZSxcbiAgICB9LFxuICAgIGFwaVNlY3JldDoge1xuICAgICAgICBkb2M6IFwiQ2xvdWRpbmFyeSBBUEkgc2VjcmV0XCIsXG4gICAgICAgIGZvcm1hdDogXCIqXCIsXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIGVudjogXCJDTE9VRElOQVJZX0FQSV9TRUNSRVRcIixcbiAgICAgICAgc2Vuc2l0aXZlOiB0cnVlLFxuICAgIH0sXG59O1xuZXhwb3J0cy5jbG91ZGluYXJ5ID0gY29uZmlnO1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZOztBQUNaLElBQUlBLE1BQU0sR0FBRztFQUNUQyxTQUFTLEVBQUU7SUFDUEMsR0FBRyxFQUFFLHVCQUF1QjtJQUM1QkMsTUFBTSxFQUFFLEdBQUc7SUFDWEMsT0FBTyxFQUFFLElBQUk7SUFDYkMsR0FBRyxFQUFFLHVCQUF1QjtJQUM1QkMsU0FBUyxFQUFFO0VBQ2YsQ0FBQztFQUNEQyxNQUFNLEVBQUU7SUFDSkwsR0FBRyxFQUFFLG9CQUFvQjtJQUN6QkMsTUFBTSxFQUFFLEdBQUc7SUFDWEMsT0FBTyxFQUFFLElBQUk7SUFDYkMsR0FBRyxFQUFFLG9CQUFvQjtJQUN6QkMsU0FBUyxFQUFFO0VBQ2YsQ0FBQztFQUNERSxTQUFTLEVBQUU7SUFDUE4sR0FBRyxFQUFFLHVCQUF1QjtJQUM1QkMsTUFBTSxFQUFFLEdBQUc7SUFDWEMsT0FBTyxFQUFFLElBQUk7SUFDYkMsR0FBRyxFQUFFLHVCQUF1QjtJQUM1QkMsU0FBUyxFQUFFO0VBQ2Y7QUFDSixDQUFDO0FBQ0RHLE9BQU8sQ0FBQ0MsVUFBVSxHQUFHVixNQUFNIn0=
