import { useState } from "react";
import { createContainer } from "unstated-next";

const useCheckoutContainer = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return {
    activeStep,
    handleNext,
    handleBack,
  };
};

export const {
  Provider: CheckoutProvider,
  useContainer: useCheckout,
} = createContainer(useCheckoutContainer);
