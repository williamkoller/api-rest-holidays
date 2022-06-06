import { IsNotEmpty, IsString, Length } from 'class-validator';

export class AddCountryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 3)
  slug: string;
}
