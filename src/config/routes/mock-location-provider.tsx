import { ReactLocation, Router } from '@tanstack/react-location';

const location = new ReactLocation();

export const LocationProvider = ({ children }: any) => (
  <Router location={location} routes={[]}>
    {children}
  </Router>
);
