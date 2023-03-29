import { IsString, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  firstname: string;
  lastname: string;
  dob: string;

  @IsString()
  job: string;
  state: string;
  city: string;
  street: string;
  picture: string;

  @IsPhoneNumber()
  phone: string;
}
