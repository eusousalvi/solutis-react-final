import { createContext, useState } from 'react';

export const AvailabilityContext = createContext();

const constants = {
  minAvailability: 0,
  maxAvailability: 10,
};

export const AvailabilityCurrentYear = ({ children }) => {
  const [currentYear, setCurrentYear] = useState('2021');
  const [availabilityConstants, setavailabilityConstants] = useState(constants);

  return (
    <AvailabilityContext.Provider
      value={{ currentYear, setCurrentYear, availabilityConstants, setavailabilityConstants }}
    >
      {children}
    </AvailabilityContext.Provider>
  );
};
