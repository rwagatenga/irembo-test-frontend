import { AccountEnums } from '../enums/accountEnums';
import { GenderEnums } from '../enums/genderEnums';
import { MaritalStatusEnums } from '../enums/maritalStatusEnums';

export interface User {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: GenderEnums | '';
  age: number;
  dateOfBirth: string;
  maritalStatus: MaritalStatusEnums | '';
  nationality: string;
  account?: AccountEnums | '';
  identity?: {
    NID?: number;
    passport?: string;
  };
  verified?: boolean;
  profilePhoto?: string;
  password: string;
  confirmPassword: string;
}
