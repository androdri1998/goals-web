import React, { useMemo } from 'react';
import { format } from 'date-fns';
import { MdDelete } from 'react-icons/md';

import Goal from '../../../../models/Goal';

import { formatCurrency } from '../../../../utils/helpers';

import {
  Container,
  Header,
  ProgressBar,
  Footer,
  Content,
  Title,
  ContainerTitle,
  ContainerIcon,
} from './styles';

interface IDetailsGoal {
  goal: Goal;
  handleOpenDeleteGoal?: () => void;
}

const DetailsGoal: React.FC<IDetailsGoal> = ({
  goal,
  handleOpenDeleteGoal,
}) => {
  const currencyGoal = useMemo(() => {
    if (goal) {
      return formatCurrency({ value: goal.value || 0 });
    }
    return formatCurrency({ value: 0 });
  }, [goal]);

  const currencyDepositsGoal = useMemo(() => {
    if (goal && goal.deposits && goal.value) {
      const totalValueDeposits = goal.deposits.reduce((acumulador, deposit) => {
        return acumulador + deposit.value;
      }, 0);

      return formatCurrency({ value: totalValueDeposits });
    }

    return formatCurrency({ value: 0 });
  }, [goal]);

  const percentageToReachGoal = useMemo(() => {
    if (goal && goal.deposits && goal.value) {
      const totalValueDeposits = goal.deposits.reduce((acumulador, deposit) => {
        return acumulador + deposit.value;
      }, 0);

      const percentage = (totalValueDeposits / goal.value) * 100;
      return percentage;
    }

    return 0;
  }, [goal]);

  const deadlineToReachGoal = useMemo(() => {
    if (goal) {
      return goal.whenReach
        ? format(new Date(goal.whenReach), 'dd/MM/yyyy')
        : '';
    }

    return '';
  }, [goal]);

  const amountDeposits = useMemo(() => {
    if (goal) {
      return goal.deposits ? goal.deposits.length : 0;
    }

    return 0;
  }, [goal]);

  return (
    <Container>
      <Header>
        <ContainerTitle>
          <Title>{goal ? goal.title : ''}</Title>
          <ContainerIcon
            data-testid="delete-btn-goal"
            onClick={handleOpenDeleteGoal}
          >
            <MdDelete color="#f8f7ff" size={32} />
          </ContainerIcon>
        </ContainerTitle>
        <div>
          <p>{currencyDepositsGoal}</p>
          <p>{currencyGoal}</p>
        </div>
      </Header>
      <Content>
        <div>
          <ProgressBar percentage={percentageToReachGoal}>
            <div />
          </ProgressBar>
        </div>
      </Content>
      <Footer>
        <span className="description">{`${amountDeposits} Deposits`}</span>
        {percentageToReachGoal === 100 ? (
          <span className="description">Goal already reached</span>
        ) : (
          <span className="description">{`Until ${deadlineToReachGoal}`}</span>
        )}
      </Footer>
    </Container>
  );
};

export default DetailsGoal;
