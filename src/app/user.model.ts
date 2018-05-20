export class User {
  public id: number;
  public first_name: string;
  public last_name: string;
  public company_name: string;
  public city: string;
  public state: string;
  public zip: number;
  public email: string;
  public web: string;
  public age: number;

  constructor(
    id: number,
    first_name: string,
    last_name: string,
    company_name: string,
    city: string,
    state: string,
    zip: number,
    email: string,
    web: string,
    age: number
  ) {
    this.age = age;
    this.city = city;
    this.id = id;
    this.company_name = company_name;
    this.email = email;
    this.first_name = first_name;
    this.last_name = last_name;
    this.state = state;
    this.web = web;
    this.zip = zip;
  }
}
