import {type AuthenticationParams} from '@/domain/usecases';
import {type AccountModel} from '@/domain/models';

import {faker} from '@faker-js/faker';

export const mockAuthentication = (): AuthenticationParams => ({
  username: faker.internet.userName(),
  password: faker.internet.password(),
});

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid(),
});
