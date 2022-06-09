import React, { ReactNode } from 'react';
import { Title } from './styles';

interface HeadingProps {
  children: ReactNode;
}

const Heading = ({ children }: HeadingProps) => {
  return <Title>{children}</Title>;
};

export default Heading;
