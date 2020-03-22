export class Member {
  constructor(
    public firstName = "",
    public lastName = "",
    public email = "",
    public addAddress = false,
    public street1?: string,
    public street2?: string,
    public city?: string,
    public state = "",
    public zip?: string
  ) {}
}
