import { Builder } from "flatbuffers";
import makeUser from "../entity";
import type { User } from "../entity/types";
import type { AuthApi } from "./types";
import type { HttpService } from "@/app/shared/http/types";
import { LoginRequest } from "@/app/fbs/login-request";
import { HttpContentType } from "@/app/shared/http/enum";

const makeAuthApi = (service: HttpService) => {
  service.initService();

  return Object.freeze({
    login: async (username, password) => {
      const builder = new Builder();
      const usernameOffset = builder.createString(username);
      const passwordOffset = builder.createString(password);
      const offset = LoginRequest.createLoginRequest(
        builder,
        usernameOffset,
        passwordOffset
      );
      builder.finish(offset);

      const buf = builder.asUint8Array();
      await service.post("/auth/login", {
        body: buf.slice(0, buf.byteLength),
        contentType: HttpContentType.APPLICATION_FLATBUFFER,
      });
    },

    logout: async () => {
      await service.post("/auth/logout");
    },

    getUser: async () => {
      const res = await service.get("/user");
      return makeUser(res.body as User);
    },

    // register: () => {

    // },
  } as AuthApi);
};

export default makeAuthApi;
