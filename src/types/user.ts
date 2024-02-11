export interface User {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  address: {
    address: string;
    city: string;
  };
  company: {
    name: string;
  };
}
