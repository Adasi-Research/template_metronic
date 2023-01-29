import {IRequestsRepo} from "../../../app/modules/auth/models/IRequestsRepo";
import {useAppDispatch, useAppSelector} from "../../hooks/useRedux";
import {loading} from "../../store/auth/authSlice";
import {IUser} from "../../../app/modules/auth/models/IUser";
import {AxiosHttpClient} from "../../containers/http/AxiosClient";

export class AuthServices implements IRequestsRepo {

    private dispatch = useAppDispatch();

    readonly error = useAppSelector((state) => state.auth.error);
    readonly loading = useAppSelector((state) => state.auth.loading);
    readonly response = useAppSelector((state) => state.auth.response);

    /**
     * @Methods
     * */
    async login(username: string, password: string): Promise<IUser | null> {
        this.dispatch(loading())

        new AxiosHttpClient().request({
            url: '/tesdte',
            method: 'get',
        }).then(() => {
            this.dispatch(loading())
        }).catch(() => {
            this.dispatch(loading())
        })
        return null
    }

    /**
     * @author Jonatas Alves
     * */
    async register(user: IUser): Promise<IUser | null> {

        return null
    }


}
