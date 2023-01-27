import {IUser} from "./IUser";

export interface IRequestsRepo {
    login(): Promise<IUser | null>;

    register(user: IUser): Promise<IUser | null>;

    value: number;

}
