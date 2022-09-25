import makeAuthApi from "./api";
import makeHttpService from "@/app/shared/http/service";

const service = makeHttpService({
  baseUrl: "/api",
});
const authApi = makeAuthApi(service);

export default authApi;
