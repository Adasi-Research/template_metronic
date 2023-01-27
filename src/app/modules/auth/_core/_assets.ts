import {IAssetsInjection} from "../models/IAssetsInjection";

/**
 *  @param pathBackground -
 * */
export class AssetsController implements IAssetsInjection {

    pathBackground;

    constructor(pathBackground: string) {
        this.pathBackground = pathBackground
    }

    getUsers(): string {
        return 'teste'
    }

}
