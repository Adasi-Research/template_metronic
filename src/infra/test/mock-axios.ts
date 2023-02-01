import axios from 'axios';
import {faker} from '@faker-js/faker';

const mockHttpResponse: any = () => ({
  data: {
    name: faker.name,
  },
  status: faker.internet.httpStatusCode(),
});

const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  mockedAxios.post.mockResolvedValue(mockHttpResponse());
  return mockedAxios;
};

export {mockAxios, mockHttpResponse};
