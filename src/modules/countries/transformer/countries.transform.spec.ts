import { Country } from '../entities/country.entity';
import { countryTransform } from './countries.transform';

const makeCountry = (): Country => ({
  _id: 'any_id',
  name: 'any_name',
  slug: 'any_slug',
  createdAt: new Date(),
  updatedAt: new Date(),
});

describe('Countries', () => {
  it('should transform country to output', () => {
    const country: Country = makeCountry();
    const actualCountry = countryTransform(country);
    expect(actualCountry).toEqual(country);
    expect(actualCountry._id).toBe(country._id);
    expect(actualCountry.name).toBe(country.name);
    expect(actualCountry.slug).toBe(country.slug);
    expect(actualCountry.createdAt).toStrictEqual(country.createdAt);
    expect(actualCountry.updatedAt).toStrictEqual(country.updatedAt);
  });
});
