import {RequestsInjections} from "./_requests";
import {LoginWithJavaApi} from "../pages/Login/service-login";

export const useContainers = () => {
    const AuthRequests = new RequestsInjections(new LoginWithJavaApi());

    return {
        AuthRequests,
    }
}
