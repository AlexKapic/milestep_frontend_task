interface IUser {
  gender: string;
  email: string;
  dob: {
    date: Date;
  };
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  nat: string;
}
export type { IUser };
