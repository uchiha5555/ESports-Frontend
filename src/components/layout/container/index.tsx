import React from 'react';
import { Container } from './style';

const ContainerComponent = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default ContainerComponent;
