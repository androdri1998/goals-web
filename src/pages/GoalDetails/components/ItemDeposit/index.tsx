import React, { useMemo } from 'react';
import { format } from 'date-fns';

import { formatCurrency } from '../../../../utils/helpers';

import {
  Container,
  Description,
  Value,
  ValueTotal,
  Footer,
  ContainerValue,
} from './styles';

interface IDeposit {
  id: string;
  description: string;
  value: number;
  createdAt: string;
}

interface IItemDepositProps {
  deposit: IDeposit;
}

const ItemDeposit: React.FC<IItemDepositProps> = ({ deposit }) => {
  const currencyDeposit = useMemo(() => {
    return formatCurrency({ value: deposit.value });
  }, [deposit.value]);

  const createdAt = useMemo(() => {
    return format(new Date(deposit.createdAt), "dd/MM/yyyy HH:mm 'horas'");
  }, [deposit.createdAt]);

  return (
    <Container>
      <ContainerValue>
        <Value>{currencyDeposit}</Value>
        <ValueTotal>Saved</ValueTotal>
      </ContainerValue>
      <Description>{deposit.description}</Description>
      <Footer>
        <p>{createdAt}</p>
      </Footer>
    </Container>
  );
};

export default ItemDeposit;
