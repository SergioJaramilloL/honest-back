import { Address } from './address.types'

export const searchAddresses = (addresses: Address[], searchCriteria: string): Address[] => {
  const filteredAddresses = addresses.filter((item) => {
    const { name, city, address, postal, state } = item;
    return (
      name.toLowerCase().includes(searchCriteria.toLowerCase()) ||
      city.toLowerCase().includes(searchCriteria.toLowerCase()) ||
      address.toLowerCase().includes(searchCriteria.toLowerCase()) ||
      postal.toLowerCase().includes(searchCriteria.toLowerCase()) ||
      state.toLowerCase().includes(searchCriteria.toLowerCase())
    );
  });

  return filteredAddresses;
}