import {RequestsInjections} from "./_requests";
import {toAbsoluteUrl} from "../../../../config/helpers";
import {IAssetsInjection} from "../models/IAssetsInjection";
import {AuthServices} from "../../../../config/services/auth-services";

export const useContainers = () => {
    const AuthRequests = new RequestsInjections(new AuthServices());

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
