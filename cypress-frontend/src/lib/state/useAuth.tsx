import { useState } from "react";
import { createContainer } from "unstated-next";

type CustomerData = {
  id: string;
  shippingInfo?: ShippingInfo;
  paymentInfo?: PaymentInfo;
};

type ShippingInfo = {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  zip: string;
  state: string;
  country: string;
};

type PaymentInfo = {
  cardName: string;
  cardNumber: string;
  cvv: string;
  expDate: string;
};

const useAuthContainer = () => {
  const [user, setUser] = useState<CustomerData | undefined>(undefined);

  return {
    signedIn: user ? true : false,
    user,
    setUser,
  };
};

export const {
  Provider: AuthProvider,
  useContainer: useAuth,
} = createContainer(useAuthContainer);
