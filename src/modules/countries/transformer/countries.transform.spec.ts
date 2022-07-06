import { Country } from '../entities/country.entity';
import { countriesTransform, countryTransform } from './countries.transform';

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

  it('should transform countries to output', () => {
    const countries: Country[] = [makeCountry()];

    const actualCountry = countriesTransform(countries);

    expect(actualCountry.length).toBe(1);
    expect(actualCountry[0]._id).toBe(countries[0]._id);
    expect(actualCountry[0].name).toBe(countries[0].name);
    expect(actualCountry[0].slug).toBe(countries[0].slug);
    expect(actualCountry[0].createdAt).toStrictEqual(countries[0].createdAt);
    expect(actualCountry[0].updatedAt).toStrictEqual(countries[0].updatedAt);
  });
});
