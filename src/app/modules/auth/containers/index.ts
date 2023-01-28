import {RequestsInjections} from "./_requests";
import {LoginWithJavaApi} from "../pages/Login/service-login";
import {toAbsoluteUrl} from "../../../../config/helpers";
import {IAssetsInjection} from "../models/IAssetsInjection";
import {IComponents} from "../models/IComponents";

interface Props {
    title: string,
}
export const useContainers = () => {
    const AuthRequests = new RequestsInjections(new LoginWithJavaApi());

    const Assets: IAssetsInjection = {
        pathBackground: toAbsoluteUrl('/media/logos/custom-1.png'),
        pathLogo: '',
    }

    const Components: {} = {}

    return {
        AuthRequests,
        Assets,
        Components,
    }
}
