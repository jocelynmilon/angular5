import { User } from "../models/user.model";
import { Subject } from "rxjs/Subject";

export class UserService {
  private users: User[] = [
    {
      firstName: "james",
      lastName: "smith",
      email: "jame@smith.com",
      drinkPreference: "coca",
      hobbies: ["coder", "La degustation de café"]
    }
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }
  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
