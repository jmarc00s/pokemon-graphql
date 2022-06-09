import React, { ReactNode } from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { mocks } from './mocks';

interface MockedProviderProps {
  children: ReactNode;
}

export const GQLMockProvider = ({ children }: MockedProviderProps) => {
  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      {children}
    </MockedProvider>
  );
};
