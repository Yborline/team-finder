type forUserString = string | null | undefined;
type forUserNumber = number | null;

export interface IUserForm {
  name?: forUserString;
  email?: forUserString;
  telegramLink?: forUserString;
  discordUsername?: forUserString;
}

export interface IUser extends IUserForm {
  id: forUserNumber;
}
