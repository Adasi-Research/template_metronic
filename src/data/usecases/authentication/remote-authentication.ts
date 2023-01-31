import {HttpPostClient} from "@/src/data/protocols/http/http-post-client";
import {AuthenticationParams} from "@/src/domain/usecases/Authentication";

export class RemoteAuthentication {
    constructor(
        private readonly url: string,
        private readonly httpClient: HttpPostClient
    ) {
    }

    async auth(params: AuthenticationParams): Promise<void> {
        await this.httpClient.post({
            url: this.url,
            body: params
        });
    }
}
