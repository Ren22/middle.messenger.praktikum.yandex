import UserService from '../../services/userService';

type objWithSnakeKeys = Record<string, any>;
const snakeToCamel = (s: string) => s.replace(/(_\w)/g, (k) => k[1].toUpperCase());
const convertObj = (obj: objWithSnakeKeys) => Object.entries(obj)
  // eslint-disable-next-line no-param-reassign
  .reduce((x: objWithSnakeKeys, [k, v]) => (x[snakeToCamel(k)] = v) && x, {});

type User = {
  id: number,
  firstName: string,
  secondName: string,
  displayName: string,
  login: string,
  email: string,
  phone: string,
  avatar: string,
}
export default class ProfileController {
  userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  static getProfileData(): User {
    return convertObj(UserService.getUserInfo());
  }
}