import React, { useCallback, useMemo, useState } from 'react';
import { format } from 'date-fns';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import { formatCurrency } from '../../../../utils/helpers';
import { asyncRemoveDeposit } from '../../../../store/actions/goals.actions';

import {
  Container,
  Description,
  Value,
  ValueTotal,
  Footer,
  ContainerValue,
  ContainerIcon,
  ContainerHeader,
} from './styles';
import ModalConfirmation from '../ModalConfimation';

interface IDeposit {
  id: string;
  description: string;
  value: number;
  createdAt: string;
}

interface IItemDepositProps {
  deposit: IDeposit;
  goalId: string;
}

const ItemDeposit: React.FC<IItemDepositProps> = ({ deposit, goalId }) => {
  const dispatch = useDispatch();
  const [
    showModalToConfirmRemoveDeposit,
    setShowModalToConfirmRemoveDeposit,
  ] = useState(false);

  const handleOpenShowModalRemoveDeposit = useCallback(() => {
    setShowModalToConfirmRemoveDeposit(true);
  }, []);

  const handleCloseShowModalRemoveDeposit = useCallback(() => {
    setShowModalToConfirmRemoveDeposit(false);
  }, []);

  const handleOnAccept = useCallback(() => {
    if (goalId) {
      dispatch(asyncRemoveDeposit({ goalId, depositId: deposit.id }));
      setShowModalToConfirmRemoveDeposit(false);
    }
  }, [dispatch, setShowModalToConfirmRemoveDeposit, goalId, deposit]);

  const currencyDeposit = useMemo(() => {
    return formatCurrency({ value: deposit.value });
  }, [deposit.value]);

  const createdAt = useMemo(() => {
    return format(new Date(deposit.createdAt), "dd/MM/yyyy HH:mm 'horas'");
  }, [deposit.createdAt]);

  return (
    <>
      <Container>
        <ContainerHeader>
          <ContainerValue>
            <Value>{currencyDeposit}</Value>
            <ValueTotal>Saved</ValueTotal>
          </ContainerValue>
          <ContainerIcon
            data-testid="delete-btn-deposit"
            onClick={handleOpenShowModalRemoveDeposit}
          >
            <MdDelete color="#4a4e69" size={32} />
          </ContainerIcon>
        </ContainerHeader>
        <Description>{deposit.description}</Description>
        <Footer>
          <p>{createdAt}</p>
        </Footer>
      </Container>
      {showModalToConfirmRemoveDeposit && (
        <ModalConfirmation
          message="Você deseja excluir esse depósito?"
          acceptText="Sim"
          cancelText="Voltar"
          onCancel={handleCloseShowModalRemoveDeposit}
          onAccept={handleOnAccept}
        />
      )}
    </>
  );
};

export default ItemDeposit;
