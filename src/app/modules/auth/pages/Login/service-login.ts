import {IRequestsRepo} from "../../models/IRequestsRepo";
import {IUser} from "../../models/IUser";
import axios from "axios";
import {useAppDispatch, useAppSelector} from "../../../../../config/hooks/useRedux";
import {increment} from "../../../../../config/store/dashboard/counterSlice";

export class LoginWithJavaApi implements IRequestsRepo {
    value = useAppSelector((state) => state.counter.value)
    private dispatch = useAppDispatch();

    async login(): Promise<IUser | null> {

        const response = await axios.post<IUser>('http://192.168.0.8:8080/api/v1/auth/register', {
            firstname: "jonatas",
            lastname: "alves",
            email: "alvesjonatas99@gmail.com",
            password: '102030'
        }).then((res) => {
            this.dispatch(increment())
            return res.data
        }).catch(() => {
            return null;
        })

        return response
    }

    async register(user: IUser): Promise<IUser | null> {

        const response = await axios.post<IUser>('http://192.168.0.8:8080/api/v1/auth/register', user)
            .then((res) => {
                return res.data
            }).catch(() => {
                return null;
            })

        return response
    }


}
