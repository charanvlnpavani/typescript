class User {
  readonly city: string = "Hyderabad";
  constructor(
    public userName: string,
    public email: string,
    public phoneNumber: number,
    protected address: string,
  ) {}
}
const user1 = new User(
  "pvlncharan",
  "pvlncharan@gmail.com",
  9963046104,
  "Hyderabad, Telangana, India",
  // new Date("1998-07-17"),
);
console.log(user1);
export {};
