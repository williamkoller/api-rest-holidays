import { Country } from '../entities/country.entity';

export const countriesTransform = (countries: Country[]): Country[] => {
  return countries.map(countryTransform);
};

export const countryTransform = (country: Country): Country => ({
  _id: country._id,
  name: country.name,
  slug: country.slug,
  createdAt: country.createdAt,
  updatedAt: country.updatedAt,
});
