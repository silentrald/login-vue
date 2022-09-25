import authApi from "../repo";
import makeUseAuthStore from "./user";

const useAuthStore = makeUseAuthStore(authApi);

export default useAuthStore;
