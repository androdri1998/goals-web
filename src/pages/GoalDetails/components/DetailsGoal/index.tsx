import React, { useMemo } from 'react';
import { format } from 'date-fns';

import Goal from '../../../../models/Goal';
import { formatCurrency } from '../../../../utils/helpers';

import {
  Container,
  Header,
  ProgressBar,
  Footer,
  Content,
  Title,
} from './styles';

interface IDetailsGoal {
  goal: Goal;
}

const DetailsGoal: React.FC<IDetailsGoal> = ({ goal = {} }) => {
  const currencyGoal = useMemo(() => {
    if (goal) {
      return formatCurrency({ value: goal.value || 0 });
    }
    return formatCurrency({ value: 0 });
  }, [goal]);

  const currencyDepositsGoal = useMemo(() => {
    return formatCurrency({ value: 0 });
  }, []);

  const percentageToReachGoal = useMemo(() => {
    return 0;
  }, []);

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
        {goal && <Title>{goal.title}</Title>}
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
        <span className="description">{`Until ${deadlineToReachGoal}`}</span>
      </Footer>
    </Container>
  );
};

export default DetailsGoal;
