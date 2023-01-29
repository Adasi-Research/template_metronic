import {IRequestsRepo} from "../models/IRequestsRepo";
import {IUser} from "../models/IUser";

export class RequestsInjections implements IRequestsRepo {
    private userRepo: IRequestsRepo;

    error: string;
    loading: boolean;
    response: string;

    constructor(userRepo: IRequestsRepo) {
        this.userRepo = userRepo;

        this.error = userRepo.error;
        this.loading = userRepo.loading;
        this.response = userRepo.response;
    }

    async login(username: string, password: string): Promise<IUser | null> {
        return await this.userRepo.login(username, password);
    }

    async register(user: IUser): Promise<IUser | null> {
        return await this.userRepo.register(user);
    }


}
