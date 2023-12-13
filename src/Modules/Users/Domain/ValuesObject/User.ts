import { Country } from "./Country";
import { FirstName } from "./FirstName";
import { LastName } from "./LastName";
import { Picture } from "./Picture";
import { UserEmail } from "./UserEmail";
import { User as UserEntity } from "../Entities/UserEntity";

export class User {
  private readonly firstName: FirstName;

  private readonly lastName: LastName;

  private readonly email: UserEmail;

  private readonly country: Country;

  private readonly picture: Picture;

  constructor(data: UserEntity) {
    const {
      firstName = "",
      lastName = "",
      email = "",
      country = "",
      picture = "",
    } = data;

    this.firstName = new FirstName(firstName);
    this.lastName = new LastName(lastName);
    this.email = new UserEmail(email);
    this.country = new Country(country);
    this.picture = new Picture(picture);
  }

  getFirstName(): string {
    return this.firstName.getValue();
  }
  getLastName(): string {
    return this.lastName.getValue();
  }
  getEmail(): string {
    return this.email.getValue();
  }
  getCountry(): string {
    return this.country.getValue();
  }
  getPicture(): string {
    return this.picture.getValue();
  }

  toJson(): UserEntity {
    return {
      firstName: this.getFirstName(),
      lastName: this.getLastName(),
      email: this.getEmail(),
      country: this.getCountry(),
      picture: this.getPicture(),
    };
  }
}
