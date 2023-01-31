import {AxiosHttpClient} from "@/infra/http/axios-http-client/axios-http-client";

import axios from "axios";
import {faker} from "@faker-js/faker";


jest.mock('axios');
const mockedAxios = axios.post as jest.Mocked<typeof axios.post>;

const makeSut = (): AxiosHttpClient => {
    return new AxiosHttpClient()
}
describe('AxiosHttpClient', () => {
    test('Should call axios with correct url', async () => {
        const url = faker.internet.url()
        const sut = makeSut()
        await sut.post({
            url, body: {}
        })

        expect(mockedAxios).toHaveBeenCalledWith(url)
    })
})
