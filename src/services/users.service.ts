import { ApiParams } from '../common/enums/users';
import { IUsers } from '../common/interfaces';
import { http } from './http.service';

class UsersApi {
  private http = http;

  private BASE = process.env.REACT_APP_API_URL;

  public async getUsers(gender = 'all', nat = 'all'): Promise<IUsers> {
    return this.http.load(
      `${this.BASE}?results=${ApiParams.results}&inc=${ApiParams.fields}&${ApiParams.info}&gender=${gender}&nat=${nat}`,
      {},
    );
  }
}

export const usersApi = new UsersApi();
