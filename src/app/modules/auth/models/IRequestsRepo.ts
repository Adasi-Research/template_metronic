import {IUser} from "./IUser";

export interface IRequestsRepo {
    login(username: string, password: string): Promise<IUser | null>;
    register(user: IUser): Promise<IUser | null>;
    loading: boolean;
    error: string;
    response: string;
}
