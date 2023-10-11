import data from './address.json'
import { Address } from './address.types';
import { searchAddresses } from './address.utils';

export const getAllAddresses = (search: string): Address[] => {
  const results: Address[] = searchAddresses(data, search);

  return results
}