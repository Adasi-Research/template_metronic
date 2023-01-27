import {IRequestsRepo} from "../models/IRequestsRepo";
import {IUser} from "../models/IUser";

export class RequestsInjections {
    value: number;
    private userRepo: IRequestsRepo;

    constructor(userRepo: IRequestsRepo) {
        this.userRepo = userRepo;
        this.value = userRepo.value;
    }

    async login(): Promise<IUser | null> {
        return await this.userRepo.login();
    }

    async register(user: IUser): Promise<IUser | null> {
        return await this.userRepo.register(user);
    }

}
