import Constants from "expo-constants";
const { manifest } = Constants;
export const baseURL =
  "http://192.168.1.102:" + manifest?.debuggerHost?.split(":")[1];
