class MyResponse<D> {
  public data: D;
  public message: string;
}

enum Roles {
  Admin = 1,
  User = 2
}

export { MyResponse, Roles };
