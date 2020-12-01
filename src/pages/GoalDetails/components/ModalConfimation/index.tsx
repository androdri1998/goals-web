import React from 'react';

import {
  Container,
  ContainerConfirmation,
  Title,
  Message,
  ContainerButtons,
  CancelButton,
  AcceptButton,
} from './styles';

interface IModalConfirmationProps {
  title?: string;
  message: string;
  cancelText?: string;
  acceptText?: string;
  onCancel?: () => void;
  onAccept?: () => void;
}

const ModalConfirmation: React.FC<IModalConfirmationProps> = ({
  acceptText,
  cancelText,
  title,
  onAccept,
  onCancel,
  message,
}) => {
  return (
    <Container>
      <ContainerConfirmation>
        <Title>{title || 'Atenção'}</Title>
        <Message>{message}</Message>
        <ContainerButtons>
          <CancelButton data-testid="cancel-button" onClick={onCancel}>
            {cancelText || 'Cancelar'}
          </CancelButton>
          <AcceptButton data-testid="accept-button" onClick={onAccept}>
            {acceptText || 'Aceitar'}
          </AcceptButton>
        </ContainerButtons>
      </ContainerConfirmation>
    </Container>
  );
};

export default ModalConfirmation;
