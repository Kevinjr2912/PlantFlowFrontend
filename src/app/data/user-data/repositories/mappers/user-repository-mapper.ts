import { Mapper } from '../../../../base/mapper';
import { UserModel } from '../../../../domain/models/User/user.model';
import { ResponseUser } from '../entities/User';

export class UserImplementationRepositoryMapper extends Mapper<
  ResponseUser,
  UserModel
> {
  mapFrom(res: ResponseUser): UserModel {
    return {
      id: parseInt(res.data.id),
      firstName: res.data.attributes.firstName,
      lastName: res.data.attributes.lastName,
      email: res.data.attributes.email,
      password: res.data.attributes.password,
    };
  }
}
