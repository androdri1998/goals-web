import React, { useCallback } from 'react';
import { MdChevronLeft } from 'react-icons/md';

import { history } from '../../store';

import { Container, ContentHeader, ContainerBackButton } from './styles';

interface IHeaderProps {
  title: string;
  withBackButton?: boolean;
}

const Header: React.FC<IHeaderProps> = ({
  children,
  title,
  withBackButton,
}) => {
  const handleBack = useCallback(() => {
    history.back();
  }, []);

  return (
    <Container>
      <ContentHeader>
        {withBackButton && (
          <ContainerBackButton onClick={handleBack}>
            <MdChevronLeft size={32} color="#22223B" />
          </ContainerBackButton>
        )}
        <p>{title}</p>
      </ContentHeader>
      {children}
    </Container>
  );
};

export default Header;
