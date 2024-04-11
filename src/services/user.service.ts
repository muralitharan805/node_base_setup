import { User } from "../models/user.entity";

const user = new User();
export class UserService {
  name: string;
  constructor() {
    this.name = user.name;
  }
  getUsers() {
    return this.name;
  }
}
