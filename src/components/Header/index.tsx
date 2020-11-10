import React from 'react';

import { Container, ContentHeader } from './styles';

const Header: React.FC = ({ children }) => {
  return (
    <Container>
      <ContentHeader>
        <p>Goals</p>
      </ContentHeader>
      {children}
    </Container>
  );
};

export default Header;
